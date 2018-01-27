import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AboutComponent } from './components/about/about.component';
import { TeamComponent } from './components/team/team.component';
import { OverviewComponent } from './components/overview/overview.component';

const appRoutes: Routes = [
    {
        path: 'about', component: AboutComponent,
        children: [
            { path: '', redirectTo: 'overview', pathMatch: 'full' },
            { path: 'overview', component: OverviewComponent },
            { path: 'team', component: TeamComponent }
        ]
    },

];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],

})
export class AboutRouteModule { }