var chartJSStyle = ".nectis .caret {\n    background: transparent;\n    border: 6px solid transparent;\n    display: inline-block;\n    height: 0;\n    pointer-events: none;\n    position: absolute;\n    width: 0;\n}\n.nectis .caret.right {\n    border-left-color: rgba(0, 0, 0, 0.75);\n}\n.nectis .caret.left {\n    border-right-color: rgba(0, 0, 0, 0.75);\n}\n\n.nectis .tooltip {\n    font-size: 14px;\n}\n.nectis .tooltip tr {\n    border: none;\n}\n.nectis .tooltip td {\n    border: none !important;\n    font-size: 14px;\n    padding: 0;\n}\n.nectis .tooltip td:last-child {\n    text-align: right;\n}\n";

var narrativeStyle = ".nectis * {\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans',\n        'Helvetica Neue', sans-serif;\n}\n\n.nectis h1 {\n    font-weight: 400;\n    font-size: 26px;\n    margin-left: auto;\n    margin-right: auto;\n    max-width: 640px;\n}\n\n.nectis h2 {\n    border-bottom: 1px solid #eee;\n    font-weight: 400;\n    font-size: 22px;\n    margin-left: auto;\n    margin-right: auto;\n    max-width: 640px;\n    padding-bottom: 5px;\n}\n.nectis h2::before {\n    background-image: url('https://nectis-content.web.app/analytics-light.svg');\n    background-size: 27px 24px;\n    content: '';\n    display: inline-block;\n    height: 24px;\n    margin-right: 10px;\n    width: 27px;\n}\n\n.nectis p {\n    font-size: 16px;\n    margin-left: auto;\n    margin-right: auto;\n    max-width: 640px;\n}\n\n.nectis ul {\n    font-size: 16px;\n    margin-left: auto;\n    margin-right: auto;\n    max-width: 640px;\n}\n\n.nectis div.warning {\n    background-color: rgba(255, 229, 100, 0.3);\n    border-left: 0.5rem #e7c000 solid;\n    color: #6b5900;\n    font-size: 16px;\n    margin: 16px auto;\n    max-width: 640px;\n}\n.nectis div.warning > div {\n    font-weight: 600;\n    padding: 8px 24px;\n}\n.nectis div.warning > div > div {\n    font-weight: 400;\n}\n";

var panelStyle = ".nectis .tabBar {\n    border-bottom: 1px solid #eee;\n    height: 48px;\n}\n\n.nectis .tabButton {\n    border-bottom: 2px solid transparent;\n    cursor: pointer;\n    display: flex;\n    font-size: 16px;\n    flex-direction: column;\n    justify-content: center;\n    padding-left: 15px;\n    padding-right: 15px;\n}\n.nectis .tabButton:hover {\n    background: #f7f7f7;\n}\n.nectis .tabButton.selected {\n    border-bottom-color: #388e3c;\n}\n.nectis .tabButton.selected:hover {\n    background: #eef5ef;\n}\n\n.nectis .optionsButton {\n    border-top: 2px solid transparent;\n    cursor: pointer;\n    font-size: 16px;\n    padding: 5px 10px 7px 10px;\n}\n.nectis .optionsButton:hover {\n    background: #f7f7f7;\n}\n\n.nectis .vendorButton {\n    border-top: 2px solid transparent;\n    align-items: center;\n    cursor: pointer;\n    display: flex;\n    font-size: 16px;\n    flex-direction: row;\n    padding: 5px 10px 7px 10px;\n}\n.nectis .vendorButton:hover {\n    background: #f7f7f7;\n}\n.nectis .vendorButton.selected {\n    border-top-color: #388e3c;\n}\n.nectis .vendorButton.selected:hover {\n    background: #eef5ef;\n}\n";

var tableStyle = ".nectis table {\n    border-collapse: collapse;\n    margin: 0;\n    max-width: none;\n}\n.nectis tr:not(:last-child) {\n    border-bottom: solid 1px #eee;\n    line-height: normal;\n}\n.nectis th {\n    font-size: 16px;\n    font-weight: 400;\n    padding: 5px 16px;\n    vertical-align: bottom;\n}\n.nectis td {\n    font-size: 16px;\n    padding: 5px 16px;\n}\n";

