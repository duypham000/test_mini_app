// atm only supported input is `#ffffff` format hex
export const hexToRgbA = (colour: string, alpha = 1): string => {
  if (colour.includes('rgba')) {
    const colourSplit = colour.split(',');
    colourSplit[3] = '0)';
    return colourSplit.join(',');
  }
  return `rgba(${hexToRgb(colour)},${alpha})`;
};

export const hexToRgb = (colour: string): string => {
  const r = parseInt(colour.slice(1, 3), 16);
  const g = parseInt(colour.slice(3, 5), 16);
  const b = parseInt(colour.slice(5, 7), 16);
  return `${r},${g},${b}`;
};

// Calculates an intermediate color with value between 0 - 1
// Calculates an intermediate color with value between 0 - 1
export default function calculateMidColor(
  minColor: any,
  maxColor: any,
  value: any,
  alpha = 1
): string {
  const rgb1 = parseColor(minColor);
  const rgb2 = parseColor(maxColor);

  const hsl1 = rgbToHsl(rgb1[0], rgb1[1], rgb1[2]);
  const hsl2 = rgbToHsl(rgb2[0], rgb2[1], rgb2[2]);

  const hsli = [
    hsl1[0] + value * (hsl2[0] - hsl1[0]),
    hsl1[1] + value * (hsl2[1] - hsl1[1]),
    hsl1[2] + value * (hsl2[2] - hsl1[2]),
  ];

  const color = hslToRgb(hsli[0], hsli[1], hsli[2]);
  return (
    'rgba(' +
    Math.round(color[0]) +
    ',' +
    Math.round(color[1]) +
    ',' +
    Math.round(color[2]) +
    ',' +
    alpha +
    ')'
  );
}

// Parse color string: doesn't support named colors, doesn't return alpha channel
function parseColor(hex: any) {
  let parts;
  const color = hex.replace(/\s\s*/g, ''); // Remove all spaces

  if ((parts = /^#([\da-fA-F]{2})([\da-fA-F]{2})([\da-fA-F]{2})/.exec(color)))
    parts = [
      parseInt(parts[1], 16),
      parseInt(parts[2], 16),
      parseInt(parts[3], 16),
    ];
  else if ((parts = /^#([\da-fA-F])([\da-fA-F])([\da-fA-F])/.exec(color)))
    parts = [
      parseInt(parts[1], 16) * 17,
      parseInt(parts[2], 16) * 17,
      parseInt(parts[3], 16) * 17,
    ];
  else if (
    (parts = /^rgba\(([\d]+),([\d]+),([\d]+),([\d]+|[\d]*.[\d]+)\)/.exec(color))
  )
    parts = [+parts[1], +parts[2], +parts[3]];
  //, +parts[4]];
  else if ((parts = /^rgb\(([\d]+),([\d]+),([\d]+)\)/.exec(color)))
    parts = [+parts[1], +parts[2], +parts[3]];
  else throw Error(color + ' is not supported by $.parseColor');

  return parts.slice(0, 3);
}

// Converts HSL to RGB
export function hslToRgb(h: any, s: any, l: any) {
  let r, g, b;

  if (s == 0) {
    r = g = b = l; // achromatic
  } else {
    const hue2rgb = function (p1: any, q1: any, t: any) {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p1 + (q1 - p1) * 6 * t;
      if (t < 1 / 2) return q1;
      if (t < 2 / 3) return p1 + (q1 - p1) * (2 / 3 - t) * 6;
      return p1;
    };

    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}

// Converts RGB to HSL
function rgbToHsl(r: any, g: any, b: any) {
  const red = r / 255;
  const green = g / 255;
  const blue = b / 255;
  const max = Math.max(red, green, blue);
  const min = Math.min(red, green, blue);
  let h = 0,
    s;
  const l = (max + min) / 2;

  if (max == min) {
    h = s = 0; // achromatic
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case red:
        h = (green - blue) / d + (green < blue ? 6 : 0);
        break;
      case green:
        h = (blue - red) / d + 2;
        break;
      case blue:
        h = (red - green) / d + 4;
        break;
      default:
        break;
    }
    h /= 6;
  }

  return [h, s, l];
}
