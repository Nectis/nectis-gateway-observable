/**
 * @author Jonathan Terrell <jonathan.terrell@springbrook.es>
 * @copyright Copyright (c) 2019-2021 Springbrook S.L.
 * @license "Apache-2.0"
 */

const visualTypes = new Map([
    ['chartJS', { imageHeight: 24, imageSource: 'chartJS-logo.svg', label: 'Chart.js', labelPadding: 3 }],
    ['eCharts', { imageHeight: 17, imageSource: 'eCharts-logo.png', label: 'ECharts', labelPadding: 5 }],
    ['highcharts', { imageHeight: 18, imageSource: 'highcharts-logo.png', label: 'Highcharts', labelPadding: 5 }]
]);

class ChartPanel {
    constructor(element, items) {
        this.element = element;
        this.items = items;
    }

    show() {
        if (Array.isArray(this.items)) {
            let itemCount = -1;
            const visuals = this.items.map((item) => {
                console.log('Vendor item', item);
                itemCount++;
                return {
                    callback: item.callback,
                    index: itemCount,
                    notebookId: item.notebookId,
                    typeId: item.typeId,
                    visualise: item.visualise
                };
            });
            replaceContent(this.element, buildTabbedTile(this, visuals));
            selectItem(this, visuals[0]);
        } else if (typeof this.items === 'object' && this.items !== null) {
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
    const wrapperElement = document.createElement('div');
    wrapperElement.style.cssText = 'display: flex; flex-direction: column';

    const visualElement = document.createElement('div');
    visualElement.style.cssText = `height: ${defaultVisualHeight}px`;
    visualElement.id = 'visual';
    wrapperElement.appendChild(visualElement);

    const tabsElement = document.createElement('div');

    tabsElement.style.cssText = 'border-top: 1px solid #eee; color: #777; display: flex; font-size: 14px';
    for (const [index, visual] of visuals.entries()) {
        tabsElement.appendChild(buildVendorButton(tile, index, visual));
    }

    const optionsButtonElement = document.createElement('div');
    optionsButtonElement.className = 'optionsButton';
    optionsButtonElement.onclick = () => {
        console.log('Options button clicked...');
    };
    optionsButtonElement.style.cssText = 'margin-left: auto';
    const labelTextNode = document.createTextNode('Options');
    optionsButtonElement.appendChild(labelTextNode);

    tabsElement.appendChild(optionsButtonElement);

    wrapperElement.appendChild(tabsElement);

    return wrapperElement;
};

const buildVendorButton = (tile, visualIndex, visual) => {
    const visualType = visualTypes.get(visual.typeId);

    const vendorButtonElement = document.createElement('div');
    vendorButtonElement.className = 'vendorButton';
    vendorButtonElement.id = `vendorButton_${visualIndex}`;
    vendorButtonElement.onclick = () => selectItem(tile, visual);

    const image = document.createElement('img');
    image.height = visualType.imageHeight;
    image.style.cssText = 'margin: 0';
    image.src = `https://nectis-content.web.app/${visualType.imageSource}`;
    vendorButtonElement.appendChild(image);

    const labelElement = document.createElement('div');
    labelElement.style.cssText = `padding-left: ${visualType.labelPadding}px`;
    const labelTextNode = document.createTextNode(visualType.label);
    labelElement.appendChild(labelTextNode);
    vendorButtonElement.appendChild(labelElement);

    return vendorButtonElement;
};

const selectItem = (tile, visual) => {
    // Clear vendor button selection.
    const vendorButtons = tile.element.getElementsByClassName('vendorButton');
    for (let i1 = 0; i1 < vendorButtons.length; i1++) {
        vendorButtons[i1].className = 'vendorButton';
    }

    tile.element.querySelector(`#vendorButton_${visual.index}`).className = 'vendorButton selected';

    showVisual(tile, visual);
};

const showVisual = async (tile, visual) => {
    console.log('Show visual', visual);
    const panelElement = tile.element.querySelector('#visual');
    removeContent(panelElement);
    // if (visual.visualise) {
    //     tile.currentVisualiser = visual.visualise(panelElement);
    // } else {
    //     tile.currentVisualiser = undefined;
    // }
    // const notebook = await loadNotebook(visual.notebookId);
    // console.log('notebook', notebook);
    visual.callback(visual.notebookId);
};

const loadNotebook = async (notebookId) => {
    return 123;
    //const module = await import(`https://api.observablehq.com/@jonathan-terrell/${notebookId}.js`);
    //return module;

    //const variables = {};
    //for (const variable of module.default.modules[0].variables) {
    //    const name = variable.name;
    //    variables[name] = { inputs: variable.inputs, value: variable.value };
    //}

    //const buildArgs = async (variables2, inputs) => {
    //    const args = [];
    //    for (const name of inputs) {
    //        const variable = variables2[name];
    //        const inputArgs = await buildArgs(variables2, variable.inputs || []);
    //        args.push(await variable.value(...inputArgs));
    //    }
    //    return args;
    //};

    //const args = await buildArgs(variables, variables.visualise.inputs || []);
    //return await variables.visualise.value(...args);
};

const removeContent = (element) => {
    while (element.firstChild) element.firstChild.remove();
};

const replaceContent = (element, content) => {
    element.replaceChildren(content);
};

class ChartPanelVisualiser {
    constructor(element, options) {
        this.element = element;
        this.options = options;
        this.visual = undefined;
    }

    show() {
        this.visual = new ChartPanel(this.element, this.options).show();
        return this;
    }

    resize(items) {
        return this;
    }
}

// -------------------------------------------------------------------------------------------------------------------------------
// Exports
// -------------------------------------------------------------------------------------------------------------------------------

export default { ChartPanelVisualiser };
