import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA ,MatDialog } from '@angular/material/dialog';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-skill-delete-popup',
  templateUrl: './skill-delete-popup.component.html',
  styleUrls: ['./skill-delete-popup.component.css']
})
export class SkillDeletePopupComponent implements OnInit {

  constructor( private service : SkillService ,
    @Inject(MAT_DIALOG_DATA) public data :any ) { }

  ngOnInit(): void {
  }

  deleteSkill( ){
    this.service.deleteSkill(this.data ,this.data.psNumber)
  // //this.service.deleteLtvlEmployee(this.data.defaultValue,this.data.defaultValue.psNumber)
   .subscribe({
    next:(res)=>{
      alert("deleted");
    }
  })
  console.log(this.data);
}

}
