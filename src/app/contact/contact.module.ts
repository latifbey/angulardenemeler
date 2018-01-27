import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ContactComponent } from './components/contact/contact.component';
import { ContactRouteModule } from './app.route';
import { AdressComponent } from './components/adress/adress.component';
import { MapComponent } from './components/map/map.component';
import { EvComponent } from './components/ev/ev.component';
import { IsComponent } from './components/is/is.component'
@NgModule({
  imports: [
    CommonModule,
    ContactRouteModule,
    RouterModule
  ],
  declarations: [ContactComponent, AdressComponent, MapComponent, EvComponent, IsComponent]
})
export class ContactModule { }
