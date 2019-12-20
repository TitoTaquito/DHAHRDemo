import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PCDRComponent } from './pcdr/pcdr.component';

const routes: Routes = [
  {path:'employee',component:EmployeeListComponent},
  {path:'pcdr',component:PCDRComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
