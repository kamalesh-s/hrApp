import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-is-location-management',
  templateUrl: './is-location-management.component.html',
  styleUrls: ['./is-location-management.component.css']
})
export class IsLocationManagementComponent implements OnInit {

  displayedColumns: string[] = ['Product Group', 'Product Line', 'Actions' ];
  constructor() { }

  ngOnInit(): void {
  }

}
