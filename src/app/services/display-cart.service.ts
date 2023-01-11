import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from '../models/cart';

@Injectable({
  providedIn: 'root'
})
export class DisplayCartService {
  

  constructor(private httpClient:HttpClient) { }
  DisplayCart(userId:number):Observable<Cart[]> {
    const url = 'https://localhost:7147/api/Cart/getCartByUserId?id='+ userId;
    return this.httpClient.get<Cart[]>(url);
  }
}
