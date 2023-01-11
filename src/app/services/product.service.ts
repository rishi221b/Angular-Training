import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { Cart } from '../models/cart';
import { Course } from '../models/course';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
 
  constructor(private httpClient:HttpClient) { }
  GetAllProduct():Observable<Product[]> {
    return this.httpClient.get<Product[]>('https://localhost:7230/api/Course/getAllCourses')
  }
  RemoveFromCart(userId:number,course_name:string):Observable<boolean>{
    const url = 'https://localhost:7147/api/Cart/DeleteFromCart?id='+userId+'&course_name='+course_name;
    return this.httpClient.delete<boolean>(url);
  }
  DeleteCourse(courseId: number): Observable<boolean> {
    const url = 'https://localhost:7230/api/Course/DeleteCourse?id=' + courseId;
    return this.httpClient.delete<boolean>(url);
  }
  AddCourse(course: Course):Observable<boolean> {
    console.log(course);
    return this.httpClient.post<boolean>('https://localhost:7230/api/Course/AddCourses',
    {
      "course_Name": course.Course_Name,
      "category": course.Course_Category,
      "price": course.Course_Price,
      "imagePath": course.ImagePath,
      "course_Description": course.Course_Description
    }
    );
  }
  BillOrder(userId:number):Observable<boolean> {
    const url = 'https://localhost:7147/api/Cart/GenBill?userId=' + userId;
    return this.httpClient.post<boolean>(url,userId);
  }
  BuyNow(course:Course,userId:number):Observable<boolean> {
    const url = 'https://localhost:7147/api/Cart/BuyNow?userId=' + userId;
    return this.httpClient.post<boolean>(url,course);
  }
  PrevOrders(userId:number):Observable<Cart[]> {
    const url = 'https://localhost:7147/api/Cart/prevOrders?id='+ userId;
    return this.httpClient.get<Cart[]>(url);
  }

}
