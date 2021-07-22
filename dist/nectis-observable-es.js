var chartJSStyle = ".nectis .caret {\n    background: transparent;\n    border: 6px solid transparent;\n    display: inline-block;\n    height: 0;\n    pointer-events: none;\n    position: absolute;\n    width: 0;\n}\n.nectis .caret.right {\n    border-left-color: rgba(0, 0, 0, 0.75);\n}\n.nectis .caret.left {\n    border-right-color: rgba(0, 0, 0, 0.75);\n}\n\n.nectis .tooltip {\n    font-size: 14px;\n}\n.nectis .tooltip tr {\n    border: none;\n}\n.nectis .tooltip td {\n    border: none !important;\n    font-size: 14px;\n    padding: 0;\n}\n.nectis .tooltip td:last-child {\n    text-align: right;\n}\n";

var narrativeStyle = ".nectis * {\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans',\n        'Helvetica Neue', sans-serif;\n}\n\n.nectis h1 {\n    font-weight: 400;\n    font-size: 26px;\n    margin-left: auto;\n    margin-right: auto;\n    max-width: 640px;\n}\n\n.nectis h2 {\n    border-bottom: 1px solid #eee;\n    font-weight: 400;\n    font-size: 22px;\n    margin-left: auto;\n    margin-right: auto;\n    max-width: 640px;\n    padding-bottom: 5px;\n}\n.nectis h2::before {\n    background-image: url('https://nectis-content.web.app/analytics-light.svg');\n    background-size: 27px 24px;\n    content: '';\n    display: inline-block;\n    height: 24px;\n    margin-right: 10px;\n    width: 27px;\n}\n\n.nectis p {\n    font-size: 16px;\n    margin-left: auto;\n    margin-right: auto;\n    max-width: 640px;\n}\n\n.nectis ul {\n    font-size: 16px;\n    margin-left: auto;\n    margin-right: auto;\n    max-width: 640px;\n}\n\n.nectis div.warning {\n    background-color: rgba(255, 229, 100, 0.3);\n    border-left: 0.5rem #e7c000 solid;\n    color: #6b5900;\n    font-size: 16px;\n    margin: 16px auto;\n    max-width: 640px;\n}\n.nectis div.warning > div {\n    font-weight: 600;\n    padding: 8px 24px;\n}\n.nectis div.warning > div > div {\n    font-weight: 400;\n}\n";

var panelStyle = ".nectis .tabBar {\n    border-bottom: 1px solid #eee;\n    height: 48px;\n}\n\n.nectis .tabButton {\n    border-bottom: 2px solid transparent;\n    cursor: pointer;\n    display: flex;\n    font-size: 16px;\n    flex-direction: column;\n    justify-content: center;\n    padding-left: 15px;\n    padding-right: 15px;\n}\n.nectis .tabButton:hover {\n    background: #f7f7f7;\n}\n.nectis .tabButton.selected {\n    border-bottom-color: #388e3c;\n}\n.nectis .tabButton.selected:hover {\n    background: #eef5ef;\n}\n\n.nectis .optionsButton {\n    border-top: 2px solid transparent;\n    cursor: pointer;\n    font-size: 16px;\n    padding: 5px 10px 7px 10px;\n}\n.nectis .optionsButton:hover {\n    background: #f7f7f7;\n}\n\n.nectis .vendorButton {\n    border-top: 2px solid transparent;\n    align-items: center;\n    cursor: pointer;\n    display: flex;\n    font-size: 16px;\n    flex-direction: row;\n    padding: 5px 10px 7px 10px;\n}\n.nectis .vendorButton:hover {\n    background: #f7f7f7;\n}\n.nectis .vendorButton.selected {\n    border-top-color: #388e3c;\n}\n.nectis .vendorButton.selected:hover {\n    background: #eef5ef;\n}\n";

var tableStyle = ".nectis table {\n    border-collapse: collapse;\n    margin: 0;\n    max-width: none;\n}\n.nectis tr:not(:last-child) {\n    border-bottom: solid 1px #eee;\n    line-height: normal;\n}\n.nectis th {\n    font-size: 16px;\n    font-weight: 400;\n    padding: 5px 16px;\n    vertical-align: bottom;\n}\n.nectis td {\n    font-size: 16px;\n    padding: 5px 16px;\n}\n";

var themeStyle = "/**** Fonts */\n/* .nectis * { font-family: Arial, Helvetica, sans-serif; } */\n.nectis * {\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans',\n        'Helvetica Neue', sans-serif;\n}\n\n/**** Chart Container */\n.nectis .chartContainer {\n    background: #fefefe;\n    border: 1px solid #f7f7f7;\n    height: 500px;\n    margin: 32px 0;\n    padding: 10px;\n}\n\n/**** Collection Reference */\n/* .nectis .collection {\n    color: #888;\n    font-size: 14px;\n    font-style: italic;\n    margin: auto;\n    margin-top: -3px;\n    max-width: 640px;\n} */\n\n/**** Table Container */\n.nectis .tableContainer {\n    background: #fefefe;\n    border: 1px solid #f7f7f7;\n    margin: 32px 0;\n}\n";

/**
 * @author Jonathan Terrell <jonathan.terrell@springbrook.es>
 * @copyright Copyright (c) 2019-2021 Springbrook S.L.
 * @license "Apache-2.0"
 */

// -------------------------------------------------------------------------------------------------------------------------------
// Declarations - ?
// -------------------------------------------------------------------------------------------------------------------------------

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

const colours = {
    /* eslint-disable sort-keys */
    opening: getColour('tableau10', 5),
    starting: getColour('tableau10', 3),
    hires: getColour('paired', 2),
    terminations: getColour('paired', 6),
    ending: getColour('tableau10', 0),
    closing: getColour('tableau10', 2),
    openCloseDecrease: getColour('paired', 6),
    openCloseIncrease: getColour('paired', 2),
    startStopDecrease: getColour('paired', 7),
    startStopIncrease: getColour('paired', 3)
    /* eslint-enable sort-keys */
};

const getChartJSStyle = () => chartJSStyle;
const getNarrativeStyle = () => narrativeStyle;
const getPanelStyle = () => panelStyle;
const getStyle = () => themeStyle;
const getTableStyle = () => tableStyle;

// -------------------------------------------------------------------------------------------------------------------------------
// Exports
// -------------------------------------------------------------------------------------------------------------------------------

var Theme = { colours, getChartJSStyle, getColour, getNarrativeStyle, getPanelStyle, getStyle, getTableStyle };

/**
 * @author Jonathan Terrell <jonathan.terrell@springbrook.es>
 * @copyright Copyright (c) 2019-2021 Springbrook S.L.
 * @license "Apache-2.0"
 */

// -------------------------------------------------------------------------------------------------------------------------------
// Declarations - Variables
// -------------------------------------------------------------------------------------------------------------------------------

let ChartJS;

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
        if (!ChartJS) await loadChartJS();
        this.visual = new ChartJS(chartElement, this.options);
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

var ChartJS$1 = { ChartJSVisualiser, drawConnectionLines, getLegendSymbol, headcountTooltipHandler };

// -------------------------------------------------------------------------------------------------------------------------------
// Procedures
// -------------------------------------------------------------------------------------------------------------------------------

const loadChartJS = async () => {
    // Import Chart.js module.
    const chartJS = await import('./nectis-observable-chart.esm-343412f9-es.js');
    ChartJS = chartJS.Chart;

    // Register controllers, elements, scales and plugins.
    ChartJS.register(chartJS.BarController);
    ChartJS.register(chartJS.BarElement);
    ChartJS.register(chartJS.CategoryScale);
    ChartJS.register(chartJS.Legend);
    ChartJS.register(chartJS.LineController);
    ChartJS.register(chartJS.LineElement);
    ChartJS.register(chartJS.LinearScale);
    ChartJS.register(chartJS.PointElement);
    ChartJS.register(chartJS.Title);
    ChartJS.register(chartJS.Tooltip);

    // Modify default options.
    ChartJS.defaults.animation = false;
    ChartJS.defaults.font.size = 16;
    ChartJS.defaults.layout.padding = 2;
    ChartJS.defaults.plugins.legend.position = 'bottom';
    ChartJS.defaults.plugins.legend.labels.boxHeight = 15;
    ChartJS.defaults.plugins.legend.labels.boxWidth = 30;
    ChartJS.defaults.plugins.title.display = true;
    ChartJS.defaults.plugins.title.font.size = 20;
    ChartJS.defaults.plugins.title.font.weight = 'normal';
    ChartJS.defaults.maintainAspectRatio = false;
};

const {getPrototypeOf, getOwnPropertyDescriptors} = Object;
getPrototypeOf({});

const metas = new Map;
const queue$1 = [];
const map$2 = queue$1.map;
const some = queue$1.some;
const hasOwnProperty = queue$1.hasOwnProperty;
const origin = "https://cdn.jsdelivr.net/npm/";
const identifierRe = /^((?:@[^/@]+\/)?[^/@]+)(?:@([^/]+))?(?:\/(.*))?$/;
const versionRe = /^\d+\.\d+\.\d+(-[\w-.+]+)?$/;
const extensionRe = /\.[^/]*$/;
const mains = ["unpkg", "jsdelivr", "browser", "main"];

