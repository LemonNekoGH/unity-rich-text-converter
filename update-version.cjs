const fs = require('node:fs')
const packageJson = require('./package.json')

packageJson.version = process.argv[2]
fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2))
