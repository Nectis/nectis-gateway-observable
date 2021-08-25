/**
 * @author Jonathan Terrell <jonathan.terrell@springbrook.es>
 * @copyright Copyright (c) 2019-2021 Springbrook S.L.
 * @license "Apache-2.0"
 */

import { Inspector, Runtime } from '@observablehq/runtime';

// import ChartJS from './ChartJS';
// import ChartPanel from './ChartPanel';
// import D3XYCharts from './D3XYChart';
// import ECharts from './ECharts';
// import Highcharts from './Highcharts';
import Nivo from './Nivo';
import React from './React';
// import TabPanel from './TabPanel';
// import Table from './Table';
// import Theme from './Theme';
// import Tile from './Tile';
// import WorkforceSize from './WorkforceSize';

// -------------------------------------------------------------------------------------------------------------------------------
// Load Notebook
// -------------------------------------------------------------------------------------------------------------------------------

const urlPrefix = 'https://api.observablehq.com/@jonathan-terrell/';
const urlSuffix = '.js?v=3';

const loadNotebook = async (notebookId, elementId) => {
    console.log(notebookId, elementId);

    const notebookURL = `${urlPrefix}${notebookId}${urlSuffix}`;
    const notebook = (await import(notebookURL)).default;
    const presentationElement = document.getElementById(elementId);
    const runtime = new Runtime();
    // const module = runtime.module(notebook, (name) => {
    //     if (!name) return true;
    //     if (name.startsWith('narrative_') || name.startsWith('visual_')) {
    //         const element = document.createElement('div');
    //         presentationElement.appendChild(element);
    //         const inspector = new Inspector(element);
    //         return inspector;
    //     }
    //     return true;
    // });
    // module.redefine('embedded', true);
};

// -------------------------------------------------------------------------------------------------------------------------------
// Exports
// -------------------------------------------------------------------------------------------------------------------------------

// export { ChartJS, ChartPanel, D3XYCharts, ECharts, Highcharts, TabPanel, Table, Theme, Tile, WorkforceSize };
export { Nivo, React, loadNotebook };
