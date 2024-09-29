// Dependencies
import { readdir, readFile, writeFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { parse } from 'node-html-parser';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const iconsDir = path.join(__dirname, '/../../assets/icons');
const outputDir = path.join(__dirname, '/../../assets/icons');

(async () => {
  const files = await readdir(iconsDir);
  const components = files.filter((file) => file.endsWith('.tsx'));

  const template = await readFile(path.join(__dirname, '/IconTemplate.tsx'), 'utf8');

  await Promise.all(
    components.map(async (component) => {
      const content = await readFile(path.join(iconsDir, component), 'utf8');
      const svgContents = content
        .substring(content.indexOf('xmlns="http://www.w3.org/2000/svg">') + 35, content.indexOf('</svg>'))
        .replace(/^\s+|\s+$/g, '')
        .replace('stroke-linejoin', 'strokeLinejoin')
        .replace('stroke-linecap', 'strokeLinecap')
        .replace('stroke-width', 'strokeWidth');

      let iconHtmlString = template.replace('{\'replace-me\'}', svgContents);
      while (iconHtmlString.includes('NAME')) {
        iconHtmlString = iconHtmlString.replace('NAME', component.replace('.tsx', ''));
      }
      
      await writeFile(path.join(outputDir, component), iconHtmlString);
    })
  );
  
})();
