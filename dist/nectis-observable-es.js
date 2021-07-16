/**
 * @author Jonathan Terrell <jonathan.terrell@springbrook.es>
 * @copyright Copyright (c) 2019-2021 Springbrook S.L.
 * @license "Apache-2.0"
 */

// // const ChartJS = await require(`chart.js@${version}`);
// import { Chart, CategoryScale, Legend, LineController, LineElement, LinearScale, PointElement, Title } from 'chart.js';
// Chart.register(CategoryScale);
// Chart.register(Legend);
// Chart.register(LineController);
// Chart.register(LineElement);
// Chart.register(LinearScale);
// Chart.register(PointElement);
// Chart.register(Title);
// // import Chart from 'chart.js/auto'

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

// Default Options - animation.
Chart.defaults.animation = false;

// Default Options - font.
Chart.defaults.font.size = 16;

// Default Options - layout.
Chart.defaults.layout.padding = 2;

// Default Options - plugin - legend.
Chart.defaults.plugins.legend.position = 'bottom';
Chart.defaults.plugins.legend.labels.boxHeight = 15;
Chart.defaults.plugins.legend.labels.boxWidth = 30;

// Default Options - plugin - title.
Chart.defaults.plugins.title.display = true;
Chart.defaults.plugins.title.font.size = 20;
Chart.defaults.plugins.title.font.weight = 'normal';

// // Default Options - responsiveness.
Chart.defaults.maintainAspectRatio = false;

class ChartJSVisualiser {
    constructor(element, options) {
        this.element = element;
        this.options = options;
        this.visual = undefined;
    }

    async show() {
        const chartJS = await import('./nectis-engine-chart.esm-51704fa0-es.js');
        console.log(1111, chartJS);
        const Chart = chartJS.Chart;
        console.log(2222, Chart);
        Chart.register(chartJS.CategoryScale);
        Chart.register(chartJS.Legend);
        Chart.register(chartJS.LineController);
        Chart.register(chartJS.LineElement);
        Chart.register(chartJS.LinearScale);
        Chart.register(chartJS.PointElement);
        Chart.register(chartJS.Title);
        console.log(3333);

        let chartElement = this.element.querySelector('#chart');
        if (chartElement) chartElement.remove();
        const canvas = document.createElement('canvas');
        canvas.setAttribute('id', 'chart');
        chartElement = this.element.appendChild(canvas);
        this.visual = new Chart(chartElement, this.options);
        return this;
    }

    resize(items) {
        return this;
    }
}

/**
 * @author Jonathan Terrell <jonathan.terrell@springbrook.es>
 * @copyright Copyright (c) 2019-2021 Springbrook S.L.
 * @license "Apache-2.0"
 */

const ChartJS = { ChartJSVisualiser, getColour };

export { ChartJS };
