import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatDialogModule } from '@angular/material/dialog';
import { Naps } from 'src/app/interface/naps';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { NapsService } from 'src/app/services/naps.service';
//import { faPenToSquare , faTrash ,faTrashCan} from '@fortawesome/free-solid-svg-icons';
import {Subscription} from 'rxjs';
import {ShareDataService} from 'src/app/share-data.service';
import { NapsEditPopupComponent } from './naps-edit-popup/naps-edit-popup.component';
import { NapsDeletePopupComponent } from './naps-delete-popup/naps-delete-popup.component';

@Component({
  selector: 'app-naps',
  templateUrl: './naps.component.html',
  styleUrls: ['./naps.component.css']
})
export class NapsComponent implements OnInit {

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


  constructor(public dialog: MatDialog , private formBuilder: FormBuilder, private service:NapsService) { }

  displayedColumns: string[] = ['EmployeeName', 'DepartmentName','departmentId', 'Details','actions'];

  applyFilter(event: Event) {
  }
  

  //Edit Upload popup
   openEditDialog(row :any) {
    this.dialog.open(NapsEditPopupComponent,{
      data:row
    });
   }
 
 //Delete Popup
  openDeleteDialog(row :any) {
   this.dialog.open(NapsDeletePopupComponent,{
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

  this.getAllNapsEmployeeData(); 

}


 
//GET EMPLOYEE DATA
getAllNapsEmployeeData() {
  this.service.getNapsEmployee().subscribe((res:any) => {
     this.posts = res;
    console.log(this.posts)
    this.dataSource = new MatTableDataSource(this.posts);
  });
}



//ADD DATA
addContractEmployee(){
  const { value } = this.formValue;
  console.log(value);
  
  let addContractEmployeeDataObj = {
    name: value.name,
    departmentClassification: value.departmentClassification,
    contractName: value.contractName,
    gender :value.gender,
    type :value.type,
    certificates:value.certificates,
    dateOfJoining:value.dateOfJoining,
    productGroup:value.productGroup,
    plantLocation:value.plantLocation,
    primarySkill:value.primarySkill,
    additionalSkills:value.additionalSkills,
    departmentName:value.departmentName,
    productLine:value.certificates,
  };
  console.log(addContractEmployeeDataObj);
  
  this.service.addContractEmployee(addContractEmployeeDataObj).subscribe((res) => {
    console.log(res);
    //addLtvlEmployeeDataObj = res.id;
    this.posts.push(addContractEmployeeDataObj);
    console.log(res);
    this.formValue.reset();
  });
  
  
   //this.getAllLtvlEmployeeData();
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