class RequireError extends Error {
  constructor(message) {
    super(message);
  }
}

RequireError.prototype.name = RequireError.name;

function main(meta) {
  for (const key of mains) {
    const value = meta[key];
    if (typeof value === "string") {
      return extensionRe.test(value) ? value : `${value}.js`;
    }
  }
}

function parseIdentifier(identifier) {
  const match = identifierRe.exec(identifier);
  return match && {
    name: match[1],
    version: match[2],
    path: match[3]
  };
}

function resolveMeta(target) {
  const url = `${origin}${target.name}${target.version ? `@${target.version}` : ""}/package.json`;
  let meta = metas.get(url);
  if (!meta) metas.set(url, meta = fetch(url).then(response => {
    if (!response.ok) throw new RequireError("unable to load package.json");
    if (response.redirected && !metas.has(response.url)) metas.set(response.url, meta);
    return response.json();
  }));
  return meta;
}

async function resolve$1(name, base) {
  if (name.startsWith(origin)) name = name.substring(origin.length);
  if (/^(\w+:)|\/\//i.test(name)) return name;
  if (/^[.]{0,2}\//i.test(name)) return new URL(name, base == null ? location : base).href;
  if (!name.length || /^[\s._]/.test(name) || /\s$/.test(name)) throw new RequireError("illegal name");
  const target = parseIdentifier(name);
  if (!target) return `${origin}${name}`;
  if (!target.version && base != null && base.startsWith(origin)) {
    const meta = await resolveMeta(parseIdentifier(base.substring(origin.length)));
    target.version = meta.dependencies && meta.dependencies[target.name] || meta.peerDependencies && meta.peerDependencies[target.name];
  }
  if (target.path && !extensionRe.test(target.path)) target.path += ".js";
  if (target.path && target.version && versionRe.test(target.version)) return `${origin}${target.name}@${target.version}/${target.path}`;
  const meta = await resolveMeta(target);
  return `${origin}${meta.name}@${meta.version}/${target.path || main(meta) || "index.js"}`;
}

var require = requireFrom(resolve$1);

function requireFrom(resolver) {
  const cache = new Map;
  const requireBase = requireRelative(null);

  function requireAbsolute(url) {
    if (typeof url !== "string") return url;
    let module = cache.get(url);
    if (!module) cache.set(url, module = new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.onload = () => {
        try { resolve(queue$1.pop()(requireRelative(url))); }
        catch (error) { reject(new RequireError("invalid module")); }
        script.remove();
      };
      script.onerror = () => {
        reject(new RequireError("unable to load module"));
        script.remove();
      };
      script.async = true;
      script.src = url;
      window.define = define$1;
      document.head.appendChild(script);
    }));
    return module;
  }

  function requireRelative(base) {
    return name => Promise.resolve(resolver(name, base)).then(requireAbsolute);
  }

  function requireAlias(aliases) {
    return requireFrom((name, base) => {
      if (name in aliases) {
        name = aliases[name], base = null;
        if (typeof name !== "string") return name;
      }
      return resolver(name, base);
    });
  }

  function require(name) {
    return arguments.length > 1
        ? Promise.all(map$2.call(arguments, requireBase)).then(merge)
        : requireBase(name);
  }

  require.alias = requireAlias;
  require.resolve = resolver;

  return require;
}

function merge(modules) {
  const o = {};
  for (const m of modules) {
    for (const k in m) {
      if (hasOwnProperty.call(m, k)) {
        if (m[k] == null) Object.defineProperty(o, k, {get: getter(m, k)});
        else o[k] = m[k];
      }
    }
  }
  return o;
}

function getter(object, name) {
  return () => object[name];
}

function isbuiltin(name) {
  name = name + "";
  return name === "exports" || name === "module";
}

function define$1(name, dependencies, factory) {
  const n = arguments.length;
  if (n < 2) factory = name, dependencies = [];
  else if (n < 3) factory = dependencies, dependencies = typeof name === "string" ? [] : name;
  queue$1.push(some.call(dependencies, isbuiltin) ? require => {
    const exports = {};
    const module = {exports};
    return Promise.all(map$2.call(dependencies, name => {
      name = name + "";
      return name === "exports" ? exports : name === "module" ? module : require(name);
    })).then(dependencies => {
      factory.apply(null, dependencies);
      return module.exports;
    });
  } : require => {
    return Promise.all(map$2.call(dependencies, require)).then(dependencies => {
      return typeof factory === "function" ? factory.apply(null, dependencies) : factory;
    });
  });
}

define$1.amd = {};

async function sqlite(require) {
  const sql = await require("sql.js@1.5.0/dist/sql-wasm.js");
  return sql({locateFile: file => `https://cdn.jsdelivr.net/npm/sql.js@1.5.0/dist/${file}`});
}

class SQLiteDatabaseClient {
  constructor(db) {
    Object.defineProperties(this, {
      _db: {value: db}
    });
  }
  async query(query, params) {
    return await exec(this._db, query, params);
  }
  async queryRow(query, params) {
    return (await this.query(query, params))[0] || null;
  }
  async explain(query, params) {
    const rows = await this.query(`EXPLAIN QUERY PLAN ${query}`, params);
    return element$1("pre", {className: "observablehq--inspect"}, [
      text$2(rows.map(row => row.detail).join("\n"))
    ]);
  }
  async describe(object) {
    const rows = await (object === undefined
      ? this.query(`SELECT name FROM sqlite_master WHERE type = 'table'`)
      : this.query(`SELECT * FROM pragma_table_info(?)`, [object]));
    if (!rows.length) throw new Error("Not found");
    const {columns} = rows;
    return element$1("table", {value: rows}, [
      element$1("thead", [element$1("tr", columns.map(c => element$1("th", [text$2(c)])))]),
      element$1("tbody", rows.map(r => element$1("tr", columns.map(c => element$1("td", [text$2(r[c])])))))
    ]);
  }
}

async function exec(db, query, params) {
  const [result] = await db.exec(query, params);
  if (!result) return [];
  const {columns, values} = result;
  const rows = values.map(row => Object.fromEntries(row.map((value, i) => [columns[i], value])));
  rows.columns = columns;
  return rows;
}

function element$1(name, props, children) {
  if (arguments.length === 2) children = props, props = undefined;
  const element = document.createElement(name);
  if (props !== undefined) for (const p in props) element[p] = props[p];
  if (children !== undefined) for (const c of children) element.appendChild(c);
  return element;
}

function text$2(value) {
  return document.createTextNode(value);
}

async function jszip(require) {
  return await require("jszip@3.6.0/dist/jszip.min.js");
}

async function remote_fetch(file) {
  const response = await fetch(await file.url());
  if (!response.ok) throw new Error(`Unable to load file: ${file.name}`);
  return response;
}

async function dsv(file, delimiter, {array = false, typed = false} = {}) {
  const [text, d3] = await Promise.all([file.text(), require("d3-dsv@2.0.0/dist/d3-dsv.min.js")]);
  return (delimiter === "\t"
      ? (array ? d3.tsvParseRows : d3.tsvParse)
      : (array ? d3.csvParseRows : d3.csvParse))(text, typed && d3.autoType);
}

class AbstractFile {
  constructor(name) {
    Object.defineProperty(this, "name", {value: name, enumerable: true});
  }
  async blob() {
    return (await remote_fetch(this)).blob();
  }
  async arrayBuffer() {
    return (await remote_fetch(this)).arrayBuffer();
  }
  async text() {
    return (await remote_fetch(this)).text();
  }
  async json() {
    return (await remote_fetch(this)).json();
  }
  async stream() {
    return (await remote_fetch(this)).body;
  }
  async csv(options) {
    return dsv(this, ",", options);
  }
  async tsv(options) {
    return dsv(this, "\t", options);
  }
  async image() {
    const url = await this.url();
    return new Promise((resolve, reject) => {
      const i = new Image;
      if (new URL(url, document.baseURI).origin !== new URL(location).origin) {
        i.crossOrigin = "anonymous";
      }
      i.onload = () => resolve(i);
      i.onerror = () => reject(new Error(`Unable to load file: ${this.name}`));
      i.src = url;
    });
  }
  async sqlite() {
    const [SQL, buffer] = await Promise.all([sqlite(require), this.arrayBuffer()]);
    const db = new SQL.Database(new Uint8Array(buffer));
    return new SQLiteDatabaseClient(db);
  }
  async zip() {
    const [JSZip, buffer] = await Promise.all([jszip(require), this.arrayBuffer()]);
    return new ZipArchive(await JSZip.loadAsync(buffer));
  }
}

class FileAttachment extends AbstractFile {
  constructor(url, name) {
    super(name);
    Object.defineProperty(this, "_url", {value: url});
  }
  async url() {
    return (await this._url) + "";
  }
}

function NoFileAttachments(name) {
  throw new Error(`File not found: ${name}`);
}

function FileAttachments(resolve) {
  return Object.assign(
    name => {
      const url = resolve(name += ""); // Returns a Promise, string, or null.
      if (url == null) throw new Error(`File not found: ${name}`);
      return new FileAttachment(url, name);
    },
    {prototype: FileAttachment.prototype} // instanceof
  );
}

