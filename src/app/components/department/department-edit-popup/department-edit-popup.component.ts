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
      id :['',Validators.required],
      name :['',Validators.required],
      classification :['',Validators.required],
      hodName :['',Validators.required]
    })

    //console.log(this.editData);
    if (this.editData){
      this.updateFormValue.controls['id'].setValue(this.editData.id);
      this.updateFormValue.controls['name'].setValue(this.editData.name);
      this.updateFormValue.controls['classification'].setValue(this.editData.classification);
      this.updateFormValue.controls['hodName'].setValue(this.editData.hodName);
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
