import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';

import { DefaultComponent } from './default/default.component';
import { StatusCardComponent } from './status-card/status-card.component';
import { JobDataRoutingModule } from './job-data-routing.module';
import { MaterialModule } from '../material.module';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';





@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    MainComponent,
 
    DefaultComponent,
    StatusCardComponent,
    FooterComponent,
    DashboardComponent

  
  ],
  imports: [
    CommonModule,
    JobDataRoutingModule,
    MaterialModule,
    HttpClientModule
  ]
})
export class JobDataModule { }
