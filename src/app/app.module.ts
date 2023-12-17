import { NgModule , LOCALE_ID} from '@angular/core';
import {registerLocaleData} from '@angular/common';
import * as fr from '@angular/common/locales/fr';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FacesnapComponent } from './facesnap/facesnap.component';
import { SnapFaceListComponent } from './snap-face-list/snap-face-list.component';
import { HeaderComponent } from './header/header.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SingleFacesnapComponent } from './single-facesnap/single-facesnap.component';


@NgModule({
  declarations: [
    AppComponent,
    FacesnapComponent,
    SnapFaceListComponent,
    HeaderComponent,
    LandingPageComponent,
    SingleFacesnapComponent,


  ],
  imports: [
BrowserModule,
    AppRoutingModule,



  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'fr-FR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
    registerLocaleData(fr.default)
  }
 }
