import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatDialogModule } from '@angular/material/dialog';
import { Naps } from 'src/app/interface/naps';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { SkillMappingService } from 'src/app/services/skill-mapping.service';
//import { faPenToSquare , faTrash ,faTrashCan} from '@fortawesome/free-solid-svg-icons';
import {Subscription} from 'rxjs';
import {ShareDataService} from 'src/app/share-data.service';
import { LtvEditPopupComponent } from '../ltvl-users/ltv-edit-popup/ltv-edit-popup.component';
import { SkillMappingEditComponent } from './skill-mapping-edit/skill-mapping-edit.component';

@Component({
  selector: 'app-skill-mapping',
  templateUrl: './skill-mapping.component.html',
  styleUrls: ['./skill-mapping.component.css']
})
export class SkillMappingComponent implements OnInit {

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


  constructor(public dialog: MatDialog , private formBuilder: FormBuilder, private service:SkillMappingService) { }

  displayedColumns: string[] = ['productGroup','productLine','skillName','actions'];

  applyFilter(event: Event) {
  }
  

  //Edit Upload popup
  openEditDialog(row :any) {
    this.dialog.open(SkillMappingEditComponent,{
      data:row
    })
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

  this.getAllDepartmentData(); 

}


 
//GET EMPLOYEE DATA
getAllDepartmentData() {
  this.service.getSkillMapping().subscribe((res:any) => {
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


this.getAllDepartmentData();
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
