import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import {MatDialogModule } from '@angular/material/dialog';
import { Naps } from 'src/app/interface/naps';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { DepartmentService } from 'src/app/services/department.service';
//import { faPenToSquare , faTrash ,faTrashCan} from '@fortawesome/free-solid-svg-icons';
import {Subscription} from 'rxjs';
import {ShareDataService} from 'src/app/share-data.service';
import { ActivatedRoute } from '@angular/router';
import {FormControl, Validators} from '@angular/forms';
// import {Issue} from '../../models/issue';

import {BehaviorSubject, fromEvent, merge, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { DepartmentEditPopupComponent } from './department-edit-popup/department-edit-popup.component';
import { DepartmentDeletePopupComponent } from './department-delete-popup/department-delete-popup.component';

@Component({
  selector: 'app-department-master',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentMasterComponent implements OnInit {

  dataSource!: MatTableDataSource<Naps>;

  formValue!: FormGroup;
  updateFormValue!: FormGroup;
  posts!: any;
  newPost: any;
  editPostModal: any;

  profileimage:string ="assets/img/profile-pic-2.jpg";

  departments= [
    {value: 'Department One-0', viewValue: 'Department One'},
    {value: 'Department two-1', viewValue: 'Department two'},
    {value: 'Department three-2', viewValue: 'Department three'}
  ];


  constructor(public dialog: MatDialog , private formBuilder: FormBuilder,private router:ActivatedRoute, private service:DepartmentService) { }

  displayedColumns: string[] = ['id','DepartmentName','Classification','hodName','actions'];

  applyFilter(event: Event) {
  }
  

  //Edit Upload popup
  openEditDialog(row :any) {
    this.dialog.open(DepartmentEditPopupComponent,{
      data:row
    });
  }
 
 //Delete Popup
 openDeleteDialog(row :any) {
  this.dialog.open(DepartmentDeletePopupComponent,{
   data:row
  });
}

 //View Detail
 viewDetail(templateRef: TemplateRef<any>){
  this.dialog.open(templateRef);
}

napsSingleUploadDialog(templateRef: TemplateRef<any>) {
  this.dialog.open(templateRef);
}

napsBulkUploadDialog(templateRef: TemplateRef<any>){
  this.dialog.open(templateRef);
}


ngOnInit(): void {

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

  this.getAllDepartmentData(); 

}


 
//GET EMPLOYEE DATA
getAllDepartmentData() {
  this.service.getDepartments().subscribe((res:any) => {
     this.posts = res;
    console.log(this.posts)
    this.dataSource = new MatTableDataSource(this.posts);
  });
}



//ADD DATA
addDepartment(){
  const { value } = this.formValue;
  console.log(value);
  
  let addDepartmentDataObj = {
    id: value.id,
    name: value.name,
    classification: value.classification,
    hodName: value.hodName
  };
  console.log(addDepartmentDataObj);
  
  this.service.addDepartment(addDepartmentDataObj).subscribe((res) => {
    console.log(res);
    //addLtvlEmployeeDataObj = res.id;
    this.posts.push(addDepartmentDataObj);
    console.log(res);
    this.formValue.reset();
  });
  
this.getAllDepartmentData();
}


// editModal(editPost: any) {
//   console.log(editPost.id);
//   this.editPostModal = editPost;
// }

 updatePost() {
//   const { value } = this.updateFormValue;

//   const postObj = {
//     name: value.updateName,
//     psNumber: value.updatePsNumber,
//     emailAddress: value.updateEmailAddress,
//     mobilePhoneNumber: value.updateMobilePhoneNumber,
//     immediateSupervisorEmployeeName:value.updateImmediateSupervisorEmployeeName,
//     plantLocation:value.updatePlantLocation,
//   };

//   this.service
//     .updateData(postObj, this.editPostModal)
//     .subscribe((data) => {
//       console.log(data);
//     });
 }


//  formControl = new FormControl('', [
//   Validators.required
//   // Validators.email,
// ]);

//  getErrorMessage() {
//   return this.formControl.hasError('required') ? 'Required field' :
//     this.formControl.hasError('email') ? 'Not a valid email' :
//       '';
// }

// submit() {
// // emppty stuff
// }

// onNoClick(): void {
//   this.dialogRef.close();
// }

// public confirmAdd(): void {
//   this.dataService.addIssue(this.data);
// }

// openAddDialog() {
//   const dialogRef = this.dialogService.open(AddDialogComponent, {
//     data: {Naps: {} }
//   });

//   dialogRef.afterClosed().subscribe(result => {
//     if (result === 1) {
//       // After dialog is closed we're doing frontend updates
//       // For add we're just pushing a new row inside DataService
//       this.exampleDatabase.dataChange.value.push(this.dataService.getDialogData());
//       this.refreshTable();
//     }
//   });
// }

// getUserData(data:any){
//   console.log(data);
//   this.service.addLtvlEmployee(data).subscribe((result)=>{
//     console.log(result);
//   })
// }

// delete(){
//    this.service.deleteData().subscribe((result)=>{
//      console.log("result",result);
//    })
// }

editModal(editPost: any) {
  console.log(editPost.id);
  this.editPostModal = editPost;
}

deletePost(post: any) {
  console.log(this.editPostModal.id);
  this.service.deleteData(post.id).subscribe((res) => {
    let index = this.posts.indexOf(post);
    console.log(post);
    this.posts.splice(index, 1);
    console.log(res);
  });
}



}

