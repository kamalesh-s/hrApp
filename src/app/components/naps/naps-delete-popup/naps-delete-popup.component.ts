import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NapsService } from 'src/app/services/naps.service';

@Component({
  selector: 'app-naps-delete-popup',
  templateUrl: './naps-delete-popup.component.html',
  styleUrls: ['./naps-delete-popup.component.css']
})
export class NapsDeletePopupComponent implements OnInit {

  constructor(private service :NapsService, @Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
  }

  deleteLtvlEmployeeData( ){
    this.service.deleteContractEmployee(this.data ,this.data.id)
  // //this.service.deleteLtvlEmployee(this.data.defaultValue,this.data.defaultValue.psNumber)
   .subscribe({
    next:(res)=>{
      alert("deleted");
    }
  })
  console.log(this.data);
}

}
