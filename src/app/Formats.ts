export class Formats {
  static ingenieur(valeur: number): string {

    if (isNaN(valeur)) {
      return undefined;
    }
    if (valeur === 0) {
      return '0';
    }

    const units = {
      '-3': 'n',
      '-2': 'µ',
      '-1': 'm',
      '0': '',
      'Infinity': '',
      '-Infinity': '',
      '1': 'k'
    };

    const rang = Math.floor(Math.log10(valeur) / 3); // TODO -1000 < valeur && valeur < 1000
    let unit = rang ? units[rang] : '';
    if (unit === undefined) {
      console.error('Unité inconnue pour l\'exposant ' + rang);
      unit = '?';
    }

    const num = +(valeur / Math.pow(10, rang * 3)).toFixed(3); // pour éviter les imprécisions du float
    const numDigits = Math.floor(Math.log10(num)) + 1;
    const signif = rang ? (numDigits % 3 ? num.toFixed(3 - numDigits % 3) : num) : Math.round(num);

    return signif + unit;
  }
}
