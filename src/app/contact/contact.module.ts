import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './components/contact/contact.component';
import { ContactRouteModule } from './app.route'
@NgModule({
  imports: [
    CommonModule,
    ContactRouteModule
  ],
  declarations: [ContactComponent]
})
export class ContactModule { }
