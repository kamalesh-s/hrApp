import { Component, OnInit } from '@angular/core';
import { AssessmentTwoService } from 'src/app/services/assessment-two.service';
import { MatTableDataSource } from '@angular/material/table';
import { AssessmentTwo } from 'src/app/interface/assessment-two';

@Component({
  selector: 'app-second-assessment',
  templateUrl: './second-assessment.component.html',
  styleUrls: ['./second-assessment.component.css']
})
export class SecondAssessmentComponent implements OnInit {

  displayedColumns: string[] = ['Skill Name', 'Assessment 1 Level', 'Assessment 1 Training', 'Review 1 Level','Level','Training' ];
  posts: any;
  dataSource !: MatTableDataSource<AssessmentTwo>;

  constructor(private service :AssessmentTwoService) { }

  ngOnInit(): void {
     //GET EMPLOYEE DATA
    this.getAllLtvlEmployeeData();
  }

  getAllLtvlEmployeeData() {
    this.service.getSecondAssessment().subscribe((res:any) => {
       this.posts = res;
      console.log(this.posts)
      this.dataSource = new MatTableDataSource(this.posts);
      
    });
  }

 

}

