import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAssignmentComponent } from './add-assignment/add-assignment.component';
import { CreateClassComponent } from './create-class/create-class.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DemoPathComponent } from './demo-path/demo-path.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
  {
    path: '', component: LandingComponent
  },
  {
    path: 'demo-path', component: DemoPathComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'user', component: DashboardComponent
  },
  {
    path: 'create-class', component: CreateClassComponent
  },
  {
    path: 'create-assignment', component: AddAssignmentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
