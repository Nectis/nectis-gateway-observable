/**
 * @author Jonathan Terrell <jonathan.terrell@springbrook.es>
 * @copyright Copyright (c) 2019-2021 Springbrook S.L.
 * @license "Apache-2.0"
 */

import Theme from './Theme';

// -------------------------------------------------------------------------------------------------------------------------------
// Declarations - Variables
// -------------------------------------------------------------------------------------------------------------------------------

let Chart;

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
        if (!Chart) Chart = await loadChartJS();
        this.visual = new Chart(chartElement, this.options);
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
// Exports
// -------------------------------------------------------------------------------------------------------------------------------

export default { ChartJSVisualiser, drawConnectionLines, getLegendSymbol };

// -------------------------------------------------------------------------------------------------------------------------------
// Procedures
// -------------------------------------------------------------------------------------------------------------------------------

const loadChartJS = async () => {
    // Import Chart.js module.
    const chartJS = await import('chart.js');
    Chart = chartJS.Chart;

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
    Chart.register(chartJS.Tooltip);

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
