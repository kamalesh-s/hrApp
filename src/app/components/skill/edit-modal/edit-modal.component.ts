import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LtvlEmployeeService } from 'src/app/services/ltvlEmployeeservice.service';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.css']
})
export class EditModalComponent implements OnInit {

  formValue!: FormGroup;
  updateFormValue!: FormGroup;
  posts!: any;
  newPost: any;
  editPostModal: any;

  constructor(private formBuilder: FormBuilder, private service: LtvlEmployeeService) { }

  ngOnInit(): void {
    this.updateFormValue = this.formBuilder.group({
      updateUserId: [''],
      updateEmployeename: [''],
      updateEmail: [''],
      updatePSNumber:[''],
      updateDepartmentName:[''],
      updateMobile:[''],
      updatePlantLocation:[''],
      updateIS:[''],
    });
}

editModal(editPost: any) {
  console.log(editPost);
  this.editPostModal = editPost;
}


}

