/**
 * @author Jonathan Terrell <jonathan.terrell@springbrook.es>
 * @copyright Copyright (c) 2019-2021 Springbrook S.L.
 * @license "Apache-2.0"
 */
import { ChartJSVisualiser } from './ChartJS';
declare const ChartJS: {
    ChartJSVisualiser: typeof ChartJSVisualiser;
    getColour: (paletteId: string, index: number) => string;
    palettes: Record<string, string[]>;
};
export { ChartJS };
