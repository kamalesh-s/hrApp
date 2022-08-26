import { Component, OnInit ,ViewChild} from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';
import {AssessmentOneService} from 'src/app/services/assessment-one.service'

@Component({
  selector: 'app-first-assessment',
  templateUrl: './first-assessment.component.html',
  styleUrls: ['./first-assessment.component.css']
})
export class FirstAssessmentComponent implements OnInit {

  @ViewChild(MatAccordion)
  accordion!: MatAccordion;

  displayedColumns: string[] = ['Skill', 'Level', 'Training' ];
  posts: any;
  constructor(private service :AssessmentOneService) { }

  ngOnInit(): void {
    this.getAssessmentOne();
  }

  //GET EMPLOYEE DATA
getAssessmentOne() {
  this.service.getAssessmentOne().subscribe((res:any) => {
     this.posts = res;
    console.log(this.posts)
  });
}


}