var themeStyle = "/**** Fonts */\n/* .nectis * { font-family: Arial, Helvetica, sans-serif; } */\n.nectis * {\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans',\n        'Helvetica Neue', sans-serif;\n}\n\n/**** Chart Container */\n.nectis .chartContainer {\n    background: #fefefe;\n    border: 1px solid #f7f7f7;\n    height: 500px;\n    margin: 32px 0;\n    padding: 10px;\n}\n\n/**** Collection Reference */\n/* .nectis .collection {\n    color: #888;\n    font-size: 14px;\n    font-style: italic;\n    margin: auto;\n    margin-top: -3px;\n    max-width: 640px;\n} */\n\n/**** Table Container */\n.nectis .tableContainer {\n    background: #fefefe;\n    border: 1px solid #f7f7f7;\n    margin: 32px 0;\n}\n";

/**
 * @author Jonathan Terrell <jonathan.terrell@springbrook.es>
 * @copyright Copyright (c) 2019-2021 Springbrook S.L.
 * @license "Apache-2.0"
 */

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
const getPanelStyle = () => panelStyle;
const getStyle = () => themeStyle;
const getTableStyle = () => tableStyle;

// -------------------------------------------------------------------------------------------------------------------------------
// Exports
// -------------------------------------------------------------------------------------------------------------------------------

var Theme = { colours, getChartJSStyle, getColour, getNarrativeStyle, getPanelStyle, getStyle, getTableStyle };

/**
 * @author Jonathan Terrell <jonathan.terrell@springbrook.es>
 * @copyright Copyright (c) 2019-2021 Springbrook S.L.
 * @license "Apache-2.0"
 */

// -------------------------------------------------------------------------------------------------------------------------------
// Declarations - Variables
// -------------------------------------------------------------------------------------------------------------------------------

let ChartJS;

// -------------------------------------------------------------------------------------------------------------------------------
// Declarations - Classes
// -------------------------------------------------------------------------------------------------------------------------------

class ChartJSVisualiser {
    constructor(element, options) {
        this.element = element;
        this.options = options;
        this.visual = undefined;
    }

    async show() {
        let chartElement = this.element.querySelector('#chart');
        if (chartElement) chartElement.remove();
        const canvas = document.createElement('canvas');
        canvas.setAttribute('id', 'chart');
        chartElement = this.element.appendChild(canvas);
        // eslint-disable-next-line require-atomic-updates
        if (!ChartJS) await loadChartJS();
        this.visual = new ChartJS(chartElement, this.options);
        return this;
    }

    resize(items) {
        return this;
    }
}

// -------------------------------------------------------------------------------------------------------------------------------
// ? - Connection Lines
// -------------------------------------------------------------------------------------------------------------------------------

const drawConnectionLines = (chart, args, options) => {
    const config = chart.config;
    const configData = config.data;
    const configOptions = config.options;

    if (!configOptions.displayConnectionLines) return;

    const scales = chart.scales;
    const xAxis = scales.x;
    const yAxis = scales.y;

    const canvasRenderingContext2D = chart.ctx;

    const dataset = configData.datasets[2];
    const count = dataset.data.length - 1;
    for (let index = 0; index < count; index++) {
        const row = dataset.data[index];
        drawConnectionLine(canvasRenderingContext2D, xAxis, yAxis, row[1], index);
    }
};

const drawConnectionLine = (context, xAxis, yAxis, line, index) => {
    const y1 = scaleLinear(line, yAxis.min, yAxis.max, yAxis.height, 0, yAxis.top);

    context.save();

    context.strokeStyle = '#aaa';
    context.globalCompositeOperation = 'destination-over';
    context.lineWidth = 1;

    const bandWidth = xAxis.width / xAxis.ticks.length;
    const left = xAxis.left + bandWidth * index + bandWidth * 0.14;
    const right = left + bandWidth * 2 - bandWidth * 0.28;

    context.beginPath();
    context.moveTo(left + 1, y1);
    context.lineTo(right - 1, y1);
    context.stroke();

    context.restore();
};

const scaleLinear = (value, domainStart, domainEnd, rangeStart, rangeEnd, rangeOffset) => {
    const factor = (rangeEnd - rangeStart) / (domainEnd - domainStart);
    return rangeStart + factor * (value - domainStart) + rangeOffset;
};

// -------------------------------------------------------------------------------------------------------------------------------
// ? - Legend
// -------------------------------------------------------------------------------------------------------------------------------

