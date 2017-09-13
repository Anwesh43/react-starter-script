#!/usr/local/bin/node
console.log(process.argv.length)
const createReactProject = require('./react-starter-script')
createReactProject(process)
