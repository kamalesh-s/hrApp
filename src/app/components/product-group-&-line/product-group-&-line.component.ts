import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatDialogModule } from '@angular/material/dialog';
import { Naps } from 'src/app/interface/naps';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { ProductGroupService } from 'src/app/services/product-group-.service';
//import { faPenToSquare , faTrash ,faTrashCan} from '@fortawesome/free-solid-svg-icons';
import {Subscription} from 'rxjs';
import {ShareDataService} from 'src/app/share-data.service';


@Component({
  selector: 'app-product-group',
  templateUrl: './product-group-&-line.component.html',
  styleUrls: ['./product-group-&-line.component.css']
})
export class ProductGroupComponent implements OnInit {

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


  constructor(public dialog: MatDialog , private formBuilder: FormBuilder, private service:ProductGroupService) { }

  displayedColumns: string[] = ['Product Group','Product Line','Immediate Supervisor','Employee','Skill','Assessment','actions'];

  applyFilter(event: Event) {
  }
  

  //Edit Upload popup
  openEditDialog(templateRef: TemplateRef<any>) {
    this.dialog.open(templateRef);
  }
 
 //Delete Popup
  openDeleteDialog(templateRef: TemplateRef<any>) {
   this.dialog.open(templateRef);
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

  this.getProductGroupLine(); 

}


 
//GET EMPLOYEE DATA
getProductGroupLine() {
  this.service.getProductGroupLine().subscribe((res:any) => {
     this.posts = res;
    console.log(this.posts)
    this.dataSource = new MatTableDataSource(this.posts);
  });
}



//ADD DATA
addLtvlEmployee(){
const { value } = this.formValue;
console.log(value);

let addLtvlEmployeeDataObj = {
  psNumber: value.psNumber,
  name: value.name,
  departmentName: value.departmentName,
  immediateSupervisorEmployeeName: value.immediateSupervisorEmployeeName,
  emailAddress :value.emailAddress,
  mobilePhoneNumber :value.mobilePhoneNumber,
  plantLocation:value.plantLocation,
};
console.log(addLtvlEmployeeDataObj);

this.service.addLtvlEmployee(addLtvlEmployeeDataObj).subscribe((res) => {
  console.log(res);
  addLtvlEmployeeDataObj = res.id;
  this.posts.push(addLtvlEmployeeDataObj);
  console.log(res);
  this.formValue.reset();
});


this.getProductGroupLine();
}


editModal(editPost: any) {
  console.log(editPost.id);
  this.editPostModal = editPost;
}

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


}
