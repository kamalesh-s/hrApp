import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { IsSkillAssessment } from 'src/app/interface/is-skill-assessment';
import { IsSkillAssessmentService } from 'src/app/services/is-skill-assessment.service';

@Component({
  selector: 'app-isskill-assessment',
  templateUrl: './isskill-assessment.component.html',
  styleUrls: ['./isskill-assessment.component.css']
})
export class ISSkillAssessmentComponent implements OnInit {
  posts: any;

  constructor(private service : IsSkillAssessmentService) { }

  displayedColumns: string[] = ['id','name', 'Primary Skill', 'AssessmentOne', 'ReviewOne','AssessmentTwo','ReviewTwo' ];
  dataSource !: MatTableDataSource<IsSkillAssessment>;

  ngOnInit(): void {
    this.getIsSkillAssessment();
  }

  //GET EMPLOYEE DATA
 getIsSkillAssessment() {
  this.service.getISSkillAssessment().subscribe((res:any) => {
     this.posts = res;
    console.log(this.posts)
    this.dataSource = new MatTableDataSource(this.posts);
  });
}



}
