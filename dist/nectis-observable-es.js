/**
 * @author Jonathan Terrell <jonathan.terrell@springbrook.es>
 * @copyright Copyright (c) 2019-2021 Springbrook S.L.
 * @license "Apache-2.0"
 */

// -------------------------------------------------------------------------------------------------------------------------------
// Declarations - Variables
// -------------------------------------------------------------------------------------------------------------------------------

let Chart;

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

// -------------------------------------------------------------------------------------------------------------------------------
// Declarations - Variables
// -------------------------------------------------------------------------------------------------------------------------------

const getColour = function getColour(paletteId, index) {
    return palettes[paletteId][index % palettes[paletteId].length];
};

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
        console.log('Check if chart is loaded?');
        if (!Chart) {
            Chart = await loadChartJS();
            console.log('Chart.js loaded', Chart);
        }
        this.visual = new Chart(chartElement, this.options);
        return this;
    }

    resize(items) {
        return this;
    }
}

// -------------------------------------------------------------------------------------------------------------------------------
// Exports
// -------------------------------------------------------------------------------------------------------------------------------

var ChartJS = { ChartJSVisualiser, getColour };

// -------------------------------------------------------------------------------------------------------------------------------
// Procedures
// -------------------------------------------------------------------------------------------------------------------------------

const loadChartJS = async () => {
    // Import Chart.js module.
    const chartJS = await import('./nectis-observable-chart.esm-343412f9-es.js');
    const Chart = chartJS.Chart;

    // Register controllers, elements, scales and plugins.
    Chart.register(chartJS.BarController);
    Chart.register(chartJS.BarElement);
    Chart.register(chartJS.CategoryScale);
    Chart.register(chartJS.Legend);
    Chart.register(chartJS.LineController);
    Chart.register(chartJS.LineElement);
    Chart.register(chartJS.LinearScale);
    Chart.register(chartJS.PointElement);
    Chart.register(chartJS.Title);

    // Modify default options.
    Chart.defaults.animation = false;
    Chart.defaults.font.size = 16;
    Chart.defaults.layout.padding = 2;
    Chart.defaults.plugins.legend.position = 'bottom';
    Chart.defaults.plugins.legend.labels.boxHeight = 15;
    Chart.defaults.plugins.legend.labels.boxWidth = 30;
    Chart.defaults.plugins.title.display = true;
    Chart.defaults.plugins.title.font.size = 20;
    Chart.defaults.plugins.title.font.weight = 'normal';
    Chart.defaults.maintainAspectRatio = false;

    return Chart;
};

/**
 * @author Jonathan Terrell <jonathan.terrell@springbrook.es>
 * @copyright Copyright (c) 2019-2021 Springbrook S.L.
 * @license "Apache-2.0"
 */

// -------------------------------------------------------------------------------------------------------------------------------
// Declarations - ?
// -------------------------------------------------------------------------------------------------------------------------------

class Table {
    constructor(element, options) {
        const data = options.data;
        const columns = options.columns;

        // const wrapper = html`<div style="overflow-x: scroll; padding: 10px 0 10px 10px"></div>`;
        const wrapper = document.createElement('div');
        wrapper.style.cssText = 'overflow-x: scroll; padding: 10px 0 10px 10px';
        // const tableWrapper = html`<div style="display: flex"></div>`;
        const tableWrapper = document.createElement('div');
        tableWrapper.style.cssText = 'display: flex';
        // const table = html`<table style="flex: 1 1 auto"></table>`;
        const table = document.createElement('table');
        table.style.cssText = 'flex: 1 1 auto';
        // const tableRightPadding = html`<div style="flex: 0 0 10px"></div>`; // Implements padding on right.
        const tableRightPadding = document.createElement('div'); // Implements padding on right.
        tableRightPadding.style.cssText = 'flex: 0 0 10px';

        //const header = html`<tr></tr>`;
        const header = document.createElement('tr');
        for (const column of columns) {
            // header.appendChild(html`<th${buildCellStyle(column)}>${column.label}</th>`);
            const th = document.createElement('th');
            th.style.cssText = buildCellStyle(column);
            const text = document.createTextNode(column.label);
            th.append(text);
            header.appendChild(th);
        }
        table.appendChild(header);

        for (const record of data) {
            // const row = html`<tr></tr>`;
            const row = document.createElement('tr');
            for (const column of columns) {
                const td = document.createElement('td');
                let text;
                if (typeof column.source === 'function') {
                    // row.appendChild(html`
                    //     <td${buildCellStyle(column)}>
                    //     ${formatCellValue(column, column.source(record, column))}
                    //     </td>`);
                    text = document.createTextNode(formatCellValue(column, column.source(record, column)));
                } else {
                    // row.appendChild(html`
                    //     <td${buildCellStyle(column)}>
                    //     ${formatCellValue(column, record[column.source])}
                    //     </td>`);
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
        replaceContent(element, wrapper);
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
    switch (column.type) {
        case 'decimalNumber':
        case 'wholeNumber':
            return ` text-align: ${column.align || 'right'}`;
        default:
            return ` text-align: ${column.align || 'left'}`;
    }
};

const formatCellValue = (column, value) => {
    if (!value) return '';
    switch (column.type) {
        case 'decimalNumber':
            return value.toLocaleString(undefined, { minimumFractionDigits: 2 });
        default:
            return value.toLocaleString();
    }
};

const replaceContent = (element, content) => {
    element.replaceChildren(content);
};

export { ChartJS, Table$1 as Table };
