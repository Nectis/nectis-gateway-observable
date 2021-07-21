/**
 * @author Jonathan Terrell <jonathan.terrell@springbrook.es>
 * @copyright Copyright (c) 2019-2021 Springbrook S.L.
 * @license "Apache-2.0"
 */

import ChartPanel from './ChartPanel';

class TabPanel {
    constructor(element, items) {
        this.element = element;
        this.items = items;
    }

    show() {
        if (Array.isArray(this.items)) {
            let itemCount = -1;
            const visuals = this.items.map((item) => {
                itemCount++;
                return {
                    index: itemCount,
                    label: item.label,
                    vendors: item.vendors,
                    visualise: item.visualise
                };
            });
            replaceContent(this.element, buildTabbedTile(this, visuals));
            const visualElement = document.createElement('div');
            visualElement.id = 'visual';
            this.element.appendChild(visualElement);
            selectItem(this, visuals[0]);
        } else if (typeof items === 'object' && this.items !== null) {
            replaceContent(this.element, buildSimpleTile());
            showVisual(this, this.items);
        } else {
            replaceContent(this.element, buildEmptyTile());
            this.currentVisualiser = undefined;
        }
        return this;
    }
}

const defaultVisualHeight = 500;

const buildEmptyTile = () => {
    const element = document.createElement('div');
    element.style.cssText = `height: ${defaultVisualHeight}px`;
    return element;
};

const buildSimpleTile = () => {
    const element = document.createElement('div');
    element.id = 'visual';
    element.style.cssText = `height: ${defaultVisualHeight}px`;
    return element;
};

const buildTabbedTile = (tile, visuals) => {
    const tabsElement = document.createElement('div');
    tabsElement.className = 'tabBar';
    tabsElement.style.cssText = 'display: flex';
    for (const [index, visual] of visuals.entries()) {
        tabsElement.appendChild(buildTabButton(tile, index, visual));
    }
    return tabsElement;
};

const buildTabButton = (tile, visualIndex, visual) => {
    const tabButtonElement = document.createElement('div');
    tabButtonElement.className = 'tabButton';
    if (visual.vendors) tabButtonElement.dataset.vendors = JSON.stringify(visual.vendors);
    tabButtonElement.id = `tabButton_${visualIndex}`;
    tabButtonElement.onclick = () => selectItem(tile, visual);
    const labelTextNode = document.createTextNode(visual.label);
    tabButtonElement.appendChild(labelTextNode);
    return tabButtonElement;
};

const selectItem = (tile, visual) => {
    // Clear tab button selection.
    const tabButtons = tile.element.getElementsByClassName('tabButton');
    for (let i1 = 0; i1 < tabButtons.length; i1++) {
        tabButtons[i1].className = 'tabButton';
    }
    const selectedButton = tile.element.querySelector(`#tabButton_${visual.index}`);
    selectedButton.className = 'tabButton selected';
    showVisual(tile, visual, selectedButton);
};

const showVisual = (tile, visual, selectedButton) => {
    const panelElement = tile.element.querySelector('#visual');
    removeContent(panelElement);
    // if (visual.visualise) {
    //     tile.currentVisualiser = visual.visualise(panelElement);
    // } else {
    //     tile.currentVisualiser = undefined;
    // }

    const xxxx = selectedButton.dataset.vendors;
    console.log('xxxx', xxxx);
    const vendorsString = selectedButton.dataset.vendors;
    if (vendorsString) {
        const vendors = JSON.parse(vendorsString);
        buildVendors(panelElement, vendors);
    } else {
        console.log('NO VENDORS');
    }
};

// const showVisual1 = (tile, visual) => {
//     const panelElement = tile.element.querySelector('#visual');
//     removeContent(panelElement);
//     if (visual.visualise) {
//         tile.currentVisualiser = visual.visualise(panelElement);
//     } else {
//         tile.currentVisualiser = undefined;
//     }
// };

const buildVendors = (element, vendors) => {
    const vendorCount = vendors.length;
    if (vendorCount === 0) return;
    if (vendorCount === 1) {
        const vendor = vendors[0];
        if (vendor.vendorId) {
            buildVendor(vendor);
        } else {
            buildVisual(vendor);
        }
    } else {
        new ChartPanel.ChartPanelVisualiser(
            element,
            vendors.map((vendor) => buildVendor(vendor))
        ).show();
    }
};

const buildVendor = (vendor) => ({ typeId: vendor.id });

const buildVisual = () => {
    console.log('BUILD VISUAL');
};

const removeContent = (element) => {
    while (element.firstChild) element.firstChild.remove();
};

const replaceContent = (element, content) => {
    element.replaceChildren(content);
};

class TabPanelVisualiser {
    constructor(element, options) {
        this.element = element;
        this.options = options;
        this.visual = undefined;
    }

    show() {
        this.visual = new TabPanel(this.element, this.options).show();
        return this;
    }

    resize(items) {
        return this;
    }
}

// -------------------------------------------------------------------------------------------------------------------------------
// Exports
// -------------------------------------------------------------------------------------------------------------------------------

export default { TabPanelVisualiser };
