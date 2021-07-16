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
// Declarations - Variables
// -------------------------------------------------------------------------------------------------------------------------------

const workforceSizeByYear = [
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
        endingTerminations.push(month.endingTerminations);
        closingHeadcounts.push(month.closingHeadcount);

        openingClosingHeadcounts.push([month.openingHeadcount, month.closingHeadcount]);
        startingEndingHeadcounts.push([startingHeadcount, endingHeadcount]);
    }

    return {
        openingHeadcounts,
        startingHires,
        startingHeadcounts,
        inPeriodHires,
        hires,
        terminations,
        inPeriodTerminations,
        endingHeadcounts,
        endingTerminations,
        closingHeadcounts,
        openingClosingHeadcounts,
        startingEndingHeadcounts
    };
};

const getWorkforceSizeForYear2 = (year) => {
    return workforceSizeByYear;
};

// -------------------------------------------------------------------------------------------------------------------------------
// Exports
// -------------------------------------------------------------------------------------------------------------------------------

var Data = { getWorkforceSizeForYear, getWorkforceSizeForYear2 };

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

var themeStyle = "h1 {\n    color: orange;\n}\n";

/**
 * @author Jonathan Terrell <jonathan.terrell@springbrook.es>
 * @copyright Copyright (c) 2019-2021 Springbrook S.L.
 * @license "Apache-2.0"
 */

// -------------------------------------------------------------------------------------------------------------------------------
// Declarations - ?
// -------------------------------------------------------------------------------------------------------------------------------

const getStyle = () => {
    return `<style>${themeStyle}</style>`;
};

// -------------------------------------------------------------------------------------------------------------------------------
// Exports
// -------------------------------------------------------------------------------------------------------------------------------

var Theme = { getStyle };

// -------------------------------------------------------------------------------------------------------------------------------
// Procedures
// -------------------------------------------------------------------------------------------------------------------------------

export { ChartJS, Data, Table$1 as Table, Theme };
