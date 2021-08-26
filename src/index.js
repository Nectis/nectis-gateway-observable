/**
 * @author Jonathan Terrell <jonathan.terrell@springbrook.es>
 * @copyright Copyright (c) 2019-2021 Springbrook S.L.
 * @license "Apache-2.0"
 */

import { Inspector, Runtime } from '@observablehq/runtime';
import Nivo from './Nivo';
import React from './React';

// -------------------------------------------------------------------------------------------------------------------------------
// Load Notebook
// -------------------------------------------------------------------------------------------------------------------------------

const urlPrefix = 'https://api.observablehq.com/@jonathan-terrell/';
const urlSuffix = '.js?v=3';

const cellTypeMap = new Map([
    ['h1', { label: 'Level 1 Header' }],
    ['h2', { label: 'Level 2 Header' }],
    ['n', { label: 'Narrative' }],
    ['t', { label: 'Tile' }],
    ['v', { label: 'Visual' }]
]);

const loadNotebook = (notebookId, elementRef) =>
    new Promise((resolve, reject) => {
        // NOTES: Do not convert import to await. Some combination of await and async results in an error. Linked to webpack dev/prod.
        import(/* webpackIgnore: true */ `${urlPrefix}${notebookId}${urlSuffix}`)
            .then((moduleNamespace) => {
                const notebook = moduleNamespace.default;

                const presentationElement = typeof elementRef === 'object' ? elementRef : document.getElementById(elementRef);
                while (presentationElement.firstChild) presentationElement.removeChild(presentationElement.lastChild);

                const runtime = new Runtime();
                const observableModule = runtime.module(notebook, (name) => {
                    if (!name) return true;

                    const cellType = cellTypeMap.get(name.split('_')[0]);
                    if (!cellType) return true;

                    const element = document.createElement('div');
                    presentationElement.appendChild(element);
                    const inspector = new Inspector(element);
                    return inspector;
                });
                observableModule.redefine('embedded', true);

                resolve(observableModule);
            })
            .catch((error) => reject(error));
    });

// -------------------------------------------------------------------------------------------------------------------------------
// Exports
// -------------------------------------------------------------------------------------------------------------------------------

export { Nivo, React, loadNotebook };
