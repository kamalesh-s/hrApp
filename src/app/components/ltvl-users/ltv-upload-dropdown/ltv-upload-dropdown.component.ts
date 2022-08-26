import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { LtvlEmployeeService } from 'src/app/services/ltvlEmployeeservice.service';
import { LtvEditPopupComponent } from '../ltv-edit-popup/ltv-edit-popup.component';
import { LtvViewPopupComponent } from '../ltv-view-popup/ltv-view-popup.component';

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
      departmentId:['']
    });

    this.addEmployeeDataForm = this.formBuilder.group({
      name :['',Validators.required],
      psNumber :['',Validators.required],
      emailAddress :['',Validators.required],
      mobilePhoneNumber :['',Validators.required],
      immediateSupervisorEmployeeName :['',Validators.required],
      plantLocation :['',Validators.required],
      departmentName :['',Validators.required],
      departmentId :['',Validators.required]
    })

  }

  singleUploadDialog(templateRef: TemplateRef<any>) {
    this.dialog.open(templateRef);
  }

  BulkUploadDialog(templateRef: TemplateRef<any>){
    this.dialog.open(templateRef);
  }

  departments= [
    {value: 'Department One', viewValue: 'Department One'},
    {value: 'Department two', viewValue: 'Department two'},
    {value: 'Department three', viewValue: 'Department three'}
  ];


  //   addLtvlEmployee(){
  //    //console.log(this.formValue.value);
  //   if(this.formValue.valid){
  //   this.service.addLtvlEmployee(this.formValue.value)
  //   // .subscribe((res) =>{
  //   //   console.log("completedd");
  //   // })
  //   .subscribe({
  //     next:(res)=>{
  //       this.dialog.open(LtvEditPopupComponent)
  //       alert("product added")
  //     },
     
  //     //  error:()=>{
  //     //    alert("error")
  //     //  }
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
    departmentId : value.departmentId
  };
  console.log(addLtvlEmployeeDataObj);
  
  this.service.addLtvlEmployee(addLtvlEmployeeDataObj).subscribe((res) => {
    // console.log(res);
    // //addLtvlEmployeeDataObj = res.id;
     this.posts.push(addLtvlEmployeeDataObj);
    // console.log(res);
    // console.log("completed...");
    this.formValue.reset();
  });
  }
 
  download() {
    this.service.download()//.subscribe((response) => {
      //this.msg = response['msg'];
      
   // });
  }
  
  uploadFile = (files: any) => {
    this.service.uploadFile(files)//.subscribe((response) => {
      //this.msg = response['msg'];
      
   // });
  }

  // addLtvlEmployeeData(data:any){
  //   console.log(data)
  //   this.service.addLtvlEmployee(data).subscribe((result)=>{
  //     console.log(result)
  //   })

  //}

}
