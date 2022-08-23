import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA ,MatDialog } from '@angular/material/dialog';
import { LtvlEmployeeService } from 'src/app/services/ltvlEmployeeservice.service';

@Component({
  selector: 'app-ltv-delete-popup',
  templateUrl: './ltv-delete-popup.component.html',
  styleUrls: ['./ltv-delete-popup.component.css']
})

export class LtvDeletePopupComponent implements OnInit {

  constructor(private service : LtvlEmployeeService ,
    //  @Inject(MAT_DIALOG_DATA) public updateData:any
    @Inject(MAT_DIALOG_DATA) public data :any 
     ) { 
      //this.deleteData = data.psNumber;
     }

  ngOnInit(): void {
  }

  deleteLtvlEmployeeData( ){
      this.service.deleteLtvlEmployee(this.data ,this.data.psNumber)
    // //this.service.deleteLtvlEmployee(this.data.defaultValue,this.data.defaultValue.psNumber)
     .subscribe({
      next:(res)=>{
        alert("deleted");
      }
    })
    console.log(this.data);
  }
}


