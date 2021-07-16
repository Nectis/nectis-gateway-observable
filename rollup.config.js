/**
 * @author Jonathan Terrell <jonathan.terrell@springbrook.es>
 * @copyright Copyright (c) 2019-2021 Springbrook S.L.
 * @license "Apache-2.0"
 */

import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import nodeResolve from '@rollup/plugin-node-resolve';
import pkg from './package.json';
import typescript from 'rollup-plugin-typescript2';

// -------------------------------------------------------------------------------------------------------------------------------
// Exports
// -------------------------------------------------------------------------------------------------------------------------------

export default [
    {
        external: [],
        input: pkg.main,
        output: [
            {
                chunkFileNames: 'nectis-engine-[name]-[hash]-cjs.js',
                dir: './dist',
                entryFileNames: 'nectis-engine-cjs.js',
                exports: 'auto',
                format: 'cjs'
            },
            {
                chunkFileNames: 'nectis-engine-[name]-[hash]-es.js',
                dir: './dist',
                entryFileNames: 'nectis-engine-es.js',
                exports: 'auto',
                format: 'es'
            }
        ],
        plugins: [json(), typescript(), nodeResolve(), commonjs()]
    }
];
