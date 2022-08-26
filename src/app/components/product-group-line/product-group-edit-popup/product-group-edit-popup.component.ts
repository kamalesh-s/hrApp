import { Component, Inject, OnInit } from '@angular/core';
import { ProductGroupService } from 'src/app/services/product-group-.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {ShareDataService} from 'src/app/share-data.service';

@Component({
  selector: 'app-product-group-edit-popup',
  templateUrl: './product-group-edit-popup.component.html',
  styleUrls: ['./product-group-edit-popup.component.css']
})

export class ProductGroupEditPopupComponent implements OnInit {
  updateFormValue: any;
  constructor(private service :ProductGroupService ,
    private formBuilder: FormBuilder , private shareData : ShareDataService ,
    @Inject(MAT_DIALOG_DATA) public editData:any) { }

  ngOnInit(): void {

    this.updateFormValue = this.formBuilder.group({
      productGroup :['',Validators.required],
      productLine :['',Validators.required],
      supervisorEmployeeName :['',Validators.required],
      supervisorEmployeeId :['',Validators.required]
    })

    //console.log(this.editData);
    if (this.editData){
      this.updateFormValue.controls['productGroup'].setValue(this.editData.productGroup);
      this.updateFormValue.controls['productLine'].setValue(this.editData.productLine);
      this.updateFormValue.controls['supervisorEmployeeName'].setValue(this.editData.supervisorEmployeeName);
      this.updateFormValue.controls['supervisorEmployeeId'].setValue(this.editData.supervisorEmployeeId);
    }
  }

  updateProduct(){
    this.service.updateProductGroup(this.updateFormValue.value,this.editData.id)
    .subscribe({
      next:(res)=>{
        alert("added");
        this.updateFormValue.reset();
      }
      
    })
  }
}
