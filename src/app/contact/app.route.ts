import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ContactComponent } from './components/contact/contact.component';
import { AdressComponent } from './components/adress/adress.component';
import { MapComponent } from './components/map/map.component';
import { EvComponent } from './components/ev/ev.component';
import { IsComponent } from './components/is/is.component'

const appRoutes: Routes = [
    {
        path: 'contact', component: ContactComponent,
        children: [
            { path: '', redirectTo: 'adress', pathMatch: 'full' },
            { path: 'adress', component: AdressComponent },
            {
                path: 'map', component: MapComponent,
                children: [
                    { path: '', redirectTo: 'is', pathMatch: 'full' },
                    { path: 'ev', component: EvComponent },
                    {
                        path: 'is', component: IsComponent,
                    }
                ]
            }
        ]
    },

];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],

})
export class ContactRouteModule { }