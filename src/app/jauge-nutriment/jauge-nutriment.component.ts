import {Component, Input, OnInit} from '@angular/core';
import {Formats} from '../Formats';

@Component({
  selector: 'app-jauge-nutriment',
  templateUrl: './jauge-nutriment.component.html',
  styleUrls: ['./jauge-nutriment.component.css']
})
export class JaugeNutrimentComponent implements OnInit {

  @Input() valeur = 0;
  @Input() max = 100;
  @Input() unite = 'g';
  @Input() backgroundColor = '#e1e1e1';

  constructor() { }

  ngOnInit() {
  }

  formatterValeur(valeur: number): string {
    if (isNaN(valeur)) {
      return undefined;
    }
    return Formats.ingenieur(valeur) + this.unite;
  }

  pourcentage(valeur: number, max: number): string {
    if (isNaN(valeur) || isNaN(max)) {
      return undefined;
    }
    return Math.round(valeur / max * 100) + '%';
  }

  get width(): number {
    return Math.min(this.valeur / this.max, 1) * 100;
  }

}
