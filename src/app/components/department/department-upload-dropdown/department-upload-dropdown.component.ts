import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DepartmentService } from 'src/app/services/department.service';

@Component({
  selector: 'app-department-upload-dropdown',
  templateUrl: './department-upload-dropdown.component.html',
  styleUrls: ['./department-upload-dropdown.component.css']
})
export class DepartmentUploadDropdownComponent implements OnInit {

  addDepartmentDataForm !: FormGroup;
  formValue!: FormGroup;
  posts: any;

  constructor( private service :DepartmentService , private dialog: MatDialog ,private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      id: [''],
      name: [''],
      classification: [''],
      hodName: [''],
    });

    this.addDepartmentDataForm = this.formBuilder.group({
      id :['',Validators.required],
      name :['',Validators.required],
      classification :['',Validators.required],
      hodName :['',Validators.required],
    })
  }

  singleUploadDialog(templateRef: TemplateRef<any>) {
    this.dialog.open(templateRef);
  }

  BulkUploadDialog(templateRef: TemplateRef<any>){
    this.dialog.open(templateRef);
  }



   //ADD DATA
  addDepartment(){
  const { value } = this.formValue;
  console.log(value);
  
  let addDepartmentDataObj = {
    id: value.id,
    name: value.name,
    classification: value.classification,
    hodName: value.hodName
  };
  console.log(addDepartmentDataObj);
  
  this.service.addDepartment(addDepartmentDataObj).subscribe((res) => {
    console.log(res);
    //addLtvlEmployeeDataObj = res.id;
    this.posts.push(addDepartmentDataObj);
    console.log(res);
    this.formValue.reset();
  });
  }
}
