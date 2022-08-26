import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review-one',
  templateUrl: './review-one.component.html',
  styleUrls: ['./review-one.component.css']
})
export class ReviewOneComponent implements OnInit {

  displayedColumns: string[] = ['SkillName', 'AssessmentOneLevel', 'AssessmentOneTraining', 'ReviewOneLevel','Comments' ];

  constructor() { }

  ngOnInit(): void {
  }

}
