import { Component, OnInit } from '@angular/core';
import {Aliment} from '../aliment';
import {AjrEurope} from '../ajrEurope';
import {Ajr} from '../ajr';
import {Formats} from '../Formats';
import {AlimentService} from '../aliment.service';

@Component({
  selector: 'app-aliment',
  templateUrl: './aliment.component.html',
  styleUrls: ['./aliment.component.css']
})
export class AlimentComponent implements OnInit {

  ajr: Ajr = new AjrEurope();

  aliment = undefined;

  Object = Object; // https://stackoverflow.com/a/45880507/1655155

  constructor(private alimentService: AlimentService) {}

  ngOnInit() {
    this.alimentService.getAliment('Banane').subscribe(aliment => this.aliment = aliment);
  }

  /**
   * Poids nécessaire d'aliment pour atteindre les 100% des AJR sur un nutriment donné
   */
  poids100pAjr(qteAliment: number, qteAjr: number): number {
    if (qteAliment === undefined || qteAliment === undefined) {
      return undefined;
    }
    return qteAjr / qteAliment * 100;
  }

  /**
   * Poids nécessaire d'aliment pour atteindre les 100% des AJR sur un nutriment donné
   */
  formatterPoids(poids: number): string {
    return poids === undefined ? '-' : Formats.ingenieur(poids) + 'g';
  }

  /**
   *
   * @param {number} ratio entre 0 et 1
   * @return {string}
   */
  formatterPourcent(ratio: number): string {
    return (ratio * 100).toFixed(0) + '%';
  }

  getVitaminesPresentes(aliment: Aliment): string[] {
    const all = ['A', 'C', 'D', 'E', 'K', 'B1', 'B2', 'B3', 'B5', 'B6', 'B8', 'B9', 'B12'];
    return all;
  }

}
