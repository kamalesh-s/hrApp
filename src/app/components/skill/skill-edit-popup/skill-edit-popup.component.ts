import { Component, Inject, OnInit } from '@angular/core';
import { SkillService } from 'src/app/services/skill.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {ShareDataService} from 'src/app/share-data.service';

@Component({
  selector: 'app-skill-edit-popup',
  templateUrl: './skill-edit-popup.component.html',
  styleUrls: ['./skill-edit-popup.component.css']
})

export class SkillEditPopupComponent implements OnInit {
  updateFormValue: any;
  constructor( private service :SkillService ,
    private formBuilder: FormBuilder , private shareData : ShareDataService ,
    @Inject(MAT_DIALOG_DATA) public editData:any) { }

  ngOnInit(): void {

    this.updateFormValue = this.formBuilder.group({
      id :['',Validators.required],
      name :['',Validators.required],
      definition :['',Validators.required],
      criticalityLevel :['',Validators.required]
    })

    //console.log(this.editData);
    if (this.editData){
      this.updateFormValue.controls['id'].setValue(this.editData.id);
      this.updateFormValue.controls['name'].setValue(this.editData.name);
      this.updateFormValue.controls['definition'].setValue(this.editData.definition);
      this.updateFormValue.controls['criticalityLevel'].setValue(this.editData.criticalityLevel);
    }
  }

  updateSkill(){
    this.service.updateSkill(this.updateFormValue.value,this.editData.id)
    .subscribe({
      next:(res)=>{
        alert("added");
        this.updateFormValue.reset();
      }
    })

  }

}
