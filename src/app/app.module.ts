import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { 
  MatToolbarModule ,
  MatIconModule, 
  MatButtonModule, 
  MatFormFieldModule, 
  MatInputModule, } 
  from '@angular/material';
import {MatSidenavModule} from '@angular/material/sidenav';
import { EmployeeComponent } from './employee/employee.component';
import { MatDialogModule } from '@angular/material';
import { SalaryComponent } from './salary/salary.component';
import { CompanyComponent } from './company/company.component';
import { CandidateComponent } from './candidate/candidate.component';
import { DepartmentComponent } from './department/department.component';
import { DialogComponent } from './dialog/dialog.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {MatListModule} from '@angular/material/list';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatTableModule } from '@angular/material';
import { DataTableComponent } from './data-table/data-table.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort' ;
@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    SalaryComponent,
    CompanyComponent,
    CandidateComponent,
    DepartmentComponent,
    DialogComponent,
    DashboardComponent,
    DataTableComponent

  ],
  entryComponents:[DialogComponent,],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatRadioModule,
    FormsModule,
    MatListModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
    

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
