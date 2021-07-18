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
        if (!Highcharts) await loadHighcharts2();

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

export default { HighchartsVisualiser };

// -------------------------------------------------------------------------------------------------------------------------------
// Procedures
// -------------------------------------------------------------------------------------------------------------------------------

const loadHighcharts = async () => {
    // Import Highcharts modules.
    Highcharts = await import('highcharts');
    const highchartsMore = await import('highcharts/highcharts-more'); // TODO: Use promiseAll if import additional modules.
    highchartsMore.default(Highcharts);

    // Modify default options.
    Highcharts.setOptions({ lang: { thousandsSep: ',' } });
};

const loadHighcharts2 = async () => {
    const imports = await Promise.all([import('highcharts'), import('highcharts/highcharts-more')]);
    Highcharts = imports[0];
    const highchartsMore = imports[1].default;
    highchartsMore(Highcharts);
    Highcharts.setOptions({ lang: { thousandsSep: ',' } }); // Modify default options.
};
