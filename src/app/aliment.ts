import {Nutriments} from './nutriments';

export class Aliment {
  nom: string;
  nutriments: Nutriments;

  /** Poids mangeable pour une unité de l'aliment (g) */
  poidsUnitaire?: number;
}
