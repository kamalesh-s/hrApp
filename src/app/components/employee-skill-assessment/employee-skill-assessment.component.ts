import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-skill-assessment',
  templateUrl: './employee-skill-assessment.component.html',
  styleUrls: ['./employee-skill-assessment.component.css']
})
export class EmployeeSkillAssessmentComponent implements OnInit {

  displayedColumns: string[] = ['Employee ID', 'Employee Name', 'Primary Skill', 'Assessment 1','Review 1','Assessment 2','Review 2' ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
