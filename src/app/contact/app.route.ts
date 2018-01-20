import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ContactComponent } from './components/contact/contact.component'
const appRoutes: Routes = [
    { path: 'contact', component: ContactComponent },

];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],

})
export class ContactRouteModule { }