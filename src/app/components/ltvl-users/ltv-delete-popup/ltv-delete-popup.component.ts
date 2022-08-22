import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LtvlEmployeeService } from 'src/app/services/ltvlEmployeeservice.service';

@Component({
  selector: 'app-ltv-delete-popup',
  templateUrl: './ltv-delete-popup.component.html',
  styleUrls: ['./ltv-delete-popup.component.css']
})
export class LtvDeletePopupComponent implements OnInit {

  constructor(private service : LtvlEmployeeService ,
     @Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
  }

  deleteLtvlEmployeeData( ){
    this.service.deleteLtvlEmployee(this.data.psNumber)
    .subscribe({
      next:(res)=>{
        alert("deleted");
      }
    })
    
  }
}
