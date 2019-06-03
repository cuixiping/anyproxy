const fs = require('fs');
const path = require('path');
const webpcak = require('webpack');

const nodeModules = {};
/*
fs.readdirSync('node_modules')
    .filter(function(x) {
        return ['.bin'].indexOf(x) === -1;
    })
    .forEach(function(mod) {
        nodeModules[mod] = 'commonjs ' + mod;
    });
*/
//['fs', 'path']
    //.forEach(function(mod) {
        //nodeModules[mod] = 'commonjs ' + mod;
    //});

module.exports = {
    entry: [
        './proxy.js'
    ],
    output: {
        path: __dirname,
        filename: 'proxy.bundle.js'
    },
    mode: 'production',
    target: 'node',
    externals: nodeModules
};