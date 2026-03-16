const fs = require('fs');
const path = require('path');

const sourceDir = path.join(__dirname, 'appventure');
const targetDir = __dirname;

const files = fs.readdirSync(sourceDir);
for (const file of files) {
  const sourcePath = path.join(sourceDir, file);
  const targetPath = path.join(targetDir, file);
  fs.renameSync(sourcePath, targetPath);
}
fs.rmdirSync(sourceDir);
console.log('Files moved successfully.');
