import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './default/default.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path:'',
    component:DefaultComponent,

     children:[
      //{ path: '', component: HomeComponent },
    
     ]
   
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobDataRoutingModule { }
