const path = require('path');

module.exports = {
    entry: './src/index.js',
    experiments: { outputModule: true },
    mode: 'production',
    output: {
        // chunkFormat: 'module',
        filename: 'nectis-observable-es.js',
        library: { type: 'module' },
        path: path.resolve(__dirname, 'dist/webpack')
    }
};
