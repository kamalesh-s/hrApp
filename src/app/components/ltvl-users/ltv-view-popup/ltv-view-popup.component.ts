import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-ltv-view-popup',
  templateUrl: './ltv-view-popup.component.html',
  styleUrls: ['./ltv-view-popup.component.css']
})
export class LtvViewPopupComponent implements OnInit {

  profileimage:string ="assets/img/profile-pic-2.jpg";
  
  constructor( @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    
   }

  ngOnInit(): void {
  }
  test(){
  console.log(this.data);
}
 

}
