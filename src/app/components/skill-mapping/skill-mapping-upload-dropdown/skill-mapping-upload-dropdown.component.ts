import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { SkillMappingService } from 'src/app/services/skill-mapping.service';


@Component({
  selector: 'app-skill-mapping-upload-dropdown',
  templateUrl: './skill-mapping-upload-dropdown.component.html',
  styleUrls: ['./skill-mapping-upload-dropdown.component.css']
})
export class SkillMappingUploadDropdownComponent implements OnInit {

  addEmployeeDataForm !: FormGroup;
  formValue!: FormGroup;
  posts: any;

  constructor(private  dialog:MatDialog , private service :SkillMappingService , private formBuilder : FormBuilder) { }

  ngOnInit(): void {

    this.formValue = this.formBuilder.group({
      productGroup: [''],
      productLine: [''],
      skillName: [''],
      skillId:['']
    });

    this.addEmployeeDataForm = this.formBuilder.group({
      productGroup :['',Validators.required],
      productLine :['',Validators.required],
      skillName :['',Validators.required],
      skillId: ['',Validators.required]
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

    //ADD DATA
 addSkillMapping(){
  const { value } = this.formValue;
  console.log(value);
  
  let addLtvlEmployeeDataObj = {
    productGroup: value.productGroup,
    productLine: value.productLine,
    skillName: value.skillName,
    skillId: value.skillId
  };
  console.log(addLtvlEmployeeDataObj);
  
  this.service.addProductSkill(addLtvlEmployeeDataObj).subscribe((res) => {
    // console.log(res);
    // //addLtvlEmployeeDataObj = res.id;
     this.posts.push(addLtvlEmployeeDataObj);
    // console.log(res);
    // console.log("completed...");
    this.formValue.reset();
  });
  }

}
