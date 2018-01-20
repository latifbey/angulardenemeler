import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component'
const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },

];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],

})
export class HomeRouteModule { }