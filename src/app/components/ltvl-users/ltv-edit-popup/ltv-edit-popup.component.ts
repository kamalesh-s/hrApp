import { Component, Inject, OnInit } from '@angular/core';
import { LtvlEmployeeService } from 'src/app/services/ltvlEmployeeservice.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {ShareDataService} from 'src/app/share-data.service';

@Component({
  selector: 'app-ltv-edit-popup',
  templateUrl: './ltv-edit-popup.component.html',
  styleUrls: ['./ltv-edit-popup.component.css']
})

export class LtvEditPopupComponent implements OnInit {
  updateFormValue: any;
  getAllLtvlEmployeeData: any;
 // editPostModal: any;

  constructor(private service :LtvlEmployeeService ,
     private formBuilder: FormBuilder , private shareData : ShareDataService ,
     @Inject(MAT_DIALOG_DATA) public editData:any
     ) { }

  ngOnInit(): void {
    // this.updateFormValue = this.formBuilder.group({
    //   updateUserId: [''],
    //   updateTitle: [''],
    //   updateBody: [''],
    // });

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

  departments= [
    {value: 'Department One-0', viewValue: 'Department One'},
    {value: 'Department two-1', viewValue: 'Department two'},
    {value: 'Department three-2', viewValue: 'Department three'}
  ];

  // updateData(value: any) {
  //   let body = {

  //   psNumber: value.psNumber,
  //   name: value.name,
  //   departmentName: value.departmentName,
  //   immediateSupervisorEmployeeName: value.immediateSupervisorEmployeeName,
  //   emailAddress :value.emailAddress,
  //   mobilePhoneNumber :value.mobilePhoneNumber,
  //   plantLocation:value.plantLocation,
    
  //   }

  //   this.service.updateData(body, `622ca8c59f6c668226f74f52`)
  //     .subscribe(response => {
  //       console.log(response)
  //     })
  // }

  // editPostModal(editPost: any){
  //   console.log(editPost.id);
  //   this.editPostModal = editPost;
  // }


  // updatePost() {
  //   const { value } = this.updateFormValue;
  //   const postObj = {

  //     psNumber: value.updatepsNumber,
  //     name: value.updatename,
  //     departmentName: value.updatedepartmentName,
  //     immediateSupervisorEmployeeName: value.updateimmediateSupervisorEmployeeName,
  //     emailAddress :value.updateemailAddress,
  //     mobilePhoneNumber :value.updatemobilePhoneNumber,
  //     plantLocation:value.updateplantLocation
  //   };

  //   this.service
  //     .updateData(postObj, this.editPostModal())
  //     .subscribe((data) => {
  //       console.log(data);
  //     });
  // }


  updateLtvlEmployeeData(){
    this.service.updateLtvlEmployee(this.updateFormValue.value,this.editData.id)
    .subscribe({
      next:(res)=>{
        alert("added");
        this.updateFormValue.reset();
      }
      
    })
  }

}
