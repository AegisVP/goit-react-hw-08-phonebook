export const theme = {
  colors: {
    defaultText: '#000000',
    mediumText: '#555555',
    accentText: '#ffee55',
    inverseText: '#ffffff',
    secondBackground: '#f0f0f0',
    pageBackground: '#ffffff',
    pageBackgroundAccent: '#88bbff',
    buttonColor: '#80b3f0',
    buttonColorAccent: '#90c3cff',
    buttonColorActive: '#ffee55',
  },
  fontSizes: {
    s: '12px',
    m: '16px',
    l: '24px',
    xl: '36px',
    xxl: '58px',
    xxxl: '96px',
  },
  fontWeights: {
    normal: 400,
    bold: 700,
  },
  spacing: [0, 5, 10, 20, 40, 80, 160, 320, 640],
  radii: {
    none: 0,
    normal: '5px',
    large: '10px',
    round: '50%',
  },
  mp: returnParams,
};

function returnParams(...sizes) {
  if (sizes.length === 0) return;

  const resultArray = [];

  for (const size of sizes) {
    let index = size;

    if (index === 0) {
      resultArray.push('0');
    } else if (index > 0) {
      if (index >= this.spacing.length) index = this.spacing.length;
      resultArray.push(`${this.spacing[index]}px`);
    } else if (index < 0) {
      index = index * -1;
      if (index >= this.spacing.length) index = this.spacing.length;
      resultArray.push(`-${this.spacing[index]}px`);
    } else if (index === 'auto') {
      resultArray.push('auto');
    }
  }

  return resultArray.join(' ');
}