const getLegendSymbol = (legendHitBoxes, legendIndex) => {
    const green = legendIndex === 0 ? Theme.getColour('paired', 2) : Theme.getColour('paired', 3);
    const orange = legendIndex === 0 ? Theme.getColour('paired', 6) : Theme.getColour('paired', 7);

    if (legendHitBoxes.length < legendIndex + 1) return undefined;
    const left = legendHitBoxes[legendIndex].left;
    const top = legendHitBoxes[legendIndex].top;

    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    const gradient = context.createLinearGradient(left, top, left + 30, top + 15);

    gradient.addColorStop(0, green);
    gradient.addColorStop(0.47, green);
    gradient.addColorStop(0.47, 'white');
    gradient.addColorStop(0.53, 'white');
    gradient.addColorStop(0.53, orange);
    gradient.addColorStop(1, orange);

    canvas.remove();
    return gradient;
};

// -------------------------------------------------------------------------------------------------------------------------------
// ? - Tooltip
// -------------------------------------------------------------------------------------------------------------------------------

const headcountTooltipHandler = (context, workforceData) => {
    // Tooltip Element
    const { chart, tooltip } = context;
    const { caretElement, tooltipElement } = establishTooltip(chart, tooltip);

    // Hide if no tooltip
    if (tooltip.opacity === 0) {
        caretElement.style.opacity = 0;
        tooltipElement.style.opacity = 0;
        return;
    }

    // Set Text
    if (tooltip.body) {
        const thead = document.createElement('thead');
        for (const title of tooltip.title || []) {
            const tr = document.createElement('tr');
            const th = document.createElement('th');
            th.style.cssText = 'color: white; font-weight: bold; padding: 0 0 5px 5px; text-align: left';
            const text = document.createTextNode(title);
            th.appendChild(text);
            tr.appendChild(th);
            thead.appendChild(tr);
        }
        const tbody = document.createElement('tbody');

        const month = workforceData[tooltip.dataPoints[0].dataIndex];
        tbody.appendChild(buildRow('Opening Headcount', month.openingHeadcount));
        tbody.appendChild(buildRow('+ Starting Hires', month.startingHires));
        tbody.appendChild(buildRow('= Starting Headcount', month.openingHeadcount + month.startingHires));
        tbody.appendChild(buildRow('+ In Period Hires', month.hires - month.startingHires));
        tbody.appendChild(buildRow('- In Period Terminations', month.terminations - month.endingTerminations));
        tbody.appendChild(buildRow('= Ending Headcount', month.closingHeadcount + month.endingTerminations));
        tbody.appendChild(buildRow('- Ending Terminations', month.endingTerminations));
        tbody.appendChild(buildRow('= Closing Headcount', month.closingHeadcount));

        const tableRoot = tooltipElement.querySelector('table');

        // Remove old children
        while (tableRoot.firstChild) {
            tableRoot.firstChild.remove();
        }

        // Add new children
        tableRoot.appendChild(thead);
        tableRoot.appendChild(tbody);
    }

    const { offsetLeft: positionX, offsetTop: positionY } = chart.canvas;

    const canvasBounds = chart.canvas.getBoundingClientRect();
    const canvasBottom = positionY + canvasBounds.height;

    const tooltipBounds = tooltipElement.getBoundingClientRect();
    const tooltipHeight = tooltipBounds.height;
    const tooltipWidth = tooltipBounds.width;

    let top = positionY + tooltip.caretY - 12;

    if (top + tooltipHeight > canvasBottom) top -= top + tooltipHeight - canvasBottom;

    caretElement.className = `caret ${tooltip.xAlign}`;
    caretElement.style.cssText = `left: ${positionX + tooltip.caretX - 6}px; top: ${positionY + tooltip.caretY}px`;

    // Display, position, and set styles for font
    tooltipElement.style.opacity = 1;
    if (tooltip.xAlign === 'left') {
        tooltipElement.style.left = `${positionX + tooltip.caretX + 6}px`;
    } else {
        tooltipElement.style.left = `${positionX + tooltip.caretX - tooltipWidth - 6}px`;
    }
    tooltipElement.style.top = `${top}px`;
};

const establishTooltip = (chart, tooltip) => {
    const parentNode = chart.canvas.parentNode;

    let caretElement = parentNode.querySelector('#nectisCaret');
    if (!caretElement) {
        caretElement = document.createElement('div');
        caretElement.id = 'nectisCaret';
        parentNode.appendChild(caretElement);
    }

    let tooltipElement = parentNode.querySelector('#nectisTooltip');
    if (!tooltipElement) {
        tooltipElement = document.createElement('div');
        tooltipElement.id = 'nectisTooltip';
        tooltipElement.style.background = 'rgba(0, 0, 0, 0.75)';
        tooltipElement.style.borderRadius = '5px';
        tooltipElement.style.color = 'white';
        tooltipElement.style.opacity = 1;
        tooltipElement.style.padding = `${tooltip.options.padding}px `;
        tooltipElement.style.pointerEvents = 'none';
        tooltipElement.style.position = 'absolute';
        const table = document.createElement('table');
        table.style['border-collapse'] = 'collapse';
        tooltipElement.appendChild(table);
        parentNode.appendChild(tooltipElement);
    }

    return { caretElement, tooltipElement };
};

