// Dependencies
import { readdir, writeFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const iconsDir = path.join(__dirname, '/../../assets/icons');
const exportFilePath = path.join(__dirname, '/../../icons.ts');

(async () => {
  const files = await readdir(iconsDir);
  const components = files.filter((file) => file.endsWith('.tsx'));

  let exportString = '';
  components.forEach((component) => {
    const name = component.replace('.tsx', '');
    exportString += `export { default as ${name} } from '@lib/assets/icons/${name}';\n`;
  });

  await writeFile(exportFilePath, exportString);
})();
