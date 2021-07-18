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
            // addBorderToLegendSymbols(chart);
        });

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
    // Import Highcharts modules.
    Highcharts = await import('highcharts');
    await import('highcharts/highcharts-more'); // TODO: Use promiseAll to import more the one additional module.

    // Modify default options.
    Highcharts.setOptions({ lang: { thousandsSep: ',' } });
};
