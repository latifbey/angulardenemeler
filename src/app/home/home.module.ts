import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { HomeRouteModule } from './app.route'

@NgModule({
  imports: [
    CommonModule,
    HomeRouteModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
