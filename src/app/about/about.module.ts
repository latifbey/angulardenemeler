import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { AboutRouteModule } from './app.route';
import { TeamComponent } from './components/team/team.component';
import { OverviewComponent } from './components/overview/overview.component';

@NgModule({
  imports: [
    CommonModule,
    AboutRouteModule,
    RouterModule
  ],
  declarations: [AboutComponent, TeamComponent, OverviewComponent]
})
export class AboutModule { }