class ZipArchive {
  constructor(archive) {
    Object.defineProperty(this, "_", {value: archive});
    this.filenames = Object.keys(archive.files).filter(name => !archive.files[name].dir);
  }
  file(path) {
    const object = this._.file(path += "");
    if (!object || object.dir) throw new Error(`file not found: ${path}`);
    return new ZipArchiveEntry(object);
  }
}

class ZipArchiveEntry extends AbstractFile {
  constructor(object) {
    super(object.name);
    Object.defineProperty(this, "_", {value: object});
    Object.defineProperty(this, "_url", {writable: true});
  }
  async url() {
    return this._url || (this._url = this.blob().then(URL.createObjectURL));
  }
  async blob() {
    return this._.async("blob");
  }
  async arrayBuffer() {
    return this._.async("arraybuffer");
  }
  async text() {
    return this._.async("text");
  }
  async json() {
    return JSON.parse(await this.text());
  }
}

function canvas(width, height) {
  var canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  return canvas;
}

function context2d(width, height, dpi) {
  if (dpi == null) dpi = devicePixelRatio;
  var canvas = document.createElement("canvas");
  canvas.width = width * dpi;
  canvas.height = height * dpi;
  canvas.style.width = width + "px";
  var context = canvas.getContext("2d");
  context.scale(dpi, dpi);
  return context;
}

function download(value, name = "untitled", label = "Save") {
  const a = document.createElement("a");
  const b = a.appendChild(document.createElement("button"));
  b.textContent = label;
  a.download = name;

  async function reset() {
    await new Promise(requestAnimationFrame);
    URL.revokeObjectURL(a.href);
    a.removeAttribute("href");
    b.textContent = label;
    b.disabled = false;
  }

  a.onclick = async event => {
    b.disabled = true;
    if (a.href) return reset(); // Already saved.
    b.textContent = "Saving…";
    try {
      const object = await (typeof value === "function" ? value() : value);
      b.textContent = "Download";
      a.href = URL.createObjectURL(object); // eslint-disable-line require-atomic-updates
    } catch (ignore) {
      b.textContent = label;
    }
    if (event.eventPhase) return reset(); // Already downloaded.
    b.disabled = false;
  };

  return a;
}

var namespaces = {
  math: "http://www.w3.org/1998/Math/MathML",
  svg: "http://www.w3.org/2000/svg",
  xhtml: "http://www.w3.org/1999/xhtml",
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};

function element(name, attributes) {
  var prefix = name += "", i = prefix.indexOf(":"), value;
  if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
  var element = namespaces.hasOwnProperty(prefix) // eslint-disable-line no-prototype-builtins
      ? document.createElementNS(namespaces[prefix], name)
      : document.createElement(name);
  if (attributes) for (var key in attributes) {
    prefix = key, i = prefix.indexOf(":"), value = attributes[key];
    if (i >= 0 && (prefix = key.slice(0, i)) !== "xmlns") key = key.slice(i + 1);
    if (namespaces.hasOwnProperty(prefix)) element.setAttributeNS(namespaces[prefix], key, value); // eslint-disable-line no-prototype-builtins
    else element.setAttribute(key, value);
  }
  return element;
}

function input$1(type) {
  var input = document.createElement("input");
  if (type != null) input.type = type;
  return input;
}

function range$1(min, max, step) {
  if (arguments.length === 1) max = min, min = null;
  var input = document.createElement("input");
  input.min = min = min == null ? 0 : +min;
  input.max = max = max == null ? 1 : +max;
  input.step = step == null ? "any" : step = +step;
  input.type = "range";
  return input;
}

function select(values) {
  var select = document.createElement("select");
  Array.prototype.forEach.call(values, function(value) {
    var option = document.createElement("option");
    option.value = option.textContent = value;
    select.appendChild(option);
  });
  return select;
}

function svg$1(width, height) {
  var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", [0, 0, width, height]);
  svg.setAttribute("width", width);
  svg.setAttribute("height", height);
  return svg;
}

function text$1(value) {
  return document.createTextNode(value);
}

var count = 0;

function uid(name) {
  return new Id("O-" + (name == null ? "" : name + "-") + ++count);
}

function Id(id) {
  this.id = id;
  this.href = new URL(`#${id}`, location) + "";
}

Id.prototype.toString = function() {
  return "url(" + this.href + ")";
};

var DOM = {
  canvas: canvas,
  context2d: context2d,
  download: download,
  element: element,
  input: input$1,
  range: range$1,
  select: select,
  svg: svg$1,
  text: text$1,
  uid: uid
};

function buffer(file) {
  return new Promise(function(resolve, reject) {
    var reader = new FileReader;
    reader.onload = function() { resolve(reader.result); };
    reader.onerror = reject;
    reader.readAsArrayBuffer(file);
  });
}

function text(file) {
  return new Promise(function(resolve, reject) {
    var reader = new FileReader;
    reader.onload = function() { resolve(reader.result); };
    reader.onerror = reject;
    reader.readAsText(file);
  });
}

function url(file) {
  return new Promise(function(resolve, reject) {
    var reader = new FileReader;
    reader.onload = function() { resolve(reader.result); };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

var Files = {
  buffer: buffer,
  text: text,
  url: url
};

function that() {
  return this;
}

function disposable(value, dispose) {
  let done = false;
  if (typeof dispose !== "function") {
    throw new Error("dispose is not a function");
  }
  return {
    [Symbol.iterator]: that,
    next: () => done ? {done: true} : (done = true, {done: false, value}),
    return: () => (done = true, dispose(value), {done: true}),
    throw: () => ({done: done = true})
  };
}

function* filter(iterator, test) {
  var result, index = -1;
  while (!(result = iterator.next()).done) {
    if (test(result.value, ++index)) {
      yield result.value;
    }
  }
}

function observe(initialize) {
  let stale = false;
  let value;
  let resolve;
  const dispose = initialize(change);

  if (dispose != null && typeof dispose !== "function") {
    throw new Error(typeof dispose.then === "function"
        ? "async initializers are not supported"
        : "initializer returned something, but not a dispose function");
  }

  function change(x) {
    if (resolve) resolve(x), resolve = null;
    else stale = true;
    return value = x;
  }

  function next() {
    return {done: false, value: stale
        ? (stale = false, Promise.resolve(value))
        : new Promise(_ => (resolve = _))};
  }

  return {
    [Symbol.iterator]: that,
    throw: () => ({done: true}),
    return: () => (dispose != null && dispose(), {done: true}),
    next
  };
}

function input(input) {
  return observe(function(change) {
    var event = eventof(input), value = valueof(input);
    function inputted() { change(valueof(input)); }
    input.addEventListener(event, inputted);
    if (value !== undefined) change(value);
    return function() { input.removeEventListener(event, inputted); };
  });
}

function valueof(input) {
  switch (input.type) {
    case "range":
    case "number": return input.valueAsNumber;
    case "date": return input.valueAsDate;
    case "checkbox": return input.checked;
    case "file": return input.multiple ? input.files : input.files[0];
    case "select-multiple": return Array.from(input.selectedOptions, o => o.value);
    default: return input.value;
  }
}

function eventof(input) {
  switch (input.type) {
    case "button":
    case "submit":
    case "checkbox": return "click";
    case "file": return "change";
    default: return "input";
  }
}

function* map$1(iterator, transform) {
  var result, index = -1;
  while (!(result = iterator.next()).done) {
    yield transform(result.value, ++index);
  }
}

function queue(initialize) {
  let resolve;
  const queue = [];
  const dispose = initialize(push);

  if (dispose != null && typeof dispose !== "function") {
    throw new Error(typeof dispose.then === "function"
        ? "async initializers are not supported"
        : "initializer returned something, but not a dispose function");
  }

  function push(x) {
    queue.push(x);
    if (resolve) resolve(queue.shift()), resolve = null;
    return x;
  }

  function next() {
    return {done: false, value: queue.length
        ? Promise.resolve(queue.shift())
        : new Promise(_ => (resolve = _))};
  }

  return {
    [Symbol.iterator]: that,
    throw: () => ({done: true}),
    return: () => (dispose != null && dispose(), {done: true}),
    next
  };
}

function* range(start, stop, step) {
  start = +start;
  stop = +stop;
  step = (n = arguments.length) < 2 ? (stop = start, start = 0, 1) : n < 3 ? 1 : +step;
  var i = -1, n = Math.max(0, Math.ceil((stop - start) / step)) | 0;
  while (++i < n) {
    yield start + i * step;
  }
}

function valueAt(iterator, i) {
  if (!isFinite(i = +i) || i < 0 || i !== i | 0) return;
  var result, index = -1;
  while (!(result = iterator.next()).done) {
    if (++index === i) {
      return result.value;
    }
  }
}

function worker(source) {
  const url = URL.createObjectURL(new Blob([source], {type: "text/javascript"}));
  const worker = new Worker(url);
  return disposable(worker, () => {
    worker.terminate();
    URL.revokeObjectURL(url);
  });
}

var Generators = {
  disposable: disposable,
  filter: filter,
  input: input,
  map: map$1,
  observe: observe,
  queue: queue,
  range: range,
  valueAt: valueAt,
  worker: worker
};

function template(render, wrapper) {
  return function(strings) {
    var string = strings[0],
        parts = [], part,
        root = null,
        node, nodes,
        walker,
        i, n, j, m, k = -1;

    // Concatenate the text using comments as placeholders.
    for (i = 1, n = arguments.length; i < n; ++i) {
      part = arguments[i];
      if (part instanceof Node) {
        parts[++k] = part;
        string += "<!--o:" + k + "-->";
      } else if (Array.isArray(part)) {
        for (j = 0, m = part.length; j < m; ++j) {
          node = part[j];
          if (node instanceof Node) {
            if (root === null) {
              parts[++k] = root = document.createDocumentFragment();
              string += "<!--o:" + k + "-->";
            }
            root.appendChild(node);
          } else {
            root = null;
            string += node;
          }
        }
        root = null;
      } else {
        string += part;
      }
      string += strings[i];
    }

    // Render the text.
    root = render(string);

    // Walk the rendered content to replace comment placeholders.
    if (++k > 0) {
      nodes = new Array(k);
      walker = document.createTreeWalker(root, NodeFilter.SHOW_COMMENT, null, false);
      while (walker.nextNode()) {
        node = walker.currentNode;
        if (/^o:/.test(node.nodeValue)) {
          nodes[+node.nodeValue.slice(2)] = node;
        }
      }
      for (i = 0; i < k; ++i) {
        if (node = nodes[i]) {
          node.parentNode.replaceChild(parts[i], node);
        }
      }
    }

    // Is the rendered content
    // … a parent of a single child? Detach and return the child.
    // … a document fragment? Replace the fragment with an element.
    // … some other node? Return it.
    return root.childNodes.length === 1 ? root.removeChild(root.firstChild)
        : root.nodeType === 11 ? ((node = wrapper()).appendChild(root), node)
        : root;
  };
}

var html = template(function(string) {
  var template = document.createElement("template");
  template.innerHTML = string.trim();
  return document.importNode(template.content, true);
}, function() {
  return document.createElement("span");
});

const HL_ROOT = "https://cdn.jsdelivr.net/npm/@observablehq/highlight.js@2.0.0/";

function md(require) {
  return require("marked@0.3.12/marked.min.js").then(function(marked) {
    return template(
      function(string) {
        var root = document.createElement("div");
        root.innerHTML = marked(string, {langPrefix: ""}).trim();
        var code = root.querySelectorAll("pre code[class]");
        if (code.length > 0) {
          require(HL_ROOT + "highlight.min.js").then(function(hl) {
            code.forEach(function(block) {
              function done() {
                hl.highlightBlock(block);
                block.parentNode.classList.add("observablehq--md-pre");
              }
              if (hl.getLanguage(block.className)) {
                done();
              } else {
                require(HL_ROOT + "async-languages/index.js")
                  .then(index => {
                    if (index.has(block.className)) {
                      return require(HL_ROOT +
                        "async-languages/" +
                        index.get(block.className)).then(language => {
                        hl.registerLanguage(block.className, language);
                      });
                    }
                  })
                  .then(done, done);
              }
            });
          });
        }
        return root;
      },
      function() {
        return document.createElement("div");
      }
    );
  });
}

function Mutable(value) {
  let change;
  Object.defineProperties(this, {
    generator: {value: observe(_ => void (change = _))},
    value: {get: () => value, set: x => change(value = x)} // eslint-disable-line no-setter-return
  });
  if (value !== undefined) change(value);
}

function* now() {
  while (true) {
    yield Date.now();
  }
}

function delay(duration, value) {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve(value);
    }, duration);
  });
}

