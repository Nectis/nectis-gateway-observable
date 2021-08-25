/**
 * @author Jonathan Terrell <jonathan.terrell@springbrook.es>
 * @copyright Copyright (c) 2019-2021 Springbrook S.L.
 * @license "Apache-2.0"
 */

const path = require('path');

// -------------------------------------------------------------------------------------------------------------------------------
// Exports
// -------------------------------------------------------------------------------------------------------------------------------

module.exports = {
    entry: './src/index.js',
    experiments: { outputModule: true },
    mode: 'development',
    output: {
        // chunkFormat: 'module',
        filename: 'nectis-observable-es.js',
        library: { type: 'module' },
        path: path.resolve(__dirname, 'dist/webpack')
    }
};
