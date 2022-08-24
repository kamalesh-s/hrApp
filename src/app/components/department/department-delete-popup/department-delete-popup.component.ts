import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA ,MatDialog } from '@angular/material/dialog';
import { DepartmentService } from 'src/app/services/department.service';

@Component({
  selector: 'app-department-delete-popup',
  templateUrl: './department-delete-popup.component.html',
  styleUrls: ['./department-delete-popup.component.css']
})
export class DepartmentDeletePopupComponent implements OnInit {

  constructor(private service : DepartmentService ,
    //  @Inject(MAT_DIALOG_DATA) public updateData:any
    @Inject(MAT_DIALOG_DATA) public data :any ) { }

  ngOnInit(): void {
  }

  deleteDepartment(){
    this.service.deleteDepartment(this.data ,this.data.id)
    // //this.service.deleteLtvlEmployee(this.data.defaultValue,this.data.defaultValue.psNumber)
     .subscribe({
      next:(res)=>{
        alert("deleted");
      }
    })
    console.log(this.data);
  }
}
