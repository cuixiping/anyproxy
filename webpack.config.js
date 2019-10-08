const fs = require('fs');
const path = require('path');
const webpcak = require('webpack');

const nodeModules = {};
Object.keys(require('./package.json').dependencies).forEach(name => {
	nodeModules[name] = 'commonjs ' + name;
});

module.exports = {
    context: __dirname,
    entry: [
        './proxy.js'
    ],
    output: {
        libraryTarget: "commonjs2",
        path: __dirname,
        filename: 'proxy.bundle.js'
    },
    mode: 'production',
    target: 'node',
    node: {
      __dirname: false,
      __filename: false,
    },
    externals: nodeModules
};