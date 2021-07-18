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

export default { ChartJSVisualiser, drawConnectionLines, getLegendSymbol, headcountTooltipHandler };

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
