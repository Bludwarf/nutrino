import {Ajr} from './ajr';

export class AjrEurope extends Ajr {

  constructor() {
    super();
    this.nutriments = {
      A: 800e-6,
      C: 80e-3,
      B1: 1.1e-3,
      B2: 1.4e-3,
      B3: 16e-3,
      B5: 6e-3,
      B6: 1.4e-3,
      B8: 50e-6,
      B9: 200e-6,
      B12: 2.5e-6,
      D: 5e-6, // D3 précisément
      E: 12e-3,
      K: 75e-6,
      phosphore: 0.7,
      potassium: 2,

      // Apports de Référence
      calorie: 2e6,
      lipide: 70,
      sature: 20,
      glucide: 260, // Apports de Référence
      sucre: 90, // Apports de Référence
      sel: 6,

      // TODO aucune source officielle
      fibre: 30, // source http://www.passeportsante.net/fr/Actualites/Dossiers/DossierComplexe.aspx?doc=8-aliments-riches-fibres
      proteine: 60, // 50 pour une femme
    };
  }
}
