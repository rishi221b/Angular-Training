import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import {MatCardModule} from '@angular/material/card';
import { Cart } from 'src/app/models/cart';
import Swal from 'sweetalert2';
import { AddToCartService } from 'src/app/services/add-to-cart.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  products?: any;
  userCart: any;
  buyNowCart: any;
  cartItemCount?:number = 0;
  totalPrice?:number=0;
  totalPriceGST?:number=0;
  constructor(private productService: ProductService,private addToCartService: AddToCartService,private router:Router) { 
    this.products = new Product();
    this.userCart = new Cart();
    this.buyNowCart = new Cart();
  }

  ngOnInit(): void {
    this.productService.GetAllProduct().subscribe(res=>{
      console.log(res);      
      this.products = res;
    });
  }
  AddToCart(data: any) {
    this.userCart.course_Name = data.course_Name;
    this.userCart.course_Description = data.course_Description;
    this.userCart.course_price = data.price;
    this.userCart.isBilled = false;
    this.userCart.imgPath = data.imagePath;
    //this.userCart.userId = Number(localStorage.getItem('userId'));
    this.userCart.user_Name=(localStorage.getItem('name'));
    this.userCart.user_Id=Number(localStorage.getItem('id'));
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      },
    });
    this.addToCartService.AddToCart(this.userCart).subscribe((res) => {
    if (res) {
      console.log(res);
      Toast.fire({
          icon: 'success',
          title: 'Course Added To Cart',
        });
      } else {
        Toast.fire({
          icon: 'error',
          title: 'Course Already Exist or Is Billed',
        });
      }
    });
  }
  BuyNow(data:any)
  {
    this.buyNowCart.course_Name = data.course_Name;
    this.buyNowCart.course_Description = data.course_Description;
    this.buyNowCart.course_price = data.price;
    this.buyNowCart.isBilled = false;
    this.buyNowCart.imgPath = data.imagePath;
    //this.userCart.userId = Number(localStorage.getItem('userId'));
    this.buyNowCart.user_Name=(localStorage.getItem('name'));
    this.buyNowCart.user_Id=Number(localStorage.getItem('id'));
      this.totalPrice = this.totalPrice + data.price;
      this.totalPriceGST =
        Number(this.totalPrice) + Number(this.totalPrice) * 0.18;
        Swal.fire({
          icon: 'question',
          html:            
            'Price: <b>' +
            this.totalPrice +
            '</b> </br>Total Price with GST: <b>' +
            this.totalPriceGST +
            '</b>',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, Proceed To Pay!',
          imageWidth: 400,
        }).then((result) => {
          if (result.isConfirmed) {
            this.productService
              .BuyNow(this.buyNowCart,Number(localStorage.getItem('id')))
              .subscribe((res) => {
                console.log(res);
                if (res) {
                  Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Enjoy The Courses!',
                    showConfirmButton: false,
                    timer: 1500,
                  });
                  this.router.navigate(['../dashboard']);
                } else {
                  Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'Course Billing Failed!',
                    showConfirmButton: false,
                    timer: 1500,
                  });
                }
              });
          }
        });
  }
  
  
}