const buildRow = (label, value) => {
    const tr = document.createElement('tr');
    tr.style.borderWidth = 0;

    const tdLabel = document.createElement('td');
    tdLabel.style.cssText = 'border-width: 0; border-style: solid; border-color: white; color: white; padding: 5px 5px';
    tdLabel.appendChild(document.createTextNode((label || '').replaceAll(' ', '\xa0')));
    tr.appendChild(tdLabel);

    const tdValue = document.createElement('td');
    const border = label.startsWith('=') ? 'border-top: 1px solid white; ' : '';
    tdValue.style.cssText = `${border}color: white; padding: 5px 5px; text-align: right`;
    tdValue.appendChild(document.createTextNode(headcountFormatter().format(value)));
    tr.appendChild(tdValue);

    return tr;
};

const headcountFormatter = () => new Intl.NumberFormat();

// -------------------------------------------------------------------------------------------------------------------------------
// Exports
// -------------------------------------------------------------------------------------------------------------------------------

var ChartJS$1 = { ChartJSVisualiser, drawConnectionLines, getLegendSymbol, headcountTooltipHandler };

// -------------------------------------------------------------------------------------------------------------------------------
// Procedures
// -------------------------------------------------------------------------------------------------------------------------------

const loadChartJS = async () => {
    // Import Chart.js module.
    const chartJS = await import('./nectis-observable-chart.esm-343412f9-es.js');
    ChartJS = chartJS.Chart;

    // Register controllers, elements, scales and plugins.
    ChartJS.register(chartJS.BarController);
    ChartJS.register(chartJS.BarElement);
    ChartJS.register(chartJS.CategoryScale);
    ChartJS.register(chartJS.Legend);
    ChartJS.register(chartJS.LineController);
    ChartJS.register(chartJS.LineElement);
    ChartJS.register(chartJS.LinearScale);
    ChartJS.register(chartJS.PointElement);
    ChartJS.register(chartJS.Title);
    ChartJS.register(chartJS.Tooltip);

    // Modify default options.
    ChartJS.defaults.animation = false;
    ChartJS.defaults.font.size = 16;
    ChartJS.defaults.layout.padding = 2;
    ChartJS.defaults.plugins.legend.position = 'bottom';
    ChartJS.defaults.plugins.legend.labels.boxHeight = 15;
    ChartJS.defaults.plugins.legend.labels.boxWidth = 30;
    ChartJS.defaults.plugins.title.display = true;
    ChartJS.defaults.plugins.title.font.size = 20;
    ChartJS.defaults.plugins.title.font.weight = 'normal';
    ChartJS.defaults.maintainAspectRatio = false;
};

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
                itemCount++;
                return {
                    index: itemCount,
                    typeId: item.typeId,
                    visualise: item.visualise
                };
            });
            replaceContent$1(this.element, buildTabbedTile$1(this, visuals));
            selectItem$1(this, visuals[0]);
        } else if (typeof this.items === 'object' && this.items !== null) {
            replaceContent$1(this.element, buildSimpleTile$1());
            showVisual$1(this, this.items);
        } else {
            replaceContent$1(this.element, buildEmptyTile$1());
            this.currentVisualiser = undefined;
        }
        return this;
    }
}

const defaultVisualHeight$1 = 500;

const buildEmptyTile$1 = () => {
    const element = document.createElement('div');
    element.style.cssText = `height: ${defaultVisualHeight$1}px`;
    return element;
};

const buildSimpleTile$1 = () => {
    const element = document.createElement('div');
    element.id = 'visual';
    element.style.cssText = `height: ${defaultVisualHeight$1}px`;
    return element;
};

