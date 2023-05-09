import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  genderOptions =["Male", "Female"];
  employeeForm : FormGroup;

  constructor( private formBuilder : FormBuilder) { }

  ngOnInit() {
    this.employeeForm = this.formBuilder.group({
      fullName:'',
      idNumber:'',
      birthDate:'',
      positionName: '',
      hireDate:''
    })
  }

  addEmployee(){
    console.log(this.employeeForm.value)
    console.log("test")
  }
}
