import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from './home/components/home/home.component';
import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';
import { AboutComponent } from './about/components/about/about.component';
import { ContactModule } from './contact/contact.module';
import { MainComponent } from './components/main/main.component';

@NgModule({
  declarations: [
    
  MainComponent],
  imports: [
    BrowserModule,
    HomeModule,
    AboutModule,
    ContactModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
