import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { HomeRouteModule } from './app.route';
import { ArabaComponent } from './components/araba/araba.component';
import { OdalarComponent } from './components/odalar/odalar.component'

@NgModule({
  imports: [
    CommonModule,
    HomeRouteModule,
    RouterModule
  ],
  declarations: [HomeComponent, ArabaComponent, OdalarComponent]
})
export class HomeModule { }
