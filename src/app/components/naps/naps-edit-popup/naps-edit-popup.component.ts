import { Component, Inject, OnInit } from '@angular/core';
import { NapsService } from 'src/app/services/naps.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {ShareDataService} from 'src/app/share-data.service';

@Component({
  selector: 'app-naps-edit-popup',
  templateUrl: './naps-edit-popup.component.html',
  styleUrls: ['./naps-edit-popup.component.css']
})
export class NapsEditPopupComponent implements OnInit {
  updateFormValue: any;


  constructor(private service :NapsService ,
    private formBuilder: FormBuilder , private shareData : ShareDataService ,@Inject(MAT_DIALOG_DATA) public editData:any) { }

  ngOnInit(): void {

    this.updateFormValue = this.formBuilder.group({
      id:['',Validators.required],
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
      productLine :['',Validators.required],
      departmentName :['',Validators.required]
    })

    //console.log(this.editData);
    if (this.editData){
      this.updateFormValue.controls['id'].setValue(this.editData.id);
      this.updateFormValue.controls['name'].setValue(this.editData.name);
      this.updateFormValue.controls['departmentClassification'].setValue(this.editData.departmentClassification);
      this.updateFormValue.controls['contractName'].setValue(this.editData.contractName);
      this.updateFormValue.controls['gender'].setValue(this.editData.gender);
      this.updateFormValue.controls['type'].setValue(this.editData.type);
      this.updateFormValue.controls['certificates'].setValue(this.editData.certificates);
      this.updateFormValue.controls['dateOfJoining'].setValue(this.editData.dateOfJoining);
      this.updateFormValue.controls['productGroup'].setValue(this.editData.productGroup);
      this.updateFormValue.controls['plantLocation'].setValue(this.editData.plantLocation);
      this.updateFormValue.controls['primarySkill'].setValue(this.editData.primarySkill);
      this.updateFormValue.controls['additionalSkills'].setValue(this.editData.additionalSkills);
      this.updateFormValue.controls['productLine'].setValue(this.editData.productLine);
      this.updateFormValue.controls['departmentName'].setValue(this.editData.departmentName);
    }
  }

  departments= [
    {value: 'Department One-0', viewValue: 'Department One'},
    {value: 'Department two-1', viewValue: 'Department two'},
    {value: 'Department three-2', viewValue: 'Department three'}
  ];

  updateContractEmployeeData(){
    this.service.updateContractEmployee(this.updateFormValue.value,this.editData.id)
    .subscribe({
      next:(res)=>{
        alert("added");
        this.updateFormValue.reset();
      }
      
    })
  }

}
