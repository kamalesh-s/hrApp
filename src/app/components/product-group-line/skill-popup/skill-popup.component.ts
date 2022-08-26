import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductGroupService } from 'src/app/services/product-group-.service';

@Component({
  selector: 'app-skill-popup',
  templateUrl: './skill-popup.component.html',
  styleUrls: ['./skill-popup.component.css']
})
export class SkillPopupComponent implements OnInit {

  displayedSkillpopupColumns :string[] =['Skill ID','Skill Name','Product Group','Product Line']
  posts: any;

  constructor( private service :ProductGroupService ,@Inject(MAT_DIALOG_DATA) public editData:any ) { }

  ngOnInit(): void {
    this.getSkillProductGroupLine();
  }

  //GET EMPLOYEE DATA
getSkillProductGroupLine() {
  this.service.getProductMappedToSkill(this.editData.productGroup,this.editData.productLine ,this.editData).subscribe((res:any) => {
     this.posts = res;
    console.log(this.posts)
    //this.dataSource = new MatTableDataSource(this.posts);
  });
}

 

}
