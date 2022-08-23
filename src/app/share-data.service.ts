import { Injectable } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {Observable, Subject} from 'rxjs';
import { LtvlEmployeeService } from 'src/app/services/ltvlEmployeeservice.service';
import { ltvlEmployee } from './interface/ltvlEmployee/ltvl-employee-interface';

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {
  posts: any;
  dataSource !: MatTableDataSource<ltvlEmployee>;


  constructor(private service:LtvlEmployeeService) { }
  
  getAllLtvlEmployeeData() {
    this.service.getLtvlEmployee().subscribe((res:any) => {
       this.posts = res;
      console.log(this.posts)
      this.dataSource = new MatTableDataSource(this.posts);
    });
  }

}
