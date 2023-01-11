import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from '../models/cart';

@Injectable({
  providedIn: 'root'
})
export class AddToCartService {

  constructor(private httpClient:HttpClient) { }
  AddToCart(cart: Cart): Observable<boolean> {
    return this.httpClient.post<boolean>('https://localhost:7147/api/Cart/AddToCart',cart);
  }
}
