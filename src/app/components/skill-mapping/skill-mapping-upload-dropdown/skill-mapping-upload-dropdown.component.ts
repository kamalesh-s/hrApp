import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { LtvlEmployeeService } from 'src/app/services/ltvlEmployeeservice.service';


@Component({
  selector: 'app-skill-mapping-upload-dropdown',
  templateUrl: './skill-mapping-upload-dropdown.component.html',
  styleUrls: ['./skill-mapping-upload-dropdown.component.css']
})
export class SkillMappingUploadDropdownComponent implements OnInit {

  addEmployeeDataForm !: FormGroup;
  formValue!: FormGroup;
  posts: any;

  constructor(private  dialog:MatDialog , private service :LtvlEmployeeService , private formBuilder : FormBuilder) { }

  ngOnInit(): void {

    this.formValue = this.formBuilder.group({
      userId: [''],
      psNumber: [''],
      name: [''],
      departmentName: [''],
      immediateSupervisorEmployeeName: [''],
      emailAddress :[''],
      mobilePhoneNumber :[''],
      plantLocation:[''],
    });

    this.addEmployeeDataForm = this.formBuilder.group({
      name :['',Validators.required],
      psNumber :['',Validators.required],
      emailAddress :['',Validators.required],
      mobilePhoneNumber :['',Validators.required],
      immediateSupervisorEmployeeName :['',Validators.required],
      plantLocation :['',Validators.required],
      departmentName :['',Validators.required]
    })
  }

  singleUploadDialog(templateRef: TemplateRef<any>) {
    this.dialog.open(templateRef);
  }

  BulkUploadDialog(templateRef: TemplateRef<any>){
    this.dialog.open(templateRef);
  }

  departments= [
    {value: 'Department One-0', viewValue: 'Department One'},
    {value: 'Department two-1', viewValue: 'Department two'},
    {value: 'Department three-2', viewValue: 'Department three'}
  ];

}
