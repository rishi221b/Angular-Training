import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditCourseService {

  constructor(private httpclient:HttpClient) { }
  EditCourse(productId:number,product:Product):Observable<boolean>{
      let url='https://localhost:7230/api/Course/UpdateCourse?id='+productId;
      return this.httpclient.put<boolean>(url,product);
  }
  GetProductById(id:number):Observable<Product[]>{
    return this.httpclient.get<Product[]>('https://localhost:7230/api/Course/GetCourseById?id='+id);
  }
}