const buildTabbedTile$1 = (tile, visuals) => {
    const wrapperElement = document.createElement('div');
    wrapperElement.style.cssText = 'display: flex; flex-direction: column';

    const visualElement = document.createElement('div');
    visualElement.style.cssText = `height: ${defaultVisualHeight$1}px`;
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
    vendorButtonElement.onclick = () => selectItem$1(tile, visual);

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

const selectItem$1 = (tile, visual) => {
    // Clear vendor button selection.
    const vendorButtons = tile.element.getElementsByClassName('vendorButton');
    for (let i1 = 0; i1 < vendorButtons.length; i1++) {
        vendorButtons[i1].className = 'vendorButton';
    }

    tile.element.querySelector(`#vendorButton_${visual.index}`).className = 'vendorButton selected';

    showVisual$1(tile, visual);
};

const showVisual$1 = (tile, visual) => {
    const panelElement = tile.element.querySelector('#visual');
    removeContent$1(panelElement);
    if (visual.visualise) {
        tile.currentVisualiser = visual.visualise(panelElement);
    } else {
        tile.currentVisualiser = undefined;
    }
};

const removeContent$1 = (element) => {
    while (element.firstChild) element.firstChild.remove();
};

const replaceContent$1 = (element, content) => {
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

var ChartPanel$1 = { ChartPanelVisualiser };

/**
 * @author Jonathan Terrell <jonathan.terrell@springbrook.es>
 * @copyright Copyright (c) 2019-2021 Springbrook S.L.
 * @license "Apache-2.0"
 */

// -------------------------------------------------------------------------------------------------------------------------------
// Exports
// -------------------------------------------------------------------------------------------------------------------------------

var D3XYChart = {};

/**
 * @author Jonathan Terrell <jonathan.terrell@springbrook.es>
 * @copyright Copyright (c) 2019-2021 Springbrook S.L.
 * @license "Apache-2.0"
 */

// -------------------------------------------------------------------------------------------------------------------------------
// Exports
// -------------------------------------------------------------------------------------------------------------------------------

var ECharts = {};

/**
 * @author Jonathan Terrell <jonathan.terrell@springbrook.es>
 * @copyright Copyright (c) 2019-2021 Springbrook S.L.
 * @license "Apache-2.0"
 */

// -------------------------------------------------------------------------------------------------------------------------------
// Declarations - Variables
// -------------------------------------------------------------------------------------------------------------------------------

let Highcharts;

// -------------------------------------------------------------------------------------------------------------------------------
// Declarations - Classes
// -------------------------------------------------------------------------------------------------------------------------------

class HighchartsVisualiser {
    constructor(element, options) {
        this.element = element;
        this.options = options;
        this.visual = undefined;
    }

    async show() {
        if (!Highcharts) await loadHighcharts();

        this.visual = Highcharts.chart(this.element, this.options, (chart) => {
            addBorderToLegendSymbols(chart);
        });

        return this;
    }

    resize(items) {
        return this;
    }
}

const addBorderToLegendSymbols = (chart) => {
    for (const series of chart.series || []) {
        const legendSymbol = series.legendSymbol;
        if (!legendSymbol) continue;
        const element = legendSymbol.element;
        if (!element) continue;
        element.setAttribute('stroke-width', '1');
        element.setAttribute('stroke', series.options.borderColor);
    }
};

// -------------------------------------------------------------------------------------------------------------------------------
// Exports
// -------------------------------------------------------------------------------------------------------------------------------

var Highcharts$1 = { HighchartsVisualiser };

// -------------------------------------------------------------------------------------------------------------------------------
// Procedures
// -------------------------------------------------------------------------------------------------------------------------------

const loadHighcharts = async () => {
    const imports = await Promise.all([import('./nectis-observable-highcharts-bb3f57fd-es.js').then(function (n) { return n.h; }), import('./nectis-observable-highcharts-more-b57e5fc4-es.js').then(function (n) { return n.h; })]);
    Highcharts = imports[0];
    const highchartsMore = imports[1].default;
    highchartsMore(Highcharts);
    Highcharts.setOptions({ lang: { thousandsSep: ',' } }); // Modify default options.
};

/**
 * @author Jonathan Terrell <jonathan.terrell@springbrook.es>
 * @copyright Copyright (c) 2019-2021 Springbrook S.L.
 * @license "Apache-2.0"
 */

class TabPanel {
    constructor(element, items) {
        this.element = element;
        this.items = items;
        // const xxxx = element.dataset.tabs;
        // console.log('xxxx', JSON.parse(xxxx));
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
            buildVisual();
        }
    } else {
        new ChartPanel$1.ChartPanelVisualiser(
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

var TabPanel$1 = { TabPanelVisualiser };

/**
 * @author Jonathan Terrell <jonathan.terrell@springbrook.es>
 * @copyright Copyright (c) 2019-2021 Springbrook S.L.
 * @license "Apache-2.0"
 */

// -------------------------------------------------------------------------------------------------------------------------------
// Declarations - Classes
// -------------------------------------------------------------------------------------------------------------------------------

class Table {
    constructor(element, options) {
        const data = options.data;
        const columns = options.columns;

        const wrapper = document.createElement('div');
        wrapper.style.cssText = 'overflow-x: scroll; padding: 10px 0 10px 10px';
        const tableWrapper = document.createElement('div');
        tableWrapper.style.cssText = 'display: flex';
        const table = document.createElement('table');
        table.style.cssText = 'flex: 1 1 auto';
        const tableRightPadding = document.createElement('div'); // Implements padding on right.
        tableRightPadding.style.cssText = 'flex: 0 0 10px';

        const header = document.createElement('tr');
        for (const column of columns) {
            const th = document.createElement('th');
            th.style.cssText = buildCellStyle(column);
            const text = document.createTextNode(column.label);
            th.append(text);
            header.appendChild(th);
        }
        table.appendChild(header);

        for (const record of data) {
            const row = document.createElement('tr');
            for (const column of columns) {
                const td = document.createElement('td');
                td.style.cssText = buildCellStyle(column);
                let text;
                if (typeof column.source === 'function') {
                    text = document.createTextNode(formatCellValue(column, column.source(record, column)));
                } else {
                    text = document.createTextNode(formatCellValue(column, record[column.source]));
                }
                td.appendChild(text);
                row.appendChild(td);
            }
            table.appendChild(row);
        }

        tableWrapper.appendChild(table);
        tableWrapper.appendChild(tableRightPadding);
        wrapper.appendChild(tableWrapper);
        element.replaceChildren(wrapper);
    }
}

class TableVisualiser {
    constructor(element, options) {
        this.element = element;
        this.options = options;
        this.visual = undefined;
    }

    show() {
        this.visual = new Table(this.element, this.options);
        return this;
    }

    resize(items) {
        return this;
    }
}

// -------------------------------------------------------------------------------------------------------------------------------
// Exports
// -------------------------------------------------------------------------------------------------------------------------------

var Table$1 = { TableVisualiser };

// -------------------------------------------------------------------------------------------------------------------------------
// Procedures
// -------------------------------------------------------------------------------------------------------------------------------

const buildCellStyle = (column) => {
    switch (column.typeId) {
        case 'decimalNumber':
        case 'wholeNumber':
            return ` text-align: ${column.align || 'right'}`;
        default:
            return ` text-align: ${column.align || 'left'}`;
    }
};

const formatCellValue = (column, value) => {
    if (!value) return '';
    switch (column.typeId) {
        case 'decimalNumber':
            return value.toLocaleString(undefined, { maximumFractionDigits: 2, minimumFractionDigits: 2 });
        default:
            return value.toLocaleString();
    }
};

/**
 * @author Jonathan Terrell <jonathan.terrell@springbrook.es>
 * @copyright Copyright (c) 2019-2021 Springbrook S.L.
 * @license "Apache-2.0"
 */

// -------------------------------------------------------------------------------------------------------------------------------
// Declarations - Classes
// -------------------------------------------------------------------------------------------------------------------------------

class TileVisualiser {
    constructor(element, options) {
        const tabs = (options || {}).tabs || [];
        new TabPanel$1.TabPanelVisualiser(
            element.querySelector('#content'),
            tabs.map((tab) => ({ label: tab.label, vendors: tab.vendors }))
        ).show();
    }
}

const define = (options) => {
    console.log('Define tile', options);
    const tileElement = document.createElement('div');
    tileElement.className = 'nectis-tile';
    tileElement.dataset.options = JSON.stringify(options);

    const styleElement = document.createElement('style');
    styleElement.appendChild(document.createTextNode(panelStyle));
    tileElement.appendChild(styleElement);

    const visualElement = document.createElement('div');
    visualElement.id = 'content';
    tileElement.appendChild(visualElement);

    return tileElement;
};

const show = (element) => {
    console.log('Show tile', JSON.parse(element.dataset.options));
    const options = JSON.parse(element.dataset.options);
    new TileVisualiser(element, options);
};

// -------------------------------------------------------------------------------------------------------------------------------
// Exports
// -------------------------------------------------------------------------------------------------------------------------------

var Tile = { TileVisualiser, define, show };

// -------------------------------------------------------------------------------------------------------------------------------
// Procedures
// -------------------------------------------------------------------------------------------------------------------------------

/**
 * @author Jonathan Terrell <jonathan.terrell@springbrook.es>
 * @copyright Copyright (c) 2019-2021 Springbrook S.L.
 * @license "Apache-2.0"
 */

// -------------------------------------------------------------------------------------------------------------------------------
// Declarations - Variables
// -------------------------------------------------------------------------------------------------------------------------------

const monthAbbreviations = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const workforceSizeByYear = [
    /* eslint-disable sort-keys */
    {
        month: 1,
        openingHeadcount: 1105,
        openingFTE: 0,
        startingHires: 0,
        startingFTE: 0,
        hires: 23,
        newHires: 22,
        rehires: 1,
        inPeriodHeadcount: 0,
        distinctPeriodHeadcount: 0,
        terminations: 18,
        averageHeadcount: 1108.1935483870966,
        fte: 1090.2701774193545,
        endingFTE: 0,
        endingTerminations: 2,
        closingFTE: 0,
        closingHeadcount: 1110
    },
    {
        month: 2,
        openingHeadcount: 1110,
        openingFTE: 0,
        startingHires: 1,
        startingFTE: 0,
        hires: 18,
        newHires: 14,
        rehires: 4,
        inPeriodHeadcount: 0,
        distinctPeriodHeadcount: 0,
        terminations: 19,
        averageHeadcount: 1113.4482758620695,
        fte: 1095.128286206897,
        endingFTE: 0,
        endingTerminations: 1,
        closingFTE: 0,
        closingHeadcount: 1109
    },
    {
        month: 3,
        openingHeadcount: 1109,
        openingFTE: 0,
        startingHires: 0,
        startingFTE: 0,
        hires: 38,
        newHires: 34,
        rehires: 4,
        inPeriodHeadcount: 0,
        distinctPeriodHeadcount: 0,
        terminations: 18,
        averageHeadcount: 1121.967741935484,
        fte: 1103.577693548387,
        endingFTE: 0,
        endingTerminations: 5,
        closingFTE: 0,
        closingHeadcount: 1129
    },
    {
        month: 4,
        openingHeadcount: 1129,
        openingFTE: 0,
        startingHires: 3,
        startingFTE: 0,
        hires: 22,
        newHires: 22,
        rehires: 0,
        inPeriodHeadcount: 0,
        distinctPeriodHeadcount: 0,
        terminations: 22,
        averageHeadcount: 1132.3999999999996,
        fte: 1114.0404999999998,
        endingFTE: 0,
        endingTerminations: 5,
        closingFTE: 0,
        closingHeadcount: 1129
    },
    {
        month: 5,
        openingHeadcount: 1129,
        openingFTE: 0,
        startingHires: 1,
        startingFTE: 0,
        hires: 26,
        newHires: 24,
        rehires: 2,
        inPeriodHeadcount: 0,
        distinctPeriodHeadcount: 0,
        terminations: 21,
        averageHeadcount: 1134.7419354838717,
        fte: 1114.941145161291,
        endingFTE: 0,
        endingTerminations: 2,
        closingFTE: 0,
        closingHeadcount: 1134
    },
    {
        month: 6,
        openingHeadcount: 1134,
        openingFTE: 0,
        startingHires: 17,
        startingFTE: 0,
        hires: 63,
        newHires: 58,
        rehires: 5,
        inPeriodHeadcount: 0,
        distinctPeriodHeadcount: 0,
        terminations: 25,
        averageHeadcount: 1160.333333333332,
        fte: 1139.8760233333317,
        endingFTE: 0,
        endingTerminations: 4,
        closingFTE: 0,
        closingHeadcount: 1172
    },
    {
        month: 7,
        openingHeadcount: 1172,
        openingFTE: 0,
        startingHires: 2,
        startingFTE: 0,
        hires: 42,
        newHires: 38,
        rehires: 4,
        inPeriodHeadcount: 0,
        distinctPeriodHeadcount: 0,
        terminations: 41,
        averageHeadcount: 1175.5483870967737,
        fte: 1155.5572387096768,
        endingFTE: 0,
        endingTerminations: 4,
        closingFTE: 0,
        closingHeadcount: 1173
    },
    {
        month: 8,
        openingHeadcount: 1173,
        openingFTE: 0,
        startingHires: 1,
        startingFTE: 0,
        hires: 37,
        newHires: 32,
        rehires: 5,
        inPeriodHeadcount: 0,
        distinctPeriodHeadcount: 0,
        terminations: 34,
        averageHeadcount: 1180.0967741935488,
        fte: 1160.2840935483875,
        endingFTE: 0,
        endingTerminations: 0,
        closingFTE: 0,
        closingHeadcount: 1176
    },
    {
        month: 9,
        openingHeadcount: 1176,
        openingFTE: 0,
        startingHires: 16,
        startingFTE: 0,
        hires: 41,
        newHires: 38,
        rehires: 3,
        inPeriodHeadcount: 0,
        distinctPeriodHeadcount: 0,
        terminations: 31,
        averageHeadcount: 1189.5999999999995,
        fte: 1170.280466666666,
        endingFTE: 0,
        endingTerminations: 6,
        closingFTE: 0,
        closingHeadcount: 1186
    },
    {
        month: 10,
        openingHeadcount: 1186,
        openingFTE: 0,
        startingHires: 4,
        startingFTE: 0,
        hires: 23,
        newHires: 21,
        rehires: 2,
        inPeriodHeadcount: 0,
        distinctPeriodHeadcount: 0,
        terminations: 20,
        averageHeadcount: 1190.0000000000002,
        fte: 1170.4818612903225,
        endingFTE: 0,
        endingTerminations: 0,
        closingFTE: 0,
        closingHeadcount: 1189
    },
    {
        month: 11,
        openingHeadcount: 1189,
        openingFTE: 0,
        startingHires: 0,
        startingFTE: 0,
        hires: 45,
        newHires: 44,
        rehires: 1,
        inPeriodHeadcount: 0,
        distinctPeriodHeadcount: 0,
        terminations: 21,
        averageHeadcount: 1199.866666666667,
        fte: 1180.5033666666668,
        endingFTE: 0,
        endingTerminations: 4,
        closingFTE: 0,
        closingHeadcount: 1213
    },
    {
        month: 12,
        openingHeadcount: 1213,
        openingFTE: 0,
        startingHires: 1,
        startingFTE: 0,
        hires: 13,
        newHires: 13,
        rehires: 0,
        inPeriodHeadcount: 0,
        distinctPeriodHeadcount: 0,
        terminations: 15,
        averageHeadcount: 1216.0645161290317,
        fte: 1196.9270225806447,
        endingFTE: 0,
        endingTerminations: 6,
        closingFTE: 0,
        closingHeadcount: 1211
    }
    /* eslint-enable sort-keys */
];

const getWorkforceSizeForYear = (year) => {
    const openingHeadcounts = [];
    const startingHires = [];
    const startingHeadcounts = [];
    const inPeriodHires = [];
    const hires = [];
    const terminations = [];
    const inPeriodTerminations = [];
    const endingHeadcounts = [];
    const averageHeadcount = [];
    const fte = [];
    const endingTerminations = [];
    const closingHeadcounts = [];

    const openingClosingHeadcounts = [];
    const startingEndingHeadcounts = [];

    for (const month of workforceSizeByYear) {
        const startingHeadcount = month.openingHeadcount + month.startingHires;
        const endingHeadcount = month.closingHeadcount + month.endingTerminations;

        openingHeadcounts.push(month.openingHeadcount);
        startingHires.push(month.startingHires);
        startingHeadcounts.push(startingHeadcount);
        inPeriodHires.push(month.hires - month.startingHires);
        hires.push(month.hires);
        terminations.push(month.terminations);
        inPeriodTerminations.push(month.terminations - month.endingTerminations);
        endingHeadcounts.push(endingHeadcount);
        averageHeadcount.push(month.averageHeadcount);
        fte.push(month.fte);
        endingTerminations.push(month.endingTerminations);
        closingHeadcounts.push(month.closingHeadcount);

        openingClosingHeadcounts.push([month.openingHeadcount, month.closingHeadcount]);
        startingEndingHeadcounts.push([startingHeadcount, endingHeadcount]);
    }

    return {
        /* eslint-disable sort-keys */
        openingHeadcounts,
        startingHires,
        startingHeadcounts,
        inPeriodHires,
        hires,
        terminations,
        inPeriodTerminations,
        averageHeadcount,
        fte,
        endingHeadcounts,
        endingTerminations,
        closingHeadcounts,
        openingClosingHeadcounts,
        startingEndingHeadcounts
        /* eslint-enable sort-keys */
    };
};

const getWorkforceSizeForYear2 = (year) => workforceSizeByYear;

const workforceSizeYear = 2020;

// -------------------------------------------------------------------------------------------------------------------------------
// Exports
// -------------------------------------------------------------------------------------------------------------------------------

var WorkforceSize = { getWorkforceSizeForYear, getWorkforceSizeForYear2, monthAbbreviations, workforceSizeYear };

export { ChartJS$1 as ChartJS, ChartPanel$1 as ChartPanel, D3XYChart as D3XYCharts, ECharts, Highcharts$1 as Highcharts, TabPanel$1 as TabPanel, Table$1 as Table, Theme, Tile, WorkforceSize };
