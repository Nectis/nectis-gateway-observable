/**
 * @author Jonathan Terrell <jonathan.terrell@springbrook.es>
 * @copyright Copyright (c) 2019-2021 Springbrook S.L.
 * @license "Apache-2.0"
 */

// -------------------------------------------------------------------------------------------------------------------------------
// Declarations - Variables
// -------------------------------------------------------------------------------------------------------------------------------

import React from 'react';
//import { render } from 'react-dom';
import ReactDOM from 'react-dom';
import { ResponsiveBar } from '@nivo/bar';
//import { BoxLegendSvg } from '@nivo/legends';

// -------------------------------------------------------------------------------------------------------------------------------
// Declarations - Classes
// -------------------------------------------------------------------------------------------------------------------------------

class NivoVisualiser {
    constructor(element, options) {
        this.element = element;
        this.options = options;
        this.visual = undefined;
    }

    async show() {
        const data = [
            { id: 'A', one: 85, two: 135 },
            { id: 'B', one: 128, two: 182 },
            { id: 'C', one: 12, two: 172 },
            { id: 'D', one: 59, two: 111 },
            { id: 'E', one: 27, two: 156 }
        ];

        // const BarLegend = ({ height, legends, width }) => (
        //     <React.Fragment>
        //         {legends.map((legend) => (
        //             <BoxLegendSvg
        //                 key={JSON.stringify(legend.data.map(({ id }) => id))}
        //                 {...legend}
        //                 containerHeight={height}
        //                 containerWidth={width}
        //             />
        //         ))}
        //     </React.Fragment>
        // );

        const keys = ['one', 'two'];
        const colors = ['#009bb9', '#e7399c'];

        ReactDOM.render(React.createElement('div', null, `Hello world...`), this.element);

        // render(
        //     <div style={{ height: '500px' }}>
        //         <ResponsiveBar
        //             data={data}
        //             keys={keys}
        //             indexBy="id"
        //             margin={{
        //                 top: 50,
        //                 right: 130,
        //                 bottom: 185,
        //                 left: 60
        //             }}
        //             colors={colors}
        //             padding={0.3}
        //             layout="horizontal"
        //             borderColor="inherit:darker(1.6)"
        //             enableLabel={false}
        //             enableGridX={true}
        //             enableGridY={false}
        //             theme={{
        //                 axis: {
        //                     domain: {
        //                         line: {
        //                             stroke: '#a9acbe',
        //                             strokeWidth: 2
        //                         }
        //                     }
        //                 },
        //                 grid: {
        //                     line: {
        //                         stroke: '#e7e8ec',
        //                         strokeWidth: 2
        //                     }
        //                 }
        //             }}
        //             layers={['grid', 'axes', 'bars', 'markers', BarLegend]}
        //             legends={[
        //                 {
        //                     dataFrom: 'keys',
        //                     data: keys.map((id, index) => ({
        //                         color: colors[index],
        //                         id,
        //                         label: id === 'one' ? 1 : 2
        //                     })),
        //                     anchor: 'bottom',
        //                     direction: 'row',
        //                     translateY: 63,
        //                     itemWidth: 80,
        //                     itemHeight: 20,
        //                     itemDirection: 'left-to-right',
        //                     symbolSize: 20
        //                 }
        //             ]}
        //         />
        //     </div>,
        //     this.element
        // );

        return this;
    }

    resize(items) {
        return this;
    }
}

// -------------------------------------------------------------------------------------------------------------------------------
// Exports
// -------------------------------------------------------------------------------------------------------------------------------

export default { NivoVisualiser, React, ReactDOM, ResponsiveBar };
