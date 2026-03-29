const fs = require('fs');
try {
  const file = fs.readFileSync('public/scene.glb');
  const chunkLength = file.readUInt32LE(12);
  const jsonStr = file.toString('utf8', 20, 20 + chunkLength);
  const json = JSON.parse(jsonStr);
  console.log('Materials:', json.materials.map(m=>m.name).join(', '));
  console.log('Nodes:', json.nodes.map(n=>n.name).join(', '));
} catch(e) {
  console.error(e);
}
