import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-review',
  templateUrl: './second-review.component.html',
  styleUrls: ['./second-review.component.css']
})
export class SecondReviewComponent implements OnInit {

  constructor() { }
  displayedColumns: string[] = ['Skill Name', 'Assessment 1 Level', 'Assessment 1 Training', 'Review 1 Level','Assessment 2 Level','Assessment 2 Training','Review 2','Comments' ];

  ngOnInit(): void {
  }

  
}
