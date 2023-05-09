import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { CompanyComponent } from './company/company.component';
import { SalaryComponent } from './salary/salary.component';
import { CandidateComponent } from './candidate/candidate.component';
import { DepartmentComponent } from './department/department.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path:'', redirectTo: 'employee', pathMatch: 'full' },
  {path:'dashboard', component:DashboardComponent },
  {path:'company', component: CompanyComponent },
  {path:'employee', component: EmployeeComponent },
  {path:'department', component:DepartmentComponent },
  {path:'salary', component:SalaryComponent },
  {path:'candidate', component:CandidateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
