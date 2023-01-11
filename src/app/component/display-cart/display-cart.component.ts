import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/models/cart';
import { Course } from 'src/app/models/course';
import { DisplayCartService } from 'src/app/services/display-cart.service';
import { ProductService } from 'src/app/services/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-display-cart',
  templateUrl: './display-cart.component.html',
  styleUrls: ['./display-cart.component.css']
})
export class DisplayCartComponent implements OnInit {
  cartList?: any;
  total: number = 0;
  Gsttotal?: number = 0;
  cartItemCount?:number = 0;
  totalPrice?:number=0;
  totalPriceGST?:number=0;


  constructor(private displayCartService: DisplayCartService, private productService: ProductService,private router:Router) {
    this.cartList = new Cart();
  }

  ngOnInit(): void {
    this.displayCartService.DisplayCart(Number(localStorage.getItem('id'))).subscribe(res => {
      console.log(res);
      this.cartList = res;
      console.table(this.cartList);

      const total = this.cartList.map((val: any) => parseInt(val.course_Price || '0')).reduce((acc: number, val: number) => {
        console.log({ acc });
        return acc = acc + val
      }, 0)
      this.total = total;
      this.Gsttotal = Math.round((total * 0.18 + total));
      console.log({Gs: this.Gsttotal});
      
    })
  }
  DeleteFromCart(data: any) {
    this.cartList.course_Name = data.course_Name;
    this.cartList.course_Description = data.course_Description;
    this.cartList.course_price = data.price;
    this.cartList.isBilled = false;
    this.cartList.imgPath = data.imagePath;
    //this.userCart.userId = Number(localStorage.getItem('userId'));
    this.cartList.user_Name = (localStorage.getItem('name'));
    this.cartList.user_Id = Number(localStorage.getItem('id'));
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
    Swal.fire({
      title: 'Are you sure?',
      text: 'Remove Item From Cart?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(this.cartList);
        this.productService
          .RemoveFromCart(Number(localStorage.getItem('id')), this.cartList.course_Name)
          .subscribe((res) => {
            console.log(res);

            if (res) {
              Toast.fire({
                icon: 'error',
                title: 'Course Removed From Cart',
              });
              setTimeout(() => {
                location.reload();
              }, 1600);
            } else {
              Swal.fire(
                'Not Deleted!',
                'The Item Not Removed From Cart..',
                'error'
              );
            }
          });
      }
    });
  }
  BillOrder(data:any)
  {
    this.cartItemCount = data.length;
    data.forEach((element: any) => {
      this.totalPrice = this.totalPrice + element.price;
      this.totalPriceGST =
        Number(this.totalPrice) + Number(this.totalPrice) * 0.18;
        Swal.fire({
          icon: 'question',
          html:
            'Total Item In Your Cart: <b>' +
            this.cartItemCount +
            '</b></br>' +
            'Price: <b>' +
            this.total +
            '</b> </br>Total Price with GST: <b>' +
            this.Gsttotal +
            '</b>',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, Proceed To Pay!',
          imageWidth: 400,
        }).then((result) => {
          if (result.isConfirmed) {
            this.productService
              .BillOrder(Number(localStorage.getItem('id')))
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
      });
  }
  

}
