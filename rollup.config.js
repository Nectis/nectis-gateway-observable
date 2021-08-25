/**
 * @author Jonathan Terrell <jonathan.terrell@springbrook.es>
 * @copyright Copyright (c) 2019-2021 Springbrook S.L.
 * @license "Apache-2.0"
 */

import commonjs from '@rollup/plugin-commonjs';
import css from 'rollup-plugin-import-css';
/**
 * @author Jonathan Terrell <jonathan.terrell@springbrook.es>
 * @copyright Copyright (c) 2019-2021 Springbrook S.L.
 * @license "Apache-2.0"
 */

// import json from '@rollup/plugin-json';
import nodeResolve from '@rollup/plugin-node-resolve';
import pkg from './package.json';
import replace from '@rollup/plugin-replace';

// -------------------------------------------------------------------------------------------------------------------------------
// Exports
// -------------------------------------------------------------------------------------------------------------------------------

export default [
    {
        external: [],
        input: pkg.main,
        output: [
            {
                chunkFileNames: 'nectis-observable-[name]-[hash]-es.js',
                dir: './dist/rollup',
                entryFileNames: 'nectis-observable-es.js',
                exports: 'auto',
                format: 'es'
            }
        ],
        plugins: [
            css(),
            /* json(), */
            nodeResolve(),
            commonjs(),
            replace({ preventAssignment: true, 'process.env.NODE_ENV': JSON.stringify('production') })
        ]
    }
];
