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
   { path: 'firstReview', component: FirstReviewComponent },
   { path: 'secondReview', component: SecondReviewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
