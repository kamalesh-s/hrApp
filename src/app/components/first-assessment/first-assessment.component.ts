import { Component, OnInit ,ViewChild} from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';

@Component({
  selector: 'app-first-assessment',
  templateUrl: './first-assessment.component.html',
  styleUrls: ['./first-assessment.component.css']
})
export class FirstAssessmentComponent implements OnInit {

  @ViewChild(MatAccordion)
  accordion!: MatAccordion;

  displayedColumns: string[] = ['name', 'psNumber', 'emailAddress', 'departmentName' ];
  constructor() { }

  ngOnInit(): void {
  }


}
