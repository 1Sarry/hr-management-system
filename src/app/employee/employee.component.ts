import { Component, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
// import {MatPaginator} from '@angular/material/paginator';
// import {MatTableDataSource} from '@angular/material/table';
// import { DataSource } from '@angular/cdk/table';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  
constructor(public dialog: MatDialog) {
  }
  
  ngOnInit() {
  }

  opened =false;
  openDialog() {
    this.dialog.open(DialogComponent, {
     width:'40%'
    });
  }
 




}


