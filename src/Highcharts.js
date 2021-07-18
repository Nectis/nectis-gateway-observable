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
        // let chartElement = this.element.querySelector('#chart');
        // if (chartElement) chartElement.remove();
        // const canvas = document.createElement('canvas');
        // canvas.setAttribute('id', 'chart');
        // chartElement = this.element.appendChild(canvas);
        // eslint-disable-next-line require-atomic-updates
        if (!Highcharts) await loadHighcharts();
        // this.visual = new ChartJS(chartElement, this.options);
        console.log(2222, Highcharts);
        return this;
    }

    resize(items) {
        return this;
    }
}

// -------------------------------------------------------------------------------------------------------------------------------
// Exports
// -------------------------------------------------------------------------------------------------------------------------------

export default { HighchartsVisualiser };

// -------------------------------------------------------------------------------------------------------------------------------
// Procedures
// -------------------------------------------------------------------------------------------------------------------------------

const loadHighcharts = async () => {
    // Import Chart.js module.
    Highcharts = await import('highcharts');
    console.log(1111, Highcharts);
    const more = await import('highcharts/highcharts-more');
    console.log(2222, more);
    // Highcharts = chartJS.Chart;

    // const Highcharts = await require(`highcharts@${version}`);
    // // TODO: Use promiseAll to import more the one additional module.
    // await require(`highcharts@${version}/highcharts-more.js`);
    // Highcharts.setOptions({ lang: { thousandsSep: ',' } });
    // return Highcharts;
};