var timeouts = new Map;

function timeout(now, time) {
  var t = new Promise(function(resolve) {
    timeouts.delete(time);
    var delay = time - now;
    if (!(delay > 0)) throw new Error("invalid time");
    if (delay > 0x7fffffff) throw new Error("too long to wait");
    setTimeout(resolve, delay);
  });
  timeouts.set(time, t);
  return t;
}

function when(time, value) {
  var now;
  return (now = timeouts.get(time = +time)) ? now.then(() => value)
      : (now = Date.now()) >= time ? Promise.resolve(value)
      : timeout(now, time).then(() => value);
}

function tick(duration, value) {
  return when(Math.ceil((Date.now() + 1) / duration) * duration, value);
}

var Promises = {
  delay: delay,
  tick: tick,
  when: when
};

function resolve(name, base) {
  if (/^(\w+:)|\/\//i.test(name)) return name;
  if (/^[.]{0,2}\//i.test(name)) return new URL(name, base == null ? location : base).href;
  if (!name.length || /^[\s._]/.test(name) || /\s$/.test(name)) throw new Error("illegal name");
  return "https://unpkg.com/" + name;
}

function requirer(resolve) {
  return resolve == null ? require : requireFrom(resolve);
}

var svg = template(function(string) {
  var root = document.createElementNS("http://www.w3.org/2000/svg", "g");
  root.innerHTML = string.trim();
  return root;
}, function() {
  return document.createElementNS("http://www.w3.org/2000/svg", "g");
});

var raw = String.raw;

function style(href) {
  return new Promise(function(resolve, reject) {
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = href;
    link.onerror = reject;
    link.onload = resolve;
    document.head.appendChild(link);
  });
}

function tex(require) {
  return Promise.all([
    require("@observablehq/katex@0.11.1/dist/katex.min.js"),
    require.resolve("@observablehq/katex@0.11.1/dist/katex.min.css").then(style)
  ]).then(function(values) {
    var katex = values[0], tex = renderer();

    function renderer(options) {
      return function() {
        var root = document.createElement("div");
        katex.render(raw.apply(String, arguments), root, options);
        return root.removeChild(root.firstChild);
      };
    }

    tex.options = renderer;
    tex.block = renderer({displayMode: true});
    return tex;
  });
}

async function vl(require) {
  const [vega, vegalite, api] = await Promise.all([
    "vega@5.20.2/build/vega.min.js",
    "vega-lite@5.1.0/build/vega-lite.min.js",
    "vega-lite-api@5.0.0/build/vega-lite-api.min.js"
  ].map(module => require(module)));
  return api.register(vega, vegalite);
}

function width() {
  return observe(function(change) {
    var width = change(document.body.clientWidth);
    function resized() {
      var w = document.body.clientWidth;
      if (w !== width) change(width = w);
    }
    window.addEventListener("resize", resized);
    return function() {
      window.removeEventListener("resize", resized);
    };
  });
}

var Library = Object.assign(function Library(resolver) {
  const require = requirer(resolver);
  Object.defineProperties(this, properties({
    FileAttachment: () => NoFileAttachments,
    Inputs: () => require("@observablehq/inputs@0.8.0/dist/inputs.umd.min.js"),
    Mutable: () => Mutable,
    Plot: () => require("@observablehq/plot@0.1.0/dist/plot.umd.min.js"),
    SQLite: () => sqlite(require),
    _: () => require("lodash@4.17.21/lodash.min.js"),
    d3: () => require("d3@6.7.0/dist/d3.min.js"),
    dot: () => require("@observablehq/graphviz@0.2.1/dist/graphviz.min.js"),
    htl: () => require("htl@0.2.5/dist/htl.min.js"),
    html: () => html,
    md: () => md(require),
    now,
    require: () => require,
    resolve: () => resolve,
    svg: () => svg,
    tex: () => tex(require),
    vl: () => vl(require),
    width,

    // Note: these are namespace objects, and thus exposed directly rather than
    // being wrapped in a function. This allows library.Generators to resolve,
    // rather than needing module.value.
    DOM,
    Files,
    Generators,
    Promises
  }));
}, {resolve: require.resolve});

function properties(values) {
  return Object.fromEntries(Object.entries(values).map(property));
}

function property([key, value]) {
  return [key, ({value, writable: true, enumerable: true})];
}

function RuntimeError(message, input) {
  this.message = message + "";
  this.input = input;
}

RuntimeError.prototype = Object.create(Error.prototype);
RuntimeError.prototype.name = "RuntimeError";
RuntimeError.prototype.constructor = RuntimeError;

function generatorish(value) {
  return value
      && typeof value.next === "function"
      && typeof value.return === "function";
}

function load(notebook, library, observer) {
  if (typeof library == "function") observer = library, library = null;
  if (typeof observer !== "function") throw new Error("invalid observer");
  if (library == null) library = new Library();

  const {modules, id} = notebook;
  const map = new Map;
  const runtime = new Runtime(library);
  const main = runtime_module(id);

  function runtime_module(id) {
    let module = map.get(id);
    if (!module) map.set(id, module = runtime.module());
    return module;
  }

  for (const m of modules) {
    const module = runtime_module(m.id);
    let i = 0;
    for (const v of m.variables) {
      if (v.from) module.import(v.remote, v.name, runtime_module(v.from));
      else if (module === main) module.variable(observer(v, i, m.variables)).define(v.name, v.inputs, v.value);
      else module.define(v.name, v.inputs, v.value);
      ++i;
    }
  }

  return runtime;
}

var prototype = Array.prototype;
var map = prototype.map;
var forEach = prototype.forEach;

function constant(x) {
  return function() {
    return x;
  };
}

function identity(x) {
  return x;
}

function rethrow(e) {
  return function() {
    throw e;
  };
}

function noop() {}

var TYPE_NORMAL = 1; // a normal variable
var TYPE_IMPLICIT = 2; // created on reference
var TYPE_DUPLICATE = 3; // created on duplicate definition

var no_observer = {};

function Variable(type, module, observer) {
  if (!observer) observer = no_observer;
  Object.defineProperties(this, {
    _observer: {value: observer, writable: true},
    _definition: {value: variable_undefined, writable: true},
    _duplicate: {value: undefined, writable: true},
    _duplicates: {value: undefined, writable: true},
    _indegree: {value: NaN, writable: true}, // The number of computing inputs.
    _inputs: {value: [], writable: true},
    _invalidate: {value: noop, writable: true},
    _module: {value: module},
    _name: {value: null, writable: true},
    _outputs: {value: new Set, writable: true},
    _promise: {value: Promise.resolve(undefined), writable: true},
    _reachable: {value: observer !== no_observer, writable: true}, // Is this variable transitively visible?
    _rejector: {value: variable_rejector(this)},
    _type: {value: type},
    _value: {value: undefined, writable: true},
    _version: {value: 0, writable: true}
  });
}

Object.defineProperties(Variable.prototype, {
  _pending: {value: variable_pending, writable: true, configurable: true},
  _fulfilled: {value: variable_fulfilled, writable: true, configurable: true},
  _rejected: {value: variable_rejected, writable: true, configurable: true},
  define: {value: variable_define, writable: true, configurable: true},
  delete: {value: variable_delete, writable: true, configurable: true},
  import: {value: variable_import, writable: true, configurable: true}
});

function variable_attach(variable) {
  variable._module._runtime._dirty.add(variable);
  variable._outputs.add(this);
}

function variable_detach(variable) {
  variable._module._runtime._dirty.add(variable);
  variable._outputs.delete(this);
}

function variable_undefined() {
  throw variable_undefined;
}

function variable_rejector(variable) {
  return function(error) {
    if (error === variable_undefined) throw new RuntimeError(variable._name + " is not defined", variable._name);
    if (error instanceof Error && error.message) throw new RuntimeError(error.message, variable._name);
    throw new RuntimeError(variable._name + " could not be resolved", variable._name);
  };
}

function variable_duplicate(name) {
  return function() {
    throw new RuntimeError(name + " is defined more than once");
  };
}

function variable_define(name, inputs, definition) {
  switch (arguments.length) {
    case 1: {
      definition = name, name = inputs = null;
      break;
    }
    case 2: {
      definition = inputs;
      if (typeof name === "string") inputs = null;
      else inputs = name, name = null;
      break;
    }
  }
  return variable_defineImpl.call(this,
    name == null ? null : name + "",
    inputs == null ? [] : map.call(inputs, this._module._resolve, this._module),
    typeof definition === "function" ? definition : constant(definition)
  );
}

function variable_defineImpl(name, inputs, definition) {
  var scope = this._module._scope, runtime = this._module._runtime;

  this._inputs.forEach(variable_detach, this);
  inputs.forEach(variable_attach, this);
  this._inputs = inputs;
  this._definition = definition;
  this._value = undefined;

  // Is this an active variable (that may require disposal)?
  if (definition === noop) runtime._variables.delete(this);
  else runtime._variables.add(this);

  // Did the variable’s name change? Time to patch references!
  if (name !== this._name || scope.get(name) !== this) {
    var error, found;

    if (this._name) { // Did this variable previously have a name?
      if (this._outputs.size) { // And did other variables reference this variable?
        scope.delete(this._name);
        found = this._module._resolve(this._name);
        found._outputs = this._outputs, this._outputs = new Set;
        found._outputs.forEach(function(output) { output._inputs[output._inputs.indexOf(this)] = found; }, this);
        found._outputs.forEach(runtime._updates.add, runtime._updates);
        runtime._dirty.add(found).add(this);
        scope.set(this._name, found);
      } else if ((found = scope.get(this._name)) === this) { // Do no other variables reference this variable?
        scope.delete(this._name); // It’s safe to delete!
      } else if (found._type === TYPE_DUPLICATE) { // Do other variables assign this name?
        found._duplicates.delete(this); // This variable no longer assigns this name.
        this._duplicate = undefined;
        if (found._duplicates.size === 1) { // Is there now only one variable assigning this name?
          found = found._duplicates.keys().next().value; // Any references are now fixed!
          error = scope.get(this._name);
          found._outputs = error._outputs, error._outputs = new Set;
          found._outputs.forEach(function(output) { output._inputs[output._inputs.indexOf(error)] = found; });
          found._definition = found._duplicate, found._duplicate = undefined;
          runtime._dirty.add(error).add(found);
          runtime._updates.add(found);
          scope.set(this._name, found);
        }
      } else {
        throw new Error;
      }
    }

    if (this._outputs.size) throw new Error;

    if (name) { // Does this variable have a new name?
      if (found = scope.get(name)) { // Do other variables reference or assign this name?
        if (found._type === TYPE_DUPLICATE) { // Do multiple other variables already define this name?
          this._definition = variable_duplicate(name), this._duplicate = definition;
          found._duplicates.add(this);
        } else if (found._type === TYPE_IMPLICIT) { // Are the variable references broken?
          this._outputs = found._outputs, found._outputs = new Set; // Now they’re fixed!
          this._outputs.forEach(function(output) { output._inputs[output._inputs.indexOf(found)] = this; }, this);
          runtime._dirty.add(found).add(this);
          scope.set(name, this);
        } else { // Does another variable define this name?
          found._duplicate = found._definition, this._duplicate = definition; // Now they’re duplicates.
          error = new Variable(TYPE_DUPLICATE, this._module);
          error._name = name;
          error._definition = this._definition = found._definition = variable_duplicate(name);
          error._outputs = found._outputs, found._outputs = new Set;
          error._outputs.forEach(function(output) { output._inputs[output._inputs.indexOf(found)] = error; });
          error._duplicates = new Set([this, found]);
          runtime._dirty.add(found).add(error);
          runtime._updates.add(found).add(error);
          scope.set(name, error);
        }
      } else {
        scope.set(name, this);
      }
    }

    this._name = name;
  }

  runtime._updates.add(this);
  runtime._compute();
  return this;
}

function variable_import(remote, name, module) {
  if (arguments.length < 3) module = name, name = remote;
  return variable_defineImpl.call(this, name + "", [module._resolve(remote + "")], identity);
}

function variable_delete() {
  return variable_defineImpl.call(this, null, [], noop);
}

function variable_pending() {
  if (this._observer.pending) this._observer.pending();
}

function variable_fulfilled(value) {
  if (this._observer.fulfilled) this._observer.fulfilled(value, this._name);
}

function variable_rejected(error) {
  if (this._observer.rejected) this._observer.rejected(error, this._name);
}

function Module(runtime, builtins = []) {
  Object.defineProperties(this, {
    _runtime: {value: runtime},
    _scope: {value: new Map},
    _builtins: {value: new Map([
      ["invalidation", variable_invalidation],
      ["visibility", variable_visibility],
      ...builtins
    ])},
    _source: {value: null, writable: true}
  });
}

Object.defineProperties(Module.prototype, {
  _copy: {value: module_copy, writable: true, configurable: true},
  _resolve: {value: module_resolve, writable: true, configurable: true},
  redefine: {value: module_redefine, writable: true, configurable: true},
  define: {value: module_define, writable: true, configurable: true},
  derive: {value: module_derive, writable: true, configurable: true},
  import: {value: module_import, writable: true, configurable: true},
  value: {value: module_value, writable: true, configurable: true},
  variable: {value: module_variable, writable: true, configurable: true},
  builtin: {value: module_builtin, writable: true, configurable: true}
});

function module_redefine(name) {
  var v = this._scope.get(name);
  if (!v) throw new RuntimeError(name + " is not defined");
  if (v._type === TYPE_DUPLICATE) throw new RuntimeError(name + " is defined more than once");
  return v.define.apply(v, arguments);
}

function module_define() {
  var v = new Variable(TYPE_NORMAL, this);
  return v.define.apply(v, arguments);
}

function module_import() {
  var v = new Variable(TYPE_NORMAL, this);
  return v.import.apply(v, arguments);
}

function module_variable(observer) {
  return new Variable(TYPE_NORMAL, this, observer);
}

async function module_value(name) {
  var v = this._scope.get(name);
  if (!v) throw new RuntimeError(name + " is not defined");
  if (v._observer === no_observer) {
    v._observer = true;
    this._runtime._dirty.add(v);
  }
  await this._runtime._compute();
  return v._promise;
}

function module_derive(injects, injectModule) {
  var copy = new Module(this._runtime, this._builtins);
  copy._source = this;
  forEach.call(injects, function(inject) {
    if (typeof inject !== "object") inject = {name: inject + ""};
    if (inject.alias == null) inject.alias = inject.name;
    copy.import(inject.name, inject.alias, injectModule);
  });
  Promise.resolve().then(() => {
    const modules = new Set([this]);
    for (const module of modules) {
      for (const variable of module._scope.values()) {
        if (variable._definition === identity) { // import
          const module = variable._inputs[0]._module;
          const source = module._source || module;
          if (source === this) { // circular import-with!
            console.warn("circular module definition; ignoring"); // eslint-disable-line no-console
            return;
          }
          modules.add(source);
        }
      }
    }
    this._copy(copy, new Map);
  });
  return copy;
}

function module_copy(copy, map) {
  copy._source = this;
  map.set(this, copy);
  for (const [name, source] of this._scope) {
    var target = copy._scope.get(name);
    if (target && target._type === TYPE_NORMAL) continue; // injection
    if (source._definition === identity) { // import
      var sourceInput = source._inputs[0],
          sourceModule = sourceInput._module;
      copy.import(sourceInput._name, name, map.get(sourceModule)
        || (sourceModule._source
           ? sourceModule._copy(new Module(copy._runtime, copy._builtins), map) // import-with
           : sourceModule));
    } else {
      copy.define(name, source._inputs.map(variable_name), source._definition);
    }
  }
  return copy;
}

function module_resolve(name) {
  var variable = this._scope.get(name), value;
  if (!variable) {
    variable = new Variable(TYPE_IMPLICIT, this);
    if (this._builtins.has(name)) {
      variable.define(name, constant(this._builtins.get(name)));
    } else if (this._runtime._builtin._scope.has(name)) {
      variable.import(name, this._runtime._builtin);
    } else {
      try {
        value = this._runtime._global(name);
      } catch (error) {
        return variable.define(name, rethrow(error));
      }
      if (value === undefined) {
        this._scope.set(variable._name = name, variable);
      } else {
        variable.define(name, constant(value));
      }
    }
  }
  return variable;
}

function module_builtin(name, value) {
  this._builtins.set(name, value);
}

function variable_name(variable) {
  return variable._name;
}

const frame = typeof requestAnimationFrame === "function" ? requestAnimationFrame : setImmediate;

var variable_invalidation = {};
var variable_visibility = {};

function Runtime(builtins = new Library, global = window_global) {
  var builtin = this.module();
  Object.defineProperties(this, {
    _dirty: {value: new Set},
    _updates: {value: new Set},
    _computing: {value: null, writable: true},
    _init: {value: null, writable: true},
    _modules: {value: new Map},
    _variables: {value: new Set},
    _disposed: {value: false, writable: true},
    _builtin: {value: builtin},
    _global: {value: global}
  });
  if (builtins) for (var name in builtins) {
    (new Variable(TYPE_IMPLICIT, builtin)).define(name, [], builtins[name]);
  }
}

Object.defineProperties(Runtime, {
  load: {value: load, writable: true, configurable: true}
});

Object.defineProperties(Runtime.prototype, {
  _compute: {value: runtime_compute, writable: true, configurable: true},
  _computeSoon: {value: runtime_computeSoon, writable: true, configurable: true},
  _computeNow: {value: runtime_computeNow, writable: true, configurable: true},
  dispose: {value: runtime_dispose, writable: true, configurable: true},
  module: {value: runtime_module, writable: true, configurable: true},
  fileAttachments: {value: FileAttachments, writable: true, configurable: true}
});

function runtime_dispose() {
  this._computing = Promise.resolve();
  this._disposed = true;
  this._variables.forEach(v => {
    v._invalidate();
    v._version = NaN;
  });
}

function runtime_module(define, observer = noop) {
  let module;
  if (define === undefined) {
    if (module = this._init) {
      this._init = null;
      return module;
    }
    return new Module(this);
  }
  module = this._modules.get(define);
  if (module) return module;
  this._init = module = new Module(this);
  this._modules.set(define, module);
  try {
    define(this, observer);
  } finally {
    this._init = null;
  }
  return module;
}

function runtime_compute() {
  return this._computing || (this._computing = this._computeSoon());
}

function runtime_computeSoon() {
  var runtime = this;
  return new Promise(function(resolve) {
    frame(function() {
      resolve();
      runtime._disposed || runtime._computeNow();
    });
  });
}

function runtime_computeNow() {
  var queue = [],
      variables,
      variable;

  // Compute the reachability of the transitive closure of dirty variables.
  // Any newly-reachable variable must also be recomputed.
  // Any no-longer-reachable variable must be terminated.
  variables = new Set(this._dirty);
  variables.forEach(function(variable) {
    variable._inputs.forEach(variables.add, variables);
    const reachable = variable_reachable(variable);
    if (reachable > variable._reachable) {
      this._updates.add(variable);
    } else if (reachable < variable._reachable) {
      variable._invalidate();
    }
    variable._reachable = reachable;
  }, this);

  // Compute the transitive closure of updating, reachable variables.
  variables = new Set(this._updates);
  variables.forEach(function(variable) {
    if (variable._reachable) {
      variable._indegree = 0;
      variable._outputs.forEach(variables.add, variables);
    } else {
      variable._indegree = NaN;
      variables.delete(variable);
    }
  });

  this._computing = null;
  this._updates.clear();
  this._dirty.clear();

  // Compute the indegree of updating variables.
  variables.forEach(function(variable) {
    variable._outputs.forEach(variable_increment);
  });

  do {
    // Identify the root variables (those with no updating inputs).
    variables.forEach(function(variable) {
      if (variable._indegree === 0) {
        queue.push(variable);
      }
    });

    // Compute the variables in topological order.
    while (variable = queue.pop()) {
      variable_compute(variable);
      variable._outputs.forEach(postqueue);
      variables.delete(variable);
    }

    // Any remaining variables are circular, or depend on them.
    variables.forEach(function(variable) {
      if (variable_circular(variable)) {
        variable_error(variable, new RuntimeError("circular definition"));
        variable._outputs.forEach(variable_decrement);
        variables.delete(variable);
      }
    });
  } while (variables.size);

  function postqueue(variable) {
    if (--variable._indegree === 0) {
      queue.push(variable);
    }
  }
}

function variable_circular(variable) {
  const inputs = new Set(variable._inputs);
  for (const i of inputs) {
    if (i === variable) return true;
    i._inputs.forEach(inputs.add, inputs);
  }
  return false;
}

function variable_increment(variable) {
  ++variable._indegree;
}

function variable_decrement(variable) {
  --variable._indegree;
}

function variable_value(variable) {
  return variable._promise.catch(variable._rejector);
}

function variable_invalidator(variable) {
  return new Promise(function(resolve) {
    variable._invalidate = resolve;
  });
}

function variable_intersector(invalidation, variable) {
  let node = typeof IntersectionObserver === "function" && variable._observer && variable._observer._node;
  let visible = !node, resolve = noop, reject = noop, promise, observer;
  if (node) {
    observer = new IntersectionObserver(([entry]) => (visible = entry.isIntersecting) && (promise = null, resolve()));
    observer.observe(node);
    invalidation.then(() => (observer.disconnect(), observer = null, reject()));
  }
  return function(value) {
    if (visible) return Promise.resolve(value);
    if (!observer) return Promise.reject();
    if (!promise) promise = new Promise((y, n) => (resolve = y, reject = n));
    return promise.then(() => value);
  };
}

function variable_compute(variable) {
  variable._invalidate();
  variable._invalidate = noop;
  variable._pending();
  var value0 = variable._value,
      version = ++variable._version,
      invalidation = null,
      promise = variable._promise = Promise.all(variable._inputs.map(variable_value)).then(function(inputs) {
    if (variable._version !== version) return;

    // Replace any reference to invalidation with the promise, lazily.
    for (var i = 0, n = inputs.length; i < n; ++i) {
      switch (inputs[i]) {
        case variable_invalidation: {
          inputs[i] = invalidation = variable_invalidator(variable);
          break;
        }
        case variable_visibility: {
          if (!invalidation) invalidation = variable_invalidator(variable);
          inputs[i] = variable_intersector(invalidation, variable);
          break;
        }
      }
    }

    // Compute the initial value of the variable.
    return variable._definition.apply(value0, inputs);
  }).then(function(value) {
    // If the value is a generator, then retrieve its first value,
    // and dispose of the generator if the variable is invalidated.
    // Note that the cell may already have been invalidated here,
    // in which case we need to terminate the generator immediately!
    if (generatorish(value)) {
      if (variable._version !== version) return void value.return();
      (invalidation || variable_invalidator(variable)).then(variable_return(value));
      return variable_precompute(variable, version, promise, value);
    }
    return value;
  });
  promise.then(function(value) {
    if (variable._version !== version) return;
    variable._value = value;
    variable._fulfilled(value);
  }, function(error) {
    if (variable._version !== version) return;
    variable._value = undefined;
    variable._rejected(error);
  });
}

function variable_precompute(variable, version, promise, generator) {
  function recompute() {
    var promise = new Promise(function(resolve) {
      resolve(generator.next());
    }).then(function(next) {
      return next.done ? undefined : Promise.resolve(next.value).then(function(value) {
        if (variable._version !== version) return;
        variable_postrecompute(variable, value, promise).then(recompute);
        variable._fulfilled(value);
        return value;
      });
    });
    promise.catch(function(error) {
      if (variable._version !== version) return;
      variable_postrecompute(variable, undefined, promise);
      variable._rejected(error);
    });
  }
  return new Promise(function(resolve) {
    resolve(generator.next());
  }).then(function(next) {
    if (next.done) return;
    promise.then(recompute);
    return next.value;
  });
}

function variable_postrecompute(variable, value, promise) {
  var runtime = variable._module._runtime;
  variable._value = value;
  variable._promise = promise;
  variable._outputs.forEach(runtime._updates.add, runtime._updates); // TODO Cleaner?
  return runtime._compute();
}

function variable_error(variable, error) {
  variable._invalidate();
  variable._invalidate = noop;
  variable._pending();
  ++variable._version;
  variable._indegree = NaN;
  (variable._promise = Promise.reject(error)).catch(noop);
  variable._value = undefined;
  variable._rejected(error);
}

function variable_return(generator) {
  return function() {
    generator.return();
  };
}

function variable_reachable(variable) {
  if (variable._observer !== no_observer) return true; // Directly reachable.
  var outputs = new Set(variable._outputs);
  for (const output of outputs) {
    if (output._observer !== no_observer) return true;
    output._outputs.forEach(outputs.add, outputs);
  }
  return false;
}

function window_global(name) {
  return window[name];
}

/**
 * @author Jonathan Terrell <jonathan.terrell@springbrook.es>
 * @copyright Copyright (c) 2019-2021 Springbrook S.L.
 * @license "Apache-2.0"
 */

const visualTypes = new Map([
    ['chartJS', { imageHeight: 24, imageSource: 'chartJS-logo.svg', label: 'Chart.js', labelPadding: 3 }],
    ['eCharts', { imageHeight: 17, imageSource: 'eCharts-logo.png', label: 'ECharts', labelPadding: 5 }],
    ['highcharts', { imageHeight: 18, imageSource: 'highcharts-logo.png', label: 'Highcharts', labelPadding: 5 }]
]);

class ChartPanel {
    constructor(element, items, callback) {
        this.element = element;
        this.items = items;
        this.callback = callback;
    }

    show() {
        if (Array.isArray(this.items)) {
            let itemCount = -1;
            const visuals = this.items.map((item) => {
                itemCount++;
                return {
                    callback: this.callback,
                    index: itemCount,
                    notebookId: item.notebookId,
                    typeId: item.typeId,
                    visualise: item.visualise
                };
            });
            replaceContent$1(this.element, buildTabbedTile$1(this, visuals));
            selectItem$1(this, visuals[0]);
        } else if (typeof this.items === 'object' && this.items !== null) {
            replaceContent$1(this.element, buildSimpleTile$1());
            showVisual$1(this, this.items);
        } else {
            replaceContent$1(this.element, buildEmptyTile$1());
            this.currentVisualiser = undefined;
        }
        return this;
    }
}

const defaultVisualHeight$1 = 500;

const buildEmptyTile$1 = () => {
    const element = document.createElement('div');
    element.style.cssText = `height: ${defaultVisualHeight$1}px`;
    return element;
};

const buildSimpleTile$1 = () => {
    const element = document.createElement('div');
    element.id = 'visual';
    element.style.cssText = `height: ${defaultVisualHeight$1}px`;
    return element;
};

const buildTabbedTile$1 = (tile, visuals) => {
    const wrapperElement = document.createElement('div');
    wrapperElement.style.cssText = 'display: flex; flex-direction: column';

    const visualElement = document.createElement('div');
    visualElement.style.cssText = `height: ${defaultVisualHeight$1}px`;
    visualElement.id = 'visual';
    wrapperElement.appendChild(visualElement);

    const tabsElement = document.createElement('div');

    tabsElement.style.cssText = 'border-top: 1px solid #eee; color: #777; display: flex; font-size: 14px';
    for (const [index, visual] of visuals.entries()) {
        tabsElement.appendChild(buildVendorButton(tile, index, visual));
    }

    const optionsButtonElement = document.createElement('div');
    optionsButtonElement.className = 'optionsButton';
    optionsButtonElement.onclick = () => {
        console.log('Options button clicked...');
    };
    optionsButtonElement.style.cssText = 'margin-left: auto';
    const labelTextNode = document.createTextNode('Options');
    optionsButtonElement.appendChild(labelTextNode);

    tabsElement.appendChild(optionsButtonElement);

    wrapperElement.appendChild(tabsElement);

    return wrapperElement;
};

const buildVendorButton = (tile, visualIndex, visual) => {
    const visualType = visualTypes.get(visual.typeId);

    const vendorButtonElement = document.createElement('div');
    vendorButtonElement.className = 'vendorButton';
    vendorButtonElement.id = `vendorButton_${visualIndex}`;
    vendorButtonElement.onclick = () => selectItem$1(tile, visual);

    const image = document.createElement('img');
    image.height = visualType.imageHeight;
    image.style.cssText = 'margin: 0';
    image.src = `https://nectis-content.web.app/${visualType.imageSource}`;
    vendorButtonElement.appendChild(image);

    const labelElement = document.createElement('div');
    labelElement.style.cssText = `padding-left: ${visualType.labelPadding}px`;
    const labelTextNode = document.createTextNode(visualType.label);
    labelElement.appendChild(labelTextNode);
    vendorButtonElement.appendChild(labelElement);

    return vendorButtonElement;
};

const selectItem$1 = (tile, visual) => {
    // Clear vendor button selection.
    const vendorButtons = tile.element.getElementsByClassName('vendorButton');
    for (let i1 = 0; i1 < vendorButtons.length; i1++) {
        vendorButtons[i1].className = 'vendorButton';
    }

    tile.element.querySelector(`#vendorButton_${visual.index}`).className = 'vendorButton selected';

    showVisual$1(tile, visual);
};

const showVisual$1 = async (tile, visual) => {
    const panelElement = tile.element.querySelector('#visual');
    removeContent$1(panelElement);
    // if (visual.visualise) {
    //     tile.currentVisualiser = visual.visualise(panelElement);
    // } else {
    //     tile.currentVisualiser = undefined;
    // }
    const notebook = await loadNotebook(visual.notebookId);
    console.log('notebook', notebook);
    if (visual.callback) visual.callback(visual.notebookId);
};

const loadNotebook = async (notebookId) => {
    // const result = (await import(/* webpackIgnore: true */ `https://api.observablehq.com/@jonathan-terrell/point-in-time-headcount-chartjs.js?v=3`));
    // return 123;

    console.log(1111, `https://api.observablehq.com/@jonathan-terrell/${notebookId}.js?v=3`);
    const module = await import(`https://api.observablehq.com/@jonathan-terrell/${notebookId}.js?v=3`);
    console.log(2222);
    return module;

    // const variables = {};
    // for (const variable of module.default.modules[0].variables) {
    //     const name = variable.name;
    //     variables[name] = { inputs: variable.inputs, value: variable.value };
    // }

    // const buildArgs = async (variables2, inputs) => {
    //     const args = [];
    //     for (const name of inputs) {
    //         const variable = variables2[name];
    //         const inputArgs = await buildArgs(variables2, variable.inputs || []);
    //         args.push(await variable.value(...inputArgs));
    //     }
    //     return args;
    // };

    // const args = await buildArgs(variables, variables.visualise.inputs || []);
    // return await variables.visualise.value(...args);
};

const removeContent$1 = (element) => {
    while (element.firstChild) element.firstChild.remove();
};

const replaceContent$1 = (element, content) => {
    element.replaceChildren(content);
};

class ChartPanelVisualiser {
    constructor(element, options, callback) {
        this.element = element;
        this.options = options;
        this.callback = callback;
        this.visual = undefined;
    }

    show() {
        this.visual = new ChartPanel(this.element, this.options, this.callback).show();
        return this;
    }

    resize(items) {
        return this;
    }
}

// -------------------------------------------------------------------------------------------------------------------------------
// Exports
// -------------------------------------------------------------------------------------------------------------------------------

var ChartPanel$1 = { ChartPanelVisualiser };

/**
 * @author Jonathan Terrell <jonathan.terrell@springbrook.es>
 * @copyright Copyright (c) 2019-2021 Springbrook S.L.
 * @license "Apache-2.0"
 */

// -------------------------------------------------------------------------------------------------------------------------------
// Exports
// -------------------------------------------------------------------------------------------------------------------------------

var D3XYChart = {};

/**
 * @author Jonathan Terrell <jonathan.terrell@springbrook.es>
 * @copyright Copyright (c) 2019-2021 Springbrook S.L.
 * @license "Apache-2.0"
 */

// -------------------------------------------------------------------------------------------------------------------------------
// Exports
// -------------------------------------------------------------------------------------------------------------------------------

var ECharts = {};

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

var Highcharts$1 = { HighchartsVisualiser };

// -------------------------------------------------------------------------------------------------------------------------------
// Procedures
// -------------------------------------------------------------------------------------------------------------------------------

const loadHighcharts = async () => {
    const imports = await Promise.all([import('./nectis-observable-highcharts-bb3f57fd-es.js').then(function (n) { return n.h; }), import('./nectis-observable-highcharts-more-b57e5fc4-es.js').then(function (n) { return n.h; })]);
    Highcharts = imports[0];
    const highchartsMore = imports[1].default;
    highchartsMore(Highcharts);
    Highcharts.setOptions({ lang: { thousandsSep: ',' } }); // Modify default options.
};

/**
 * @author Jonathan Terrell <jonathan.terrell@springbrook.es>
 * @copyright Copyright (c) 2019-2021 Springbrook S.L.
 * @license "Apache-2.0"
 */

class TabPanel {
    constructor(element, items, callback) {
        this.element = element;
        this.items = items;
        this.callback = callback;
    }

    show() {
        if (Array.isArray(this.items)) {
            let itemCount = -1;
            const visuals = this.items.map((item) => {
                itemCount++;
                return {
                    index: itemCount,
                    label: item.label,
                    vendors: item.vendors,
                    visualise: item.visualise
                };
            });
            replaceContent(this.element, buildTabbedTile(this, visuals), this.callback);
            const visualElement = document.createElement('div');
            visualElement.id = 'visual';
            this.element.appendChild(visualElement);
            selectItem(this, visuals[0], this.callback);
        } else if (typeof items === 'object' && this.items !== null) {
            replaceContent(this.element, buildSimpleTile());
            showVisual(this, this.items, this.callback);
        } else {
            replaceContent(this.element, buildEmptyTile());
            this.currentVisualiser = undefined;
        }
        return this;
    }
}

const defaultVisualHeight = 500;

const buildEmptyTile = () => {
    const element = document.createElement('div');
    element.style.cssText = `height: ${defaultVisualHeight}px`;
    return element;
};

const buildSimpleTile = () => {
    const element = document.createElement('div');
    element.id = 'visual';
    element.style.cssText = `height: ${defaultVisualHeight}px`;
    return element;
};

const buildTabbedTile = (tile, visuals, callback) => {
    const tabsElement = document.createElement('div');
    tabsElement.className = 'tabBar';
    tabsElement.style.cssText = 'display: flex';
    for (const [index, visual] of visuals.entries()) {
        tabsElement.appendChild(buildTabButton(tile, index, visual, callback));
    }
    return tabsElement;
};

const buildTabButton = (tile, visualIndex, visual, callback) => {
    const tabButtonElement = document.createElement('div');
    tabButtonElement.className = 'tabButton';
    if (visual.vendors) tabButtonElement.dataset.vendors = JSON.stringify(visual.vendors);
    tabButtonElement.id = `tabButton_${visualIndex}`;
    tabButtonElement.onclick = () => selectItem(tile, visual, callback);
    const labelTextNode = document.createTextNode(visual.label);
    tabButtonElement.appendChild(labelTextNode);
    return tabButtonElement;
};

const selectItem = (tile, visual, callback) => {
    // Clear tab button selection.
    const tabButtons = tile.element.getElementsByClassName('tabButton');
    for (let i1 = 0; i1 < tabButtons.length; i1++) {
        tabButtons[i1].className = 'tabButton';
    }
    const selectedButton = tile.element.querySelector(`#tabButton_${visual.index}`);
    selectedButton.className = 'tabButton selected';
    showVisual(tile, visual, selectedButton, callback);
};

const showVisual = (tile, visual, selectedButton, callback) => {
    const panelElement = tile.element.querySelector('#visual');
    removeContent(panelElement);
    // if (visual.visualise) {
    //     tile.currentVisualiser = visual.visualise(panelElement);
    // } else {
    //     tile.currentVisualiser = undefined;
    // }
    const vendorsString = selectedButton.dataset.vendors;
    if (vendorsString) {
        const vendors = JSON.parse(vendorsString);
        buildVendors(panelElement, vendors, callback);
    } else {
        console.log('NO VENDORS');
    }
};

// const showVisual1 = (tile, visual) => {
//     const panelElement = tile.element.querySelector('#visual');
//     removeContent(panelElement);
//     if (visual.visualise) {
//         tile.currentVisualiser = visual.visualise(panelElement);
//     } else {
//         tile.currentVisualiser = undefined;
//     }
// };

const buildVendors = (element, vendors, callback) => {
    const vendorCount = vendors.length;
    if (vendorCount === 0) return;
    if (vendorCount === 1) {
        const vendor = vendors[0];
        if (vendor.vendorId) {
            buildVendor(vendor);
        } else {
            buildVisual();
        }
    } else {
        new ChartPanel$1.ChartPanelVisualiser(
            element,
            vendors.map((vendor) => buildVendor(vendor)),
            callback
        ).show();
    }
};

const buildVendor = (vendor) => ({ notebookId: vendor.notebookId, typeId: vendor.id });

const buildVisual = () => {
    console.log('BUILD VISUAL');
};

const removeContent = (element) => {
    while (element.firstChild) element.firstChild.remove();
};

const replaceContent = (element, content) => {
    element.replaceChildren(content);
};

class TabPanelVisualiser {
    constructor(element, options, callback) {
        this.element = element;
        this.options = options;
        this.callback = callback;
        this.visual = undefined;
    }

    show() {
        this.visual = new TabPanel(this.element, this.options, this.callback).show();
        return this;
    }

    resize(items) {
        return this;
    }
}

// -------------------------------------------------------------------------------------------------------------------------------
// Exports
// -------------------------------------------------------------------------------------------------------------------------------

var TabPanel$1 = { TabPanelVisualiser };

/**
 * @author Jonathan Terrell <jonathan.terrell@springbrook.es>
 * @copyright Copyright (c) 2019-2021 Springbrook S.L.
 * @license "Apache-2.0"
 */

// -------------------------------------------------------------------------------------------------------------------------------
// Declarations - Classes
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
                td.style.cssText = buildCellStyle(column);
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
    switch (column.typeId) {
        case 'decimalNumber':
        case 'wholeNumber':
            return ` text-align: ${column.align || 'right'}`;
        default:
            return ` text-align: ${column.align || 'left'}`;
    }
};

const formatCellValue = (column, value) => {
    if (!value) return '';
    switch (column.typeId) {
        case 'decimalNumber':
            return value.toLocaleString(undefined, { maximumFractionDigits: 2, minimumFractionDigits: 2 });
        default:
            return value.toLocaleString();
    }
};

/**
 * @author Jonathan Terrell <jonathan.terrell@springbrook.es>
 * @copyright Copyright (c) 2019-2021 Springbrook S.L.
 * @license "Apache-2.0"
 */

// -------------------------------------------------------------------------------------------------------------------------------
// Declarations - Classes
// -------------------------------------------------------------------------------------------------------------------------------

const define = (options) => {
    const tileElement = document.createElement('div');
    tileElement.className = 'nectis';
    tileElement.dataset.options = JSON.stringify(options);

    const styleElement = document.createElement('style');
    styleElement.appendChild(document.createTextNode(panelStyle));
    tileElement.appendChild(styleElement);

    const visualElement = document.createElement('div');
    visualElement.id = 'content';
    tileElement.appendChild(visualElement);

    return tileElement;
};

const show = (element, callback) => {
    const options = JSON.parse(element.dataset.options);
    const tabs = (options || {}).tabs || [];
    const tabPanelVisualiser = new TabPanel$1.TabPanelVisualiser(element.querySelector('#content'), tabs, callback);
    tabPanelVisualiser.show();
};

// -------------------------------------------------------------------------------------------------------------------------------
// Exports
// -------------------------------------------------------------------------------------------------------------------------------

var Tile = { define, show };

// -------------------------------------------------------------------------------------------------------------------------------
// Procedures
// -------------------------------------------------------------------------------------------------------------------------------

/**
 * @author Jonathan Terrell <jonathan.terrell@springbrook.es>
 * @copyright Copyright (c) 2019-2021 Springbrook S.L.
 * @license "Apache-2.0"
 */

// -------------------------------------------------------------------------------------------------------------------------------
// Declarations - Variables
// -------------------------------------------------------------------------------------------------------------------------------

const monthAbbreviations = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const workforceSizeByYear = [
    /* eslint-disable sort-keys */
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
    /* eslint-enable sort-keys */
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
    const averageHeadcount = [];
    const fte = [];
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
        averageHeadcount.push(month.averageHeadcount);
        fte.push(month.fte);
        endingTerminations.push(month.endingTerminations);
        closingHeadcounts.push(month.closingHeadcount);

        openingClosingHeadcounts.push([month.openingHeadcount, month.closingHeadcount]);
        startingEndingHeadcounts.push([startingHeadcount, endingHeadcount]);
    }

    return {
        /* eslint-disable sort-keys */
        openingHeadcounts,
        startingHires,
        startingHeadcounts,
        inPeriodHires,
        hires,
        terminations,
        inPeriodTerminations,
        averageHeadcount,
        fte,
        endingHeadcounts,
        endingTerminations,
        closingHeadcounts,
        openingClosingHeadcounts,
        startingEndingHeadcounts
        /* eslint-enable sort-keys */
    };
};

const getWorkforceSizeForYear2 = (year) => workforceSizeByYear;

const workforceSizeYear = 2020;

// -------------------------------------------------------------------------------------------------------------------------------
// Exports
// -------------------------------------------------------------------------------------------------------------------------------

var WorkforceSize = { getWorkforceSizeForYear, getWorkforceSizeForYear2, monthAbbreviations, workforceSizeYear };

export { ChartJS$1 as ChartJS, ChartPanel$1 as ChartPanel, D3XYChart as D3XYCharts, ECharts, Highcharts$1 as Highcharts, TabPanel$1 as TabPanel, Table$1 as Table, Theme, Tile, WorkforceSize };
