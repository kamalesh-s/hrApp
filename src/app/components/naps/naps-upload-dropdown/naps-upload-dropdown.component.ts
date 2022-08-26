import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { NapsService } from 'src/app/services/naps.service';

@Component({
  selector: 'app-naps-upload-dropdown',
  templateUrl: './naps-upload-dropdown.component.html',
  styleUrls: ['./naps-upload-dropdown.component.css']
})
export class NapsUploadDropdownComponent implements OnInit {

  addEmployeeDataForm !: FormGroup;
  formValue!: FormGroup;
  posts: any;
  getAllLtvlEmployeeData: any;

  constructor(private  dialog:MatDialog , private service :NapsService , private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      name: [''],
      departmentClassification: [''],
      contractName: [''],
      gender: [''],
      type: [''],
      certificates :[''],
      dateOfJoining :[''],
      productGroup:[''],
      plantLocation:[''],
      primarySkill:[''],
      additionalSkills:[''],
      departmentName:[''],
      productLine:[''],
      id:[''],
      departmentId:[''],
      productKey:['']
    });

    this.addEmployeeDataForm = this.formBuilder.group({
      name :['',Validators.required],
      departmentClassification :['',Validators.required],
      contractName :['',Validators.required],
      gender :['',Validators.required],
      type :['',Validators.required],
      certificates :['',Validators.required],
      dateOfJoining :['',Validators.required],
      productGroup :['',Validators.required],
      plantLocation :['',Validators.required],
      primarySkill :['',Validators.required],
      additionalSkills :['',Validators.required],
      departmentName :['',Validators.required],
      productLine :['',Validators.required],
      id :['',Validators.required],
      departmentId :['',Validators.required],
      productKey:['',Validators.required]
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
addContractEmployee(){
  const { value } = this.formValue;
  console.log(value);
  
  let addContractEmployeeDataObj = {
    name: value.name,
    departmentClassification: value.departmentClassification,
    contractName: value.contractName,
    gender :value.gender,
    type :value.type,
    certificates:value.certificates,
    dateOfJoining:value.dateOfJoining,
    productGroup:value.productGroup,
    plantLocation:value.plantLocation,
    primarySkill:value.primarySkill,
    additionalSkills:value.additionalSkills,
    departmentName:value.departmentName,
    productLine:value.productLine,
    id:value.id,
    departmentId:value.departmentId,
    productKey:value.productKey
    
  };
  console.log(addContractEmployeeDataObj);
  
  this.service.addContractEmployee(addContractEmployeeDataObj).subscribe((res) => {
    console.log(res);
    //addLtvlEmployeeDataObj = res.id;
    this.posts.push(addContractEmployeeDataObj);
    console.log(res);
    this.formValue.reset();
  });
  
  
   //this.getAllLtvlEmployeeData();
  }
 

}
