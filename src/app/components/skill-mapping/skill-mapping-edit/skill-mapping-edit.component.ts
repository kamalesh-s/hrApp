import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { SkillMappingService } from 'src/app/services/skill-mapping.service';

@Component({
  selector: 'app-skill-mapping-edit',
  templateUrl: './skill-mapping-edit.component.html',
  styleUrls: ['./skill-mapping-edit.component.css']
})
export class SkillMappingEditComponent implements OnInit {

  updateFormValue: any;

  constructor(private service :SkillMappingService ,
    private formBuilder: FormBuilder ,
    @Inject(MAT_DIALOG_DATA) public editData:any) { }

  ngOnInit(): void {

    this.updateFormValue = this.formBuilder.group({
      productGroup :['',Validators.required],
      productLine :['',Validators.required],
      skillName :['',Validators.required]
    })

    //console.log(this.editData);
    if (this.editData){
      this.updateFormValue.controls['productGroup'].setValue(this.editData.ProductGroup);
      this.updateFormValue.controls['productLine'].setValue(this.editData.productLine);
      this.updateFormValue.controls['skillName'].setValue(this.editData.skillName);
    }
  }
  departments= [
    {value: 'Department One-0', viewValue: 'Department One'},
    {value: 'Department two-1', viewValue: 'Department two'},
    {value: 'Department three-2', viewValue: 'Department three'}
  ];

  // updatePost(){
  //   this.service.updateData(this.updateFormValue.value,this.editData.id)
  //   .subscribe({
  //     next:(res)=>{
  //       alert("added");
  //       this.updateFormValue.reset();
  //       //this.dialogRef.close('edit');
  //     }
      
  //   })
    
  // }

}
