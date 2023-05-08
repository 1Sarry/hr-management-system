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
  MatInputModule } 
  from '@angular/material';
import {MatSidenavModule} from '@angular/material/sidenav';
import { EmployeeComponent } from './employee/employee.component';
import { MatDialogModule } from '@angular/material';
import { SalaryComponent } from './salary/salary.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    SalaryComponent
  ],
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
    MatInputModule
    

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
