import { Component, Inject, OnInit } from '@angular/core';
import { DepartmentService } from 'src/app/services/department.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-department-edit-popup',
  templateUrl: './department-edit-popup.component.html',
  styleUrls: ['./department-edit-popup.component.css']
})
export class DepartmentEditPopupComponent implements OnInit {
  updateFormValue: any;

  constructor( private service :DepartmentService ,
     private formBuilder: FormBuilder , @Inject(MAT_DIALOG_DATA) public editData:any ) { }

  ngOnInit(): void {

    this.updateFormValue = this.formBuilder.group({
      name :['',Validators.required],
      psNumber :['',Validators.required],
      emailAddress :['',Validators.required],
      mobilePhoneNumber :['',Validators.required],
      immediateSupervisorEmployeeName :['',Validators.required],
      plantLocation :['',Validators.required],
      departmentName :['',Validators.required]
    })

    //console.log(this.editData);
    if (this.editData){
      this.updateFormValue.controls['name'].setValue(this.editData.name);
      this.updateFormValue.controls['psNumber'].setValue(this.editData.psNumber);
      this.updateFormValue.controls['emailAddress'].setValue(this.editData.emailAddress);
      this.updateFormValue.controls['mobilePhoneNumber'].setValue(this.editData.mobilePhoneNumber);
      this.updateFormValue.controls['immediateSupervisorEmployeeName'].setValue(this.editData.immediateSupervisorEmployeeName);
      this.updateFormValue.controls['plantLocation'].setValue(this.editData.plantLocation);
      this.updateFormValue.controls['departmentName'].setValue(this.editData.departmentName);
    }
  }

  updateDepartment(){
    this.service.updateDepartment(this.updateFormValue.value,this.editData.id)
    .subscribe({
      next:(res)=>{
        alert("added");
        this.updateFormValue.reset();
      }
      
    })
  }

}
