import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MaterialModule} from '../material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideNavBarComponent } from './components/side-nav-bar/side-nav-bar.component';
 import { NapsComponent } from './components/naps/naps.component';
 import { DepartmentMasterComponent } from './components/department/department.component';
 import { SkillMasterComponent } from './components/skill/skill.component';
import { RouterModule } from '@angular/router';
  import { ProductGroupComponent } from './components/product-group-&-line/product-group-&-line.component';
// import { TrainingRecommendationComponent } from './training-recommendation/training-recommendation.component';
import {MatSortModule} from '@angular/material/sort';
import { HttpClientModule } from "@angular/common/http";
// import { LtvlService } from 'src/app/ltvlservice.service';
import {LtvlUsersComponent} from './components/ltvl-users/ltvl-employee.component';
//import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
 import { MatTableExporterModule } from 'mat-table-exporter';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import { UploadDropdownComponent } from './components/upload-dropdown/upload-dropdown.component';
import {skillUploadDropdownComponent } from'./components/skill/skill-upload-dropdown/skill-upload-dropdown.component';



import { SearchFilterPipe } from './search-filter.pipe';
import { SkillMappingComponent } from './components/skill-mapping/skill-mapping.component';
import { LtvEditPopupComponent } from './components/ltvl-users/ltv-edit-popup/ltv-edit-popup.component';
import { LtvDeletePopupComponent } from './components/ltvl-users/ltv-delete-popup/ltv-delete-popup.component';
import { LtvViewPopupComponent } from './components/ltvl-users/ltv-view-popup/ltv-view-popup.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FooterComponent } from './components/footer/footer.component';
import { LtvUploadDropdownComponent } from './components/ltvl-users/ltv-upload-dropdown/ltv-upload-dropdown.component';
import { FirstAssessmentComponent } from './components/first-assessment/first-assessment.component';
import { SecondAssessmentComponent } from './components/second-assessment/second-assessment.component';
import { ISSkillAssessmentComponent } from './components/isskill-assessment/isskill-assessment.component';
import { FirstReviewComponent } from './components/first-review/first-review.component';
import { SecondReviewComponent } from './components/second-review/second-review.component';
import { DeleteSnackbarComponent } from './components/delete-snackbar/delete-snackbar.component';
import { CreateSnackbarComponent } from './components/create-snackbar/create-snackbar.component';
import { EditSnackbarComponent } from './components/edit-snackbar/edit-snackbar.component';
import { NapsEditPopupComponent } from './components/naps/naps-edit-popup/naps-edit-popup.component';
import { NapsDeletePopupComponent } from './components/naps/naps-delete-popup/naps-delete-popup.component';
import { NapsViewPopupComponent } from './components/naps/naps-view-popup/naps-view-popup.component';
import { DepartmentEditPopupComponent } from './components/department/department-edit-popup/department-edit-popup.component';
import { DepartmentDeletePopupComponent } from './components/department/department-delete-popup/department-delete-popup.component';
import { DepartmentViewPopupComponent } from './components/department/department-view-popup/department-view-popup.component';
import { SkillDeletePopupComponent } from './components/skill/skill-delete-popup/skill-delete-popup.component';



@NgModule({
  declarations: [
    AppComponent,
    SideNavBarComponent,
    //LtvlTableComponent,
     NapsComponent,
     DepartmentMasterComponent,
     SkillMasterComponent,
     LtvlUsersComponent,
     ProductGroupComponent,
    // TrainingRecommendationComponent,
    // EditComponent,
   // LtvlTableComponent,
    UploadDropdownComponent,
    skillUploadDropdownComponent,
    SearchFilterPipe,
    SkillMappingComponent,
    LtvEditPopupComponent,
    LtvDeletePopupComponent,
    LtvViewPopupComponent,
    DashboardComponent,
    FooterComponent,
    LtvUploadDropdownComponent,
    FirstAssessmentComponent,
    SecondAssessmentComponent,
    ISSkillAssessmentComponent,
    FirstReviewComponent,
    SecondReviewComponent,
    DeleteSnackbarComponent,
    CreateSnackbarComponent,
    EditSnackbarComponent,
    NapsEditPopupComponent,
    NapsDeletePopupComponent,
    NapsViewPopupComponent,
    DepartmentEditPopupComponent,
    DepartmentDeletePopupComponent,
    DepartmentViewPopupComponent,
    SkillDeletePopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    // MatNativeDateModule,
    ReactiveFormsModule,
    MatTableExporterModule,
     MatSortModule
  ],
  bootstrap: [AppComponent]
  //  providers: [LtvlService],
  //entryComponents:[MatDialogModule],
})
export class AppModule { }
