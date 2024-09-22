// Dependencies
import terser from '@rollup/plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import { vanillaExtractPlugin } from '@vanilla-extract/rollup-plugin';

// A custom plugin for merging all CSS files into a single file
// and deleting the original files.
let emittedCSSFiles = [];
const bundleCssEmits = () => ({
  name: 'bundle-css-emits',
  buildStart() {
    emittedCSSFiles = [];
  },
  renderChunk(code, chunkInfo) {
    const allImports = [...code.matchAll(/import".[^.]*.css.ts.[^.]*.css";/g)];
    const output = allImports.reduce((resultingCode, [importLine, moduleId]) => {
      const filePath = importLine.replace('import"./', '').replace('";', '');
      if (emittedCSSFiles.includes(filePath)) {
        console.log('Stripping: ' + importLine);
        return resultingCode.replace(importLine, '');
      }
      return resultingCode;
    }, code);
    return {
      code: output,
      map: chunkInfo.map ?? null,
    };
  },
  generateBundle(options, bundle) {
    const bundleCode = emittedCSSFiles
      .map(file => bundle[file])
      .map(({ name, fileName, source }) => (`/* ${name} -> ${fileName} */\n` + source))
      .join('\n\n');

    emittedCSSFiles.forEach((file) => {
      delete bundle[file];
    });

    this.emitFile({
      type: 'asset',
      name: 'styles.css',
      source: bundleCode,
    });
  },
});

export default [
  {
    input: "lib/main.ts",
    watch: {
      buildDelay: 500
    },
    external: ['react', 'react-dom', 'react/jsx-runtime'],
    plugins: [
      resolve(),
      commonjs(),
      typescript({
        tsconfig: "tsconfig.build.json"
      }),
      vanillaExtractPlugin(),
      terser({
        format: {
          preamble: '\'use client\';',
        }
      }),
      bundleCssEmits()
    ],
    output: [
      {
        file: "dist/main.js",
        format: "esm",
        assetFileNames(assetInfo) {
          const assetPath = assetInfo.name.replace(/^src\//, 'assets/');
          if (assetInfo.name.includes('.css.ts.vanilla.css') && !emittedCSSFiles.includes(assetPath)) {
            emittedCSSFiles.push(assetPath);
          }
          return assetPath;
        },
      },

    ]
  },
  {
    input: "dist/types/main.d.ts",
    output: [{ file: "dist/main.d.ts", format: "esm" }],
    plugins: [dts()],
    watch: {
      buildDelay: 500
    }
  }
];