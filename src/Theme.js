/**
 * @author Jonathan Terrell <jonathan.terrell@springbrook.es>
 * @copyright Copyright (c) 2019-2021 Springbrook S.L.
 * @license "Apache-2.0"
 */

import chartJSStyle from './styles/chartJSStyle.css';
import narrativeStyle from './styles/narrativeStyle.css';
import tableStyle from './styles/tableStyle.css';
import themeStyle from './styles/themeStyle.css';

// -------------------------------------------------------------------------------------------------------------------------------
// Declarations - ?
// -------------------------------------------------------------------------------------------------------------------------------

const palettes = {
    category10: ['#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd', '#8c564b', '#e377c2', '#7f7f7f', '#bcbd22', '#17becf'],
    dark2: ['#1b9e77', '#d95f02', '#7570b3', '#e7298a', '#66a61e', '#e6ab02', '#a6761d', '#666666'],
    paired: [
        '#a6cee3',
        '#1f78b4',
        '#b2df8a',
        '#33a02c',
        '#fb9a99',
        '#e31a1c',
        '#fdbf6f',
        '#ff7f00',
        '#cab2d6',
        '#6a3d9a',
        '#ffff99',
        '#b15928'
    ],
    tableau10: ['#4e79a7', '#f28e2c', '#e15759', '#76b7b2', '#59a14f', '#edc949', '#af7aa1', '#ff9da7', '#9c755f', '#bab0ab']
};

const getColour = function getColour(paletteId, index) {
    return palettes[paletteId][index % palettes[paletteId].length];
};

const colours = {
    /* eslint-disable sort-keys */
    opening: getColour('tableau10', 5),
    starting: getColour('tableau10', 3),
    hires: getColour('paired', 2),
    terminations: getColour('paired', 6),
    ending: getColour('tableau10', 0),
    closing: getColour('tableau10', 2),
    openCloseDecrease: getColour('paired', 6),
    openCloseIncrease: getColour('paired', 2),
    startStopDecrease: getColour('paired', 7),
    startStopIncrease: getColour('paired', 3)
    /* eslint-enable sort-keys */
};

const getChartJSStyle = () => chartJSStyle;

const getNarrativeStyle = () => narrativeStyle;

const getStyle = () => themeStyle;

const getTableStyle = () => tableStyle;

// -------------------------------------------------------------------------------------------------------------------------------
// Exports
// -------------------------------------------------------------------------------------------------------------------------------

export default { colours, getChartJSStyle, getColour, getNarrativeStyle, getStyle, getTableStyle };
