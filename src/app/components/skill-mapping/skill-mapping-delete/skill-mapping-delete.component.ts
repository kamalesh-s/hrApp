import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA ,MatDialog } from '@angular/material/dialog';
import { SkillMappingService } from 'src/app/services/skill-mapping.service';

@Component({
  selector: 'app-skill-mapping-delete',
  templateUrl: './skill-mapping-delete.component.html',
  styleUrls: ['./skill-mapping-delete.component.css']
})
export class SkillMappingDeleteComponent implements OnInit {

  constructor(private service : SkillMappingService ,  @Inject(MAT_DIALOG_DATA) public data :any ) { }

  ngOnInit(): void {
  }

  deleteSkillMapping( ){
    this.service.deleteSkillMapping(this.data , this.data.productGroup , this.data.productLine , this.data.skillId)
  // //this.service.deleteLtvlEmployee(this.data.defaultValue,this.data.defaultValue.psNumber)
   .subscribe({
    next:(res)=>{
      alert("deleted");
    }
  })
  console.log(this.data);
}


}
