const package = require('../../package.json')

const getVersion = () => console.log('version: ', package.version)

module.exports = getVersion
