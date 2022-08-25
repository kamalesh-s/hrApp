import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-naps-view-popup',
  templateUrl: './naps-view-popup.component.html',
  styleUrls: ['./naps-view-popup.component.css']
})
export class NapsViewPopupComponent implements OnInit {

  profileimage:string ="assets/img/profile-pic-2.jpg";

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,) { }

  ngOnInit(): void {
  }

}
