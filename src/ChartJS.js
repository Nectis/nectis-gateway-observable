/**
 * @author Jonathan Terrell <jonathan.terrell@springbrook.es>
 * @copyright Copyright (c) 2019-2021 Springbrook S.L.
 * @license "Apache-2.0"
 */

import {
    BarController,
    BarElement,
    CategoryScale,
    Chart,
    Legend,
    LineController,
    LineElement,
    LinearScale,
    PointElement,
    Title,
    Tooltip
} from 'chart.js';

Chart.register(BarController);
Chart.register(BarElement);
Chart.register(CategoryScale);
Chart.register(Legend);
Chart.register(LineController);
Chart.register(LineElement);
Chart.register(LinearScale);
Chart.register(PointElement);
Chart.register(Title);
Chart.register(Tooltip);

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
// Chart.defaults.responsive = false;

// -------------------------------------------------------------------------------------------------------------------------------
// Declarations - Variables
// -------------------------------------------------------------------------------------------------------------------------------

const defaultVisualHeight = 500;

// -------------------------------------------------------------------------------------------------------------------------------
// Declarations - Classes
// -------------------------------------------------------------------------------------------------------------------------------

class Visualiser {
    constructor(container, options) {
        this.container = container;
        this.options = options;
        this.element = undefined;
        this.visual = undefined;
    }

    build() {
        this.element = document.createElement('canvas');
        if (this.container) {
            this.element.height = this.container.clientHeight || defaultVisualHeight;
        } else {
            this.container = document.createElement('div');
            this.element.height = defaultVisualHeight;
            this.container.appendChild(this.element);
        }
        this.element.style.padding = '0 16px';

        this.visual = new Chart(this.element, this.options);

        return this;
    }

    resize(items) {
        return this;
    }
}

// -------------------------------------------------------------------------------------------------------------------------------
// Exports
// -------------------------------------------------------------------------------------------------------------------------------

export default { Visualiser };
