import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AboutComponent } from './components/about/about.component'
const appRoutes: Routes = [
    { path: 'about', component: AboutComponent },

];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],

})
export class AboutRouteModule { }