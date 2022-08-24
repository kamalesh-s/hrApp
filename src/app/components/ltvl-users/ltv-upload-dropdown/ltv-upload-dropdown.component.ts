import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { LtvlEmployeeService } from 'src/app/services/ltvlEmployeeservice.service';

@Component({
  selector: 'app-ltv-upload-dropdown',
  templateUrl: './ltv-upload-dropdown.component.html',
  styleUrls: ['./ltv-upload-dropdown.component.css']
})
export class LtvUploadDropdownComponent implements OnInit {

  addEmployeeDataForm !: FormGroup;
  formValue!: FormGroup;
  posts: any;
  getAllLtvlEmployeeData: any;

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

  // addLtvlEmployeeData(){
  //   // console.log(this.addEmployeeDataForm.value);
  //   if(this.addEmployeeDataForm.valid){
  //   this.service.addLtvlEmployee(this.addEmployeeDataForm.value)
  //   .subscribe({
  //     next:(res)=>{
  //       alert("product added")
  //     },
  //     // error:()=>{
  //     //   alert("error")
  //     // }
  //   })
  // }
  // }

    //ADD DATA
 addLtvlEmployee(){
  const { value } = this.formValue;
  console.log(value);
  
  let addLtvlEmployeeDataObj = {
    psNumber: value.psNumber,
    name: value.name,
    departmentName: value.departmentName,
    immediateSupervisorEmployeeName: value.immediateSupervisorEmployeeName,
    emailAddress :value.emailAddress,
    mobilePhoneNumber :value.mobilePhoneNumber,
    plantLocation:value.plantLocation,
  };
  console.log(addLtvlEmployeeDataObj);
  
  this.service.addLtvlEmployee(addLtvlEmployeeDataObj).subscribe((res) => {
    console.log(res);
    //addLtvlEmployeeDataObj = res.id;
    this.posts.push(addLtvlEmployeeDataObj);
    console.log(res);
    this.formValue.reset();
  });
  }
 

  // addLtvlEmployeeData(data:any){
  //   console.log(data)
  //   this.service.addLtvlEmployee(data).subscribe((result)=>{
  //     console.log(result)
  //   })

  //}

}
