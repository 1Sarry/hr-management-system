import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { EmployeeComponent } from './employee/employee.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hr-management-system';

  constructor(private dialog: MatDialog) {}

  openEmp() {
    this.dialog.open(EmployeeComponent)
    console.log('clicked')
  }
}
