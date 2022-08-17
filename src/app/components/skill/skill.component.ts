import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatDialogModule } from '@angular/material/dialog';
import { SkillService } from 'src/app/services/skill.service';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LtvlEmployeeService } from 'src/app/services/ltvlEmployeeservice.service';
//import { faPenToSquare , faTrash ,faTrashCan} from '@fortawesome/free-solid-svg-icons';
import {Subscription} from 'rxjs';
import {ShareDataService} from 'src/app/share-data.service';
import { Skill } from 'src/app/interface/skill';
import {MatTableModule} from '@angular/material/table';
//import {EditModalComponent} from 'src/app/components/skill/edit-modal/edit-modal.component'

@Component({
  selector: 'app-skill-master',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})

export class SkillMasterComponent implements OnInit {
  posts: any;
  dataSource!: MatTableDataSource<Skill>;
 // dataSource:any;
  displayedColumns: string[] = ['id','name', 'definition', 'criticalityLevel' ,'Actions'];
  dialog: any;

  constructor(private service:SkillService ,dialog :MatDialogModule) { }

  ngOnInit(): void {
    this.getAllLtvlEmployeeData();
  }

  //GET EMPLOYEE DATA
getAllLtvlEmployeeData() {
  this.service.getEmployeeSkill().subscribe((res:any) => {
     this.posts = res;
    console.log(this.posts)
    this.dataSource = new MatTableDataSource(this.posts);
    //this.dataSource = this.posts;
  });
}

editSkillPopup(){
  this.dialog.open('EditModalComponent');
}
deleteSkillPopup(){
  this.dialog.open("DeleteModalComponent");
}
//Edit Upload popup
openEditDialog(templateRef: TemplateRef<any>) {
  this.dialog.open(templateRef);
}
}
