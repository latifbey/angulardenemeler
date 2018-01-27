import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { ArabaComponent } from './components/araba/araba.component';
import { OdalarComponent } from './components/odalar/odalar.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent,
    children: [
        { path: '', redirectTo: 'araba', pathMatch: 'full' },
        { path: 'odalar', component: OdalarComponent },
        { path: 'araba', component: ArabaComponent }
    ] },

];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],

})
export class HomeRouteModule { }