/**
 * @author Jonathan Terrell <jonathan.terrell@springbrook.es>
 * @copyright Copyright (c) 2019-2021 Springbrook S.L.
 * @license "Apache-2.0"
 */

const visualTypes = new Map([
    ['chartJS', { imageHeight: 24, imageSource: 'chartjs-logo.svg', label: 'Chart.js', labelPadding: 3 }],
    ['eCharts', { imageHeight: 17, imageSource: 'echarts-logo.png', label: 'ECharts', labelPadding: 5 }],
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
                itemCount++;
                return {
                    index: itemCount,
                    typeId: item.typeId,
                    visualise: item.visualise
                };
            });
            this.element.appendChild(buildTabbedTile(this, visuals));
            selectItem(this, visuals[0]);
        } else if (typeof this.items === 'object' && this.items !== null) {
            this.element.innerHTML = buildSimpleTile(this);
            showVisual(this, this.items);
        } else {
            this.element.innerHTML = buildEmptyTile(this);
            this.currentVisualiser = undefined;
        }
        return this;
    }
}

const defaultVisualHeight = 500;

const buildEmptyTile = (tile) => `<div style="height: ${defaultVisualHeight}px"></div>`;

const buildSimpleTile = (tile) => `<div id="visual" style="height: ${defaultVisualHeight}px"></div>`;

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
        tabsElement.appendChild(buildTab(tile, index, visual));
    }
    wrapperElement.appendChild(tabsElement);

    return wrapperElement;
};

const buildTab = (tile, visualIndex, visual) => {
    const visualType = visualTypes.get(visual.typeId);

    const tabElement = document.createElement('div');
    tabElement.className = 'vendorButton';
    tabElement.id = `vendorButton_${visualIndex}`;
    tabElement.onclick = () => selectItem(tile, visual);

    const image = document.createElement('img');
    image.height = visualType.imageHeight;
    image.src = `https://nectis-content.web.app/${visualType.imageSource}`;
    tabElement.appendChild(image);

    const labelElement = document.createElement('div');
    labelElement.style.cssText = `padding-left: ${visualType.labelPadding}px`;
    const labelTextNode = document.createTextNode(visualType.label);
    labelElement.appendChild(labelTextNode);
    tabElement.appendChild(labelElement);

    return tabElement;
};

// const buildTabbedTile2 = (tile, visuals) =>
//     ` <div style="display: flex; flex-direction: column">
//         <div id="visual" style="height: ${defaultVisualHeight}px"></div>
//         <div style="border-top: 1px solid #eee; color: #777; display: flex; font-size: 14px">
//             ${visuals.map((visual) => {
//                 switch (visual.typeId) {
//                     case 'chartJS':
//                         return ` ${Object.assign(
//                             `<div id="vendorButton_${visual.index}" class="vendorButton">
//                                 <img height="24" src="https://nectis-content.web.app/chartjs-logo.svg" />
//                                 <div style="padding-left: 3px">Chart.js</div>
//                             </div>`,
//                             {
//                                 onclick: (event) => {
//                                     console.log(1234);
//                                     selectItem(tile, visual);
//                                 }
//                             }
//                         )}`;
//                     case 'eCharts':
//                         return ` ${Object.assign(
//                             `<div id="vendorButton_${visual.index}" class="vendorButton">
//                                 <img height="17" src="https://nectis-content.web.app/echarts-logo.png" />
//                                 <div style="padding-left: 5px">ECharts</div>
//                             </div>`,
//                             { onclick: (event) => selectItem(tile, visual) }
//                         )}`;
//                     case 'highcharts':
//                         return ` ${Object.assign(
//                             `<div id="vendorButton_${visual.index}" class="vendorButton">
//                                 <img height="18" src="https://nectis-content.web.app/highcharts-logo.png" />
//                                 <div style="padding-left: 5px">Highcharts</div>
//                             </div>`,
//                             {
//                                 onclick: (event) => {
//                                     console.log(5678);
//                                     selectItem(tile, visual);
//                                 }
//                             }
//                         )}`;
//                     default:
//                         return '';
//                 }
//             })}
//             <div style="margin-left: auto">Options</div>
//         </div>
//     </div>`;

const selectItem = (tile, visual) => {
    // Clear vendor button selection.
    const vendorButtons = tile.element.getElementsByClassName('vendorButton');
    for (let i1 = 0; i1 < vendorButtons.length; i1++) {
        vendorButtons[i1].className = 'vendorButton';
    }

    tile.element.querySelector(`#vendorButton_${visual.index}`).className = 'vendorButton selected';

    showVisual(tile, visual);
};

const showVisual = (tile, visual) => {
    const panelElement = tile.element.querySelector('#visual');
    removeContent(panelElement);
    if (visual.visualise) {
        tile.currentVisualiser = visual.visualise(panelElement);
    } else {
        tile.currentVisualiser = undefined;
    }
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
