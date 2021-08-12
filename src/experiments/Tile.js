/**
 * @author Jonathan Terrell <jonathan.terrell@springbrook.es>
 * @copyright Copyright (c) 2019-2021 Springbrook S.L.
 * @license "Apache-2.0"
 */

import TabPanel from './TabPanel';
import panelStyle from './styles/panelStyle.css';

// -------------------------------------------------------------------------------------------------------------------------------
// Declarations - Classes
// -------------------------------------------------------------------------------------------------------------------------------

const define = (options) => {
    const tileElement = document.createElement('div');
    tileElement.className = 'nectis';
    tileElement.dataset.options = JSON.stringify(options);

    const styleElement = document.createElement('style');
    styleElement.appendChild(document.createTextNode(panelStyle));
    tileElement.appendChild(styleElement);

    const visualElement = document.createElement('div');
    visualElement.id = 'content';
    tileElement.appendChild(visualElement);

    return tileElement;
};

const show = (element, callback) => {
    const options = JSON.parse(element.dataset.options);
    const tabs = (options || {}).tabs || [];
    const tabPanelVisualiser = new TabPanel.TabPanelVisualiser(element.querySelector('#content'), tabs, callback);
    tabPanelVisualiser.show();
};

// -------------------------------------------------------------------------------------------------------------------------------
// Exports
// -------------------------------------------------------------------------------------------------------------------------------

export default { define, show };

// -------------------------------------------------------------------------------------------------------------------------------
// Procedures
// -------------------------------------------------------------------------------------------------------------------------------
