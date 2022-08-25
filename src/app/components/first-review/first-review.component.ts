import { Component, OnInit } from '@angular/core';
import { ReviewOneService } from 'src/app/services/review-one.service';
import { MatTableDataSource } from '@angular/material/table';
import { ReviewOne } from 'src/app/interface/review-one';

@Component({
  selector: 'app-first-review',
  templateUrl: './first-review.component.html',
  styleUrls: ['./first-review.component.css']
})
export class FirstReviewComponent implements OnInit {
  posts: any;
  dataSource !: MatTableDataSource<ReviewOne>;

  constructor(private service :ReviewOneService ) { }

  displayedColumns: string[] = ['Skill Name', 'Assessment 1 Level', 'Assessment 1 Training', 'Review 1 Level ','Comments' ];

  ngOnInit(): void {
    this.getReviewOne();
  }

  //GET EMPLOYEE DATA
getReviewOne() {
  this.service.getReviewOne().subscribe((res:any) => {
     this.posts = res;
    console.log(this.posts)
    this.dataSource = new MatTableDataSource(this.posts);
  });
}

}
