import { Component, Inject, OnInit ,TemplateRef } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatDialogModule } from '@angular/material/dialog';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {  ltvlEmployee } from 'src/app/interface/ltvlEmployee/ltvl-employee-interface';
import { LtvlEmployeeService } from 'src/app/services/ltvlEmployeeservice.service';
import {ShareDataService} from 'src/app/share-data.service';
//import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'skill-upload-dropdown',
  templateUrl: './skill-upload-dropdown.component.html',
  styleUrls: ['./skill-upload-dropdown.component.css'],
})
export class skillUploadDropdownComponent implements OnInit {

  // @Input() IsUpload:boolean=false;
  // @Output() EmployeeData=new EventEmitter();

  // EmpData: EmployeeDetail = new EmployeeDetail;

  // formValue!: FormGroup;
  posts!: any;
  getAllData: any;
  ltvlEmployeeDataObj: any;
  // faCloudArrowUp = faCloudArrowUp;
  
 
  constructor(private formBuilder: FormBuilder , private sharedService:ShareDataService , public service :LtvlEmployeeService , public dialog: MatDialog) {
    
   }
   departments= [
    {value: 'Department One-0', viewValue: 'Department One'},
    {value: 'Department two-1', viewValue: 'Department two'},
    {value: 'Department three-2', viewValue: 'Department three'}
  ];

  //service :LtvlEmployeeService = new LtvlEmployeeService(); 
  
  ngOnInit(): void {
    // this.formValue = this.formBuilder.group({
    //   id:[''],
    //   email: [''],
    //   employee_name:[''],
    //   ps_number:[''],
    //   department_name:[''],
    //   mobile:[''],
    //   plant_location:[''],
    //   is:['']
  //});
  this.ltvlEmployeeDataObj=[];
  }

  // addLtvlEmployeeData(){
  //   this.sharedService.sendClickEvent();
  // }
  
  
    addLtvlEmployeeData():void {
    
    }
  

  singleUploadDialog(templateRef: TemplateRef<any>) {
    this.dialog.open(templateRef);
  }
  
  BulkUploadDialog(templateRef: TemplateRef<any>){
    this.dialog.open(templateRef);
  }

  
}



