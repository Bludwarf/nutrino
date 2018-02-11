import { BrowserModule } from '@angular/platform-browser';
import {Injectable, NgModule} from '@angular/core';


import { AppComponent } from './app.component';
import { AlimentComponent } from './aliment/aliment.component';
import { JaugeNutrimentComponent } from './jauge-nutriment/jauge-nutriment.component';
import {AlimentService} from './aliment.service';
import {HttpClientModule} from '@angular/common/http';

@Injectable()
export class WindowWrapper extends Window {

}

export function getWindow() { return window; }


@NgModule({
  declarations: [
    AppComponent,
    AlimentComponent,
    JaugeNutrimentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    AlimentService,
    {provide: WindowWrapper, useFactory: getWindow} // https://github.com/angular/angular/issues/12631#issuecomment-274260009
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
