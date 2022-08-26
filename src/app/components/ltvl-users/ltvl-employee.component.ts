import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatDialogModule } from '@angular/material/dialog';
import { ltvlEmployee } from 'src/app/interface/ltvlEmployee/ltvl-employee-interface';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { LtvlEmployeeService } from 'src/app/services/ltvlEmployeeservice.service';
//import { faPenToSquare , faTrash ,faTrashCan} from '@fortawesome/free-solid-svg-icons';
import {Subscription} from 'rxjs';
import {ShareDataService} from 'src/app/share-data.service';
import { LtvEditPopupComponent } from './ltv-edit-popup/ltv-edit-popup.component';
import { LtvDeletePopupComponent } from './ltv-delete-popup/ltv-delete-popup.component';
import { LtvViewPopupComponent } from './ltv-view-popup/ltv-view-popup.component';

@Component({
  selector: 'app-ltvl-users',
  templateUrl: './ltvl-employee.component.html',
  styleUrls: ['./ltvl-employee.component.css']
})
export class LtvlUsersComponent implements OnInit { 

  isSingleUpload:boolean=false;
  // faPenToSquare =faPenToSquare;
  // faTrash = faTrash;
  // faTrashCan= faTrashCan;
  
  profileimage:string ="assets/img/profile-pic-2.jpg";
  // dataSource!: MatTableDataSource<ltvlEmployee>;
 
  // LtvlEmployeeData :ltvlEmployee = new ltvlEmployee();

  displayedColumns: string[] = ['name', 'psNumber', 'emailAddress', 'departmentName', 'Details','actions' ];
   dataSource !: MatTableDataSource<ltvlEmployee>;

   @ViewChild(MatPaginator) paginator!: MatPaginator;

  //  @ViewChild(MatSort, {static: false})
  //  set sort(value: MatSort) {
  //   this.dataSource.sort = value;
  // }
    @ViewChild(MatSort) sort!: MatSort;

  constructor(private formBuilder: FormBuilder, private service:LtvlEmployeeService , public dialog: MatDialog , private sharedService:ShareDataService ) { 

    // this.service.getLtvlEmployee().subscribe((res) => {
    //   this.posts = res;
    //  console.log(this.posts)
    //  this.dataSource = new MatTableDataSource(this.posts);

    //  this.dataSource.paginator = this.paginator;
    //   this.dataSource.sort = this.sort;
   //});
  }

  
//Single upload popup
// singleUploadDialog() {
//   this.isSingleUpload=true;
//    this.dialog.open(SingleUploadComponent);
//   }
  
//   //Bulk Upload popup
//   BulkUploadDialog(){
//     this.dialog.open(BulkUploadComponent);
//   }


  //Edit Upload popup
  openEditDialog(row :any) {
    this.dialog.open(LtvEditPopupComponent,{
      data:row
    }).afterClosed().subscribe(result => {
      this.getAllLtvlEmployeeData();
    });
  }
 
  
 //Delete Popup
  openDeleteDialog(row :any) {
   this.dialog.open(LtvDeletePopupComponent,{
    data:row
   });
 }


//  //View Detail
//  viewDetail(row : posts){
//    this.dialog.open(LtvViewPopupComponent);
// }





//  dataSource = new MatTableDataSource(this.posts);

  // formValue!: FormGroup;
  // posts!: any;
  // getLtvlEmployee: any;
  // updateFormValue!: FormGroup;
  // newPost: any;
  // editPostModal: any;
  // dataArray: any;

  formValue!: FormGroup;
  updateFormValue!: FormGroup;
  posts!: any;
  newPost: any;
  editPostModal: any;



ngOnInit() {
  // this.formValue = this.formBuilder.group({
  //   id:[''],
  //   Email: [''],
  //   Employeename:[''],
  //   PSNumber:[''],
  //   DepartmentName:[''],
  //   Mobile:[''],
  //   PlantLocation:[''],
  //   IS:['']
//});

this.formValue = this.formBuilder.group({
  userId: [''],
  psNumber: [''],
  name: [''],
  departmentName: [''],
  immediateSupervisorEmployeeName: [''],
  emailAddress :[''],
  mobilePhoneNumber :[''],
  plantLocation:[''],
});

this.updateFormValue = this.formBuilder.group({
  updateName: [''],
  updatePsNumber: [''],
  updateEmailAddress: [''],
  updateMobilePhoneNumber:[''],
  updateImmediateSupervisorEmployeeName:[''],
  updatePlantLocation:['']
});

  this.getAllLtvlEmployeeData(); 
}


//GET EMPLOYEE DATA
getAllLtvlEmployeeData() {
  this.service.getLtvlEmployee().subscribe((res:any) => {
     this.posts = res;
    console.log(this.posts)
    this.dataSource = new MatTableDataSource(this.posts);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort
  });
}

//Filter
applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}



 //ADD DATA
//  addLtvlEmployee(){
//   const { value } = this.formValue;
//   console.log(value);
  
//   let addLtvlEmployeeDataObj = {
//     psNumber: value.psNumber,
//     name: value.name,
//     departmentName: value.departmentName,
//     immediateSupervisorEmployeeName: value.immediateSupervisorEmployeeName,
//     emailAddress :value.emailAddress,
//     mobilePhoneNumber :value.mobilePhoneNumber,
//     plantLocation:value.plantLocation,
//   };
//   console.log(addLtvlEmployeeDataObj);
  
//   this.service.addLtvlEmployee(addLtvlEmployeeDataObj).subscribe((res) => {
//     console.log(res);
//     //addLtvlEmployeeDataObj = res.id;
//     this.posts.push(addLtvlEmployeeDataObj);
//     console.log(res);
   
//     this.formValue.reset();
    
//   });
  
  
//   this.getAllLtvlEmployeeData();
//   }



// editModal(editPost: any) {
//   console.log(editPost.id);
//   this.editPostModal = editPost;
// }

 updatePost() {
  // const { value } = this.updateFormValue;

  // const postObj = {
  //   name: value.updateName,
  //   psNumber: value.updatePsNumber,
  //   emailAddress: value.updateEmailAddress,
  //   mobilePhoneNumber: value.updateMobilePhoneNumber,
  //   immediateSupervisorEmployeeName:value.updateImmediateSupervisorEmployeeName,
  //   plantLocation:value.updatePlantLocation,
  // };

  // this.service
  //   .updateData(postObj, this.editPostModal)
  //   .subscribe((data) => {
  //     console.log(data);
  //   });
 }

 deletePost(post: any) {
  // console.log(this.editPostModal.id);
  // this.service.deleteData(post.id).subscribe((res) => {
  //   let index = this.posts.indexOf(post);
  //   console.log(post);
  //   this.posts.splice(index, 1);
  //   console.log(res);
  // });
}

viewDetail(row :any){
    //this.dialog.open(LtvViewPopupComponent);
      this.dialog.open(LtvViewPopupComponent, {
      // Can be closed only by clicking the close button
      disableClose: true,
      data: row
    });
   }
  
  // openDialog(row: PeriodicElement) {
  //   console.log('Row clicked', row);
    
  // }

//   @ViewChild(MatPaginator)
//   paginator!: MatPaginator;

// ngAfterViewInit() {
//   this.dataSource.paginator = this.paginator;
// }
// ngAfterViewInit() {
//   this.dataSource.sort = this.sort;
// }


}
