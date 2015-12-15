var React = require('react');

module.exports = {
    entry: './client/app.js',
    output: {
        path: "./client/public",
        filename: "bundle.js"
    },
    clearBeforeBuild: true
}