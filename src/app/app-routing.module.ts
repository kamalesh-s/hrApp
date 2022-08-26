import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
 import { DepartmentMasterComponent } from './components/department/department.component';
import { LtvlUsersComponent } from './components/ltvl-users/ltvl-employee.component';
 import { NapsComponent } from './components/naps/naps.component';
 import { ProductGroupComponent } from './components/product-group-line/product-group-&-line.component';
 import { SkillMasterComponent } from './components/skill/skill.component';
 import { TrainingRecommendationComponent } from './components/training-recommendation/training-recommendation.component';
import { SkillMappingComponent } from './components/skill-mapping/skill-mapping.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { FirstReviewComponent } from './components/first-review/first-review.component';
import { FirstAssessmentComponent } from './components/first-assessment/first-assessment.component';
import { SecondAssessmentComponent } from './components/second-assessment/second-assessment.component';
import { SecondReviewComponent } from './components/second-review/second-review.component';
import { ISSkillAssessmentComponent } from './components/isskill-assessment/isskill-assessment.component';
import { IsLocationManagementComponent } from './components/is-location-management/is-location-management.component';
import { EmployeeSkillAssessmentComponent } from './components/employee-skill-assessment/employee-skill-assessment.component';
import { ReviewOneComponent } from './components/review-one/review-one.component';

const routes: Routes = [
  { path: '', redirectTo: 'ltvlUsers', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'ltvEmployee', component: LtvlUsersComponent },
   { path: 'naps', component: NapsComponent },
   { path: 'department', component: DepartmentMasterComponent },
  { path: 'skill', component: SkillMasterComponent },
   { path: 'productGroup&Line', component: ProductGroupComponent },
   { path: 'skillMapping', component: SkillMappingComponent },
   { path: 'trainingRecommendation', component: TrainingRecommendationComponent },
   { path: 'signIn', component: SignInComponent },
   { path: 'firstAssessment', component: FirstAssessmentComponent },
   { path: 'secondAssessment', component: SecondAssessmentComponent },
   { path: 'firstReview', component: ReviewOneComponent },
   { path: 'isSkillAssessment', component: ISSkillAssessmentComponent },
   { path: 'secondReview', component: SecondReviewComponent },
   { path: 'isLocationManagement', component: IsLocationManagementComponent },
   { path: 'employeeSkillAssessment', component: EmployeeSkillAssessmentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
