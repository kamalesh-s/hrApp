import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ProductGroupService } from 'src/app/services/product-group-.service';

@Component({
  selector: 'app-product-upload-dropdown',
  templateUrl: './product-upload-dropdown.component.html',
  styleUrls: ['./product-upload-dropdown.component.css']
})
export class ProductUploadDropdownComponent implements OnInit {

  addEmployeeDataForm !: FormGroup;
  formValue!: FormGroup;
  posts: any;
  constructor(private dialog : MatDialog ,private formBuilder : FormBuilder , private service :ProductGroupService) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      productGroup: [''],
      productLine: [''],
      supervisorEmployeeName: [''],
      supervisorEmployeeId: ['']
    });

    this.addEmployeeDataForm = this.formBuilder.group({
      productGroup :['',Validators.required],
      productLine :['',Validators.required],
      supervisorEmployeeName :['',Validators.required],
      supervisorEmployeeId :['',Validators.required]
    })
  }

  singleUploadDialog(templateRef: TemplateRef<any>) {
    this.dialog.open(templateRef);
  }

  BulkUploadDialog(templateRef: TemplateRef<any>){
    this.dialog.open(templateRef);
  }

  //ADD DATA
  addProduct(){
  const { value } = this.formValue;
  console.log(value);
  
  let addLtvlEmployeeDataObj = {
    productGroup: value.productGroup,
    productLine: value.productLine,
    supervisorEmployeeName: value.supervisorEmployeeName,
    supervisorEmployeeId : value.supervisorEmployeeId
    
  };
  console.log(addLtvlEmployeeDataObj);
  
  this.service.addProductGroup(addLtvlEmployeeDataObj).subscribe((res) => {
    console.log(res);
    //addLtvlEmployeeDataObj = res.id;
    this.posts.push(addLtvlEmployeeDataObj);
    console.log(res);
    console.log("completed...");
    this.formValue.reset();
  });
  }

}
