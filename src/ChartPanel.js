/**
 * @author Jonathan Terrell <jonathan.terrell@springbrook.es>
 * @copyright Copyright (c) 2019-2021 Springbrook S.L.
 * @license "Apache-2.0"
 */

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
            this.element.innerHTML = buildTabbedTile(this, visuals);
            selectItem(this, visuals[0]);
        } else if (typeof this.items === 'object' && this.items !== null) {
            this.element.innerHTML = buildSimpleTile(this);
            showVisual(this, this.items);
        } else {
            this.element.innerHTML = buildEmptyTile(this);
            this.currentVisualiser = undefined;
        }
        return this;
    }
}

const defaultVisualHeight = 500;

const buildEmptyTile = (tile) => `<div style="height: ${defaultVisualHeight}px"></div>`;

const buildSimpleTile = (tile) => `<div id="visual" style="height: ${defaultVisualHeight}px"></div>`;

const buildTabbedTile = (tile, visuals) => {
    const wrapper = document.createElement('div');
    wrapper.style.cssText = 'display: flex; flex-direction: column';
    const visual = document.createElement('div');
    visual.style.cssText = `height: ${defaultVisualHeight}px`;
    visual.id = 'visual';
    wrapper.appendChild(visual);
    const tabs = document.createElement('div');
    tabs.style.cssText = 'border-top: 1px solid #eee; color: #777; display: flex; font-size: 14px';
    wrapper.appendChild(tabs);
    return wrapper;
};

const buildTabbedTile2 = (tile, visuals) =>
    ` <div style="display: flex; flex-direction: column">
        <div id="visual" style="height: ${defaultVisualHeight}px"></div>
        <div style="border-top: 1px solid #eee; color: #777; display: flex; font-size: 14px">
            ${visuals.map((visual) => {
                switch (visual.typeId) {
                    case 'chartJS':
                        return ` ${Object.assign(
                            `<div id="vendorButton_${visual.index}" class="vendorButton">
                                <img height="24" src="https://nectis-content.web.app/chartjs-logo.svg" />
                                <div style="padding-left: 3px">Chart.js</div>
                            </div>`,
                            {
                                onclick: (event) => {
                                    console.log(1234);
                                    selectItem(tile, visual);
                                }
                            }
                        )}`;
                    case 'eCharts':
                        return ` ${Object.assign(
                            `<div id="vendorButton_${visual.index}" class="vendorButton">
                                <img height="17" src="https://nectis-content.web.app/echarts-logo.png" />
                                <div style="padding-left: 5px">ECharts</div>
                            </div>`,
                            { onclick: (event) => selectItem(tile, visual) }
                        )}`;
                    case 'highcharts':
                        return ` ${Object.assign(
                            `<div id="vendorButton_${visual.index}" class="vendorButton">
                                <img height="18" src="https://nectis-content.web.app/highcharts-logo.png" />
                                <div style="padding-left: 5px">Highcharts</div>
                            </div>`,
                            {
                                onclick: (event) => {
                                    console.log(5678);
                                    selectItem(tile, visual);
                                }
                            }
                        )}`;
                    default:
                        return '';
                }
            })}
            <div style="margin-left: auto">Options</div>
        </div>
    </div>`;

const selectItem = (tile, visual) => {
    // Clear vendor button selection.
    const vendorButtons = tile.element.getElementsByClassName('vendorButton');
    for (let i1 = 0; i1 < vendorButtons.length; i1++) {
        vendorButtons[i1].className = 'vendorButton';
    }

    tile.element.querySelector(`#vendorButton_${visual.index}`).className = 'vendorButton selected';

    showVisual(tile, visual);
};

const showVisual = (tile, visual) => {
    const panelElement = tile.element.querySelector('#visual');
    removeContent(panelElement);
    if (visual.visualise) {
        tile.currentVisualiser = visual.visualise(panelElement);
    } else {
        tile.currentVisualiser = undefined;
    }
};

const removeContent = (element) => {
    while (element.firstChild) element.firstChild.remove();
};

const replaceContent = (element, content) => {
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

export default { ChartPanelVisualiser };
