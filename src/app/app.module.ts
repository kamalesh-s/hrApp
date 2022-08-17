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
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { EditComponent } from './edit/edit.component';
//import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
//import { LtvlTableComponent } from './components/ltvl-users/ltvl-employee-table/ltvl-employee-table.component';
import { HttpClientModule } from "@angular/common/http";
// import { LtvlService } from 'src/app/ltvlservice.service';
import {LtvlUsersComponent} from './components/ltvl-users/ltvl-employee.component';
//import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { MatTableExporterModule } from 'mat-table-exporter';
import {MatDialogModule } from '@angular/material/dialog';
import {MatDialog} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
// import { UploadDropdownComponent } from './upload-dropdown/upload-dropdown.component';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UploadDropdownComponent } from './components/upload-dropdown/upload-dropdown.component';
import {skillUploadDropdownComponent } from'./components/skill/skill-upload-dropdown/skill-upload-dropdown.component';
import {MatIconModule} from '@angular/material/icon';

import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { SearchFilterPipe } from './search-filter.pipe';
import { SkillMappingComponent } from './skill-mapping/skill-mapping.component';
import { LtvEditPopupComponent } from './components/ltvl-users/ltv-edit-popup/ltv-edit-popup.component';
import { LtvDeletePopupComponent } from './components/ltvl-users/ltv-delete-popup/ltv-delete-popup.component';
import { LtvViewPopupComponent } from './components/ltvl-users/ltv-view-popup/ltv-view-popup.component';
import { DashboardComponent } from './dashboard/dashboard.component';



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
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatTableExporterModule,
    MatDialogModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule
  ],
  bootstrap: [AppComponent]
  //  providers: [LtvlService],
  //entryComponents:[MatDialogModule],
})
export class AppModule { }
