/**
 * @author Jonathan Terrell <jonathan.terrell@springbrook.es>
 * @copyright Copyright (c) 2019-2021 Springbrook S.L.
 * @license "Apache-2.0"
 */
declare const ChartJS: {
    getColour: (paletteId: string, index: number) => string;
    palettes: Record<string, string[]>;
};
export { ChartJS };
