import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminDashboardComponent } from './component/admin-dashboard/admin-dashboard.component';
import { DisplayCartComponent } from './component/display-cart/display-cart.component';
import { AdminCoursesComponent } from './component/admin-courses/admin-courses.component';
import { AddCourseComponent } from './component/add-course/add-course.component';
import { EditCourseComponent } from './component/edit-course/edit-course.component';
import { OrdersComponent } from './component/orders/orders.component';

const routes: Routes = [
  {path: 'register',component: RegisterComponent},
  {path:'login', component: LoginComponent},
  {path:'admin-dashboard', component: AdminDashboardComponent},
  {path:'dashboard', component: DashboardComponent,canActivate:[AuthGuard]},
  {path:'display-cart', component:DisplayCartComponent},
  {path:'admin-courses',component:AdminCoursesComponent},
  {path:'add-course',component:AddCourseComponent},
  {path:'edit-course/:id',component:EditCourseComponent},
  {path:'prev-orders',component:OrdersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
