/**
 * Valeurs en g
 *
 * @see https://fr.wikipedia.org/wiki/Mod%C3%A8le:Infobox_Valeur_nutritionnelle
 */
export class Nutriments {

  calorie?: number;
  proteine?: number;
  lipide?: number;
  sature?: number;
  glucide?: number;
  amidon?: number; // sous glucide
  sucre?: number; // sous glucide
  fibre?: number; // sous glucide : http://www.1001-fruits.com/fibres-alimentaires.html
  sel?: number;

  // VITAMINES

  /**
   * 1 UI d'Insuline : l'équivalent biologique d'environ 0,0347 mg d'insuline humaine1
   1 UI de Vitamine A : l'équivalent biologique de 0,3 μg de rétinol, ou de 0,6 μg de β-carotène
   1 UI de Vitamine C : est de 50 μg d'acide ascorbique lévogyre
   1 UI de Vitamine D : l'équivalent biologique de 0,025 μg de cholécalciférol / ergocalciférol
   1 UI de Vitamine E : l'équivalent biologique d'environ 0,667 milligrammes de d-alpha-tocophérol (²⁄₃ mg exactement)
     ou de 1 mg de dl-alpha-tocophérol acétate
   */

  A?: number;
  B1?: number;
  B2?: number;
  B3?: number;
  B5?: number;
  B6?: number;
  B8?: number;
  B9?: number;
  B12?: number;
  C?: number;
  D?: number;
  E?: number;
  K?: number;

  phosphore?: number;
  potassium?: number;
}
