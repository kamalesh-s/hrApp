import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 import { DepartmentMasterComponent } from './components/department/department.component';
import { LtvlUsersComponent } from './components/ltvl-users/ltvl-employee.component';
 import { NapsComponent } from './components/naps/naps.component';
 import { ProductGroupComponent } from './components/product-group-&-line/product-group-&-line.component';
 import { SkillMasterComponent } from './components/skill/skill.component';
 import { TrainingRecommendationComponent } from './components/training-recommendation/training-recommendation.component';
import { SkillMappingComponent } from './skill-mapping/skill-mapping.component';

const routes: Routes = [
  { path: '', redirectTo: 'ltvlUsers', pathMatch: 'full' },
  { path: 'ltvlEmployee', component: LtvlUsersComponent },
   { path: 'naps', component: NapsComponent },
   { path: 'department', component: DepartmentMasterComponent },
  { path: 'skill', component: SkillMasterComponent },
   { path: 'productGroup&Line', component: ProductGroupComponent },
   { path: 'skillMapping', component: SkillMappingComponent },
   { path: 'trainingRecommendation', component: TrainingRecommendationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
