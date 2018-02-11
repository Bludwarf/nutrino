import {Injectable} from '@angular/core';
import {Aliment} from './aliment';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {HttpClient} from '@angular/common/http';
import {catchError, tap, map} from 'rxjs/operators';

@Injectable()
export class AlimentService {

  /** Correspondance nutrient.nutrient_id -> index dans nutriments */
  public static NUTRIENT_CODES = {
    203: 'proteine',
    204: 'lipide', // Total lipid (fat)
    // 606 : Fatty acids, total saturated
    // 607 :  4:0 (group: Lipids)
    // 608 :  6:0 (group: Lipids)
    // 609 :  8:0 (group: Lipids)
    // 610 : 10:0 (group: Lipids)
    // 611 : 12:0 (group: Lipids)
    // 612 : 14:0 (group: Lipids)
    // 613 : 16:0 (group: Lipids)
    // 614 : 18:0 (group: Lipids)
    // 645 : Fatty acids, total monounsaturated
    // 626 : 16:1 undifferentiated (group: Lipids)
    // 617 : ...
    // ... (23 results)
    205: 'glucide',
    208: 'cal',
    209: 'amidon',
    269: 'sucre',
    291: 'fibre',
    305: 'phosphore',
    306: 'potassium',
    401: 'C', // Vitamin C, total ascorbic acid
    404: 'B1', // Thiamin
    405: 'B2', // Riboflavin
    // 4: 'B3', //
    // 4: 'B5', //
    415: 'B6', // Vitamin B-6
    431: 'B9', // Folic acid
    418: 'B12', // Vitamin B-12
    430: 'K', // Vitamin K (phylloquinone)
    320: 'A', // Vitamin A, RAE
    323: 'E', // Vitamin E (alpha-tocopherol)
    324: 'D', // Vitamin D
    // 328: 'D', // Vitamin D (D2 + D3)
  };

  public static UNIT_VALUES = {
    'µg': 1e-6,
    'mg': 1e-3,
    'g': 1,
    'kcal': 1e3
  };

  private url = 'https://api.nal.usda.gov/ndb/V2/reports';  // URL to web api
  private api_key = 'jTRtuVLTbE5Y0xNIDnFXspXhfysU2iisv9gZa55V';

  private banana: Aliment = {
    nom: 'Banane',
    nutriments: {
      calorie: 72.3e3,
      glucide: 15.2,
      amidon: 0.36,
      sucre: 14.8,
      fibre: 1.9,
      proteine: 0.98,
      lipide: 0.25,

      B1: 0.035e-3,
      B2: 0.049e-3,
      B3: 0.68e-3,
      B5: 0.3e-3,
      B6: 0.38e-3,
      B9: 0.029e-3,
      B12: 0,
      C: 2.07e-3, // nutritionix [401] : 8.7mg comme Google comme https://ndb.nal.usda.gov/ndb/foods/show/2159
      // comme http://vegecru.com/banane
      // mais 6.54 pour http://www.aprifel.com/fiche-nutri-produit-analyse-banane,24.html
      D: 0,
      E: 0.33e-3,
      K: 0.5e-6,

      phosphore: 24.7e-3,
      potassium: 360e-3
    },
    poidsUnitaire: 100// TODO remettre à 75 après les tests
  };

  private epinard: Aliment = {
    nom: 'Épinard',
    nutriments: {
      calorie: 23,
      lipide: 0.4,
      sature: 0.1,
      A: 469e-6,
      B6: 0.2e-3,
      C: 28.1e-3,
      K: 483e-6,
      potassium: 558e-3,
      // magnesium: 79e-3 // TODO
    },
    poidsUnitaire: 100
  };

  constructor(
    private http: HttpClient) {
  }

  getAliment(nom: string): Observable<Aliment> {

    const thisService = this;

    const ndbno = '09040';
    const url = `${this.url}/?ndbno=${ndbno}&type=f&format=json&api_key=${this.api_key}`;
    return this.http.get<any>(url).pipe(
      tap(_ => thisService.log(`fetched aliment id=${ndbno}`)),

      // TODO : on dirait que cet opérateur provoque l'affichage de la page avant la fin du calcul
      map<any, Aliment>(res => {

        const aliment = thisService.banana;

        const nutrients = res.foods[0].food.nutrients;
        nutrients.forEach(nutrient => {
          const champNutriment = AlimentService.NUTRIENT_CODES[nutrient.nutrient_id];
          if (champNutriment) {
            const unitValue = AlimentService.UNIT_VALUES[nutrient.unit];
            if (!unitValue) {
              // TODO erreur unité inconnue
            }
            aliment.nutriments[champNutriment] = nutrient.value * unitValue;
          }
        });

        return aliment;
      }),
      catchError(this.handleError<any>(`aliment ndbno=${ndbno}`))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      // this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    // this.messageService.add('HeroService: ' + message);
    console.log('message: ' + message);
  }

}
