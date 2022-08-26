import { Component, Inject, OnInit ,TemplateRef } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatDialogModule } from '@angular/material/dialog';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {  ltvlEmployee } from 'src/app/interface/ltvlEmployee/ltvl-employee-interface';
import { SkillService } from 'src/app/services/skill.service';
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
  formValue!: FormGroup;
  addEmployeeDataForm !: FormGroup;
  // faCloudArrowUp = faCloudArrowUp;
  
 
  constructor(private formBuilder: FormBuilder , private sharedService:ShareDataService , public service :SkillService , public dialog: MatDialog) {
    
   }
   departments= [
    {value: 'Department One-0', viewValue: 'Department One'},
    {value: 'Department two-1', viewValue: 'Department two'},
    {value: 'Department three-2', viewValue: 'Department three'}
  ];

  //service :LtvlEmployeeService = new LtvlEmployeeService(); 
  
  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      //id: [''],
      name: [''],
      definition: [''],
      criticalityLevel: [''],
    });

    this.addEmployeeDataForm = this.formBuilder.group({
      //id :['',Validators.required],
      name :['',Validators.required],
      definition :['',Validators.required],
      criticalityLevel :['',Validators.required],
    })
    
    }
  

  singleUploadDialog(templateRef: TemplateRef<any>) {
    this.dialog.open(templateRef);
  }
  
  BulkUploadDialog(templateRef: TemplateRef<any>){
    this.dialog.open(templateRef);
  }

  //ADD DATA
 addSkill(){
  const { value } = this.formValue;
  console.log(value);
  
  let addSkillDataObj = {
    //id: value.id,
    name: value.name,
    definition: value.definition,
    criticalityLevel: value.criticalityLevel,
  };
  console.log(addSkillDataObj);
  
  this.service.addSkill(addSkillDataObj).subscribe((res) => {
    console.log(res);
    //addLtvlEmployeeDataObj = res.id;
    this.posts.push(addSkillDataObj);
    console.log(res);
    this.formValue.reset();
  });
  }

  
}



