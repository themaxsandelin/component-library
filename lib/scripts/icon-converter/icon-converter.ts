// Dependencies
import { readdir, readFile, writeFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { parse } from 'node-html-parser';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const iconsDir = path.join(__dirname, '/icons');
const outputDir = path.join(__dirname, '/../../assets/icons');

(async () => {
  const files = await readdir(iconsDir);
  const svgFiles = files.filter((file) => file.endsWith('.svg'));
  
  const template = await readFile(`${iconsDir}/../IconTemplate.tsx`, 'utf8'); 
  
  await Promise.all(
    svgFiles.map(async (file) => {
      const name = 'Icon' + file
        .replace('.svg', '')
        .replace('tabler-icon-', '')
        .split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join('');


      const html = await readFile(`${iconsDir}/${file}`, 'utf8');
      const svg = parse(html).childNodes[0];

      let innerHtml = svg.childNodes.map(childNode => childNode.toString()).join('');
      while (innerHtml.includes('black')) {
        innerHtml = innerHtml.replace('black', 'currentColor');
      }
      innerHtml = innerHtml.replace(/^\s+|\s+$/g, '');
      
      let iconHtmlString = template;
      iconHtmlString = iconHtmlString.replace('"{replace-me}"', innerHtml);
      iconHtmlString = iconHtmlString.replace('NAME', name);
      
      await writeFile(`${outputDir}/${name}.tsx`, iconHtmlString);
    })
  );
})();
