import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobDataModule } from './jobdata/job-data.module';

const routes: Routes = [
  {
    path:'home',
    loadChildren:() =>
    import('./jobdata/job-data.module').then((m)=> m.JobDataModule)
   
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
