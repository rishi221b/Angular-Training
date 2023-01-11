import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import {FormsModule} from '@angular/forms';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { ProductService } from './services/product.service';
import { LoginComponent } from './component/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './component/header/header.component'; 
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { AdminDashboardComponent } from './component/admin-dashboard/admin-dashboard.component';
import { DisplayCartComponent } from './component/display-cart/display-cart.component';
import { AdminHeaderComponent } from './component/admin-header/admin-header.component';
import { UserHeaderComponent } from './component/user-header/user-header.component';
import { AdminCoursesComponent } from './component/admin-courses/admin-courses.component';
import { AddCourseComponent } from './component/add-course/add-course.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditCourseComponent } from './component/edit-course/edit-course.component';
import {MatTableModule} from '@angular/material/table';
import { OrdersComponent } from './component/orders/orders.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    DashboardComponent,
    LoginComponent,
    HeaderComponent,
    AdminDashboardComponent,
    DisplayCartComponent,
    AdminHeaderComponent,
    UserHeaderComponent,
    AdminCoursesComponent,
    AddCourseComponent,
    EditCourseComponent,
    OrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule ,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    ReactiveFormsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
