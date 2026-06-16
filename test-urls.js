const fs = require('fs');
const path = require('path');
function findUrls(dir, urls) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      findUrls(fullPath, urls);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      const content = fs.readFileSync(fullPath, 'utf8');
      const matches = content.match(/https:\/\/images\.unsplash\.com\/[^\"\'\`\s\)]+/g);
      if (matches) {
        for (const m of matches) urls.add(m);
      }
    }
  }
}
const urls = new Set();
findUrls('./src', urls);
console.log('Found', urls.size, 'URLs. Testing...');
(async () => {
  for (const url of urls) {
    try {
      const res = await fetch(url, { method: 'HEAD' });
      if (!res.ok) console.log('BROKEN:', url, res.status);
    } catch (e) {
      console.log('ERROR:', url, e.message);
    }
  }
  console.log('Done testing.');
})();
