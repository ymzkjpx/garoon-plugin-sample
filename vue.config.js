const path = require("path");
module.exports = {
    productionSourceMap: false,
    configureWebpack: config => {
        config.output.path = path.resolve(__dirname, 'dist')
        config.devtool = 'inline-source-map'
        config.output.filename = '[name].min.js'
        config.output.chunkFilename = '[name].min.js'
        config.style.css.filename = '[name].min.css'
    }
};