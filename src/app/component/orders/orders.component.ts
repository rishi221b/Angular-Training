import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Cart } from 'src/app/models/cart';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  cartList?: any;
  dataSource: any;
  displayedColumns: string[]=['imagePath','course_Name','course_Description','price'];



  constructor(private productService: ProductService) { 
    this.cartList = new Cart();
  }

  ngOnInit(): void {
    this.productService.PrevOrders(Number(localStorage.getItem('id'))).subscribe(res => {
      console.log(res);
      this.cartList = res;
      console.table(this.cartList);
      this.dataSource = new MatTableDataSource(this.cartList);

    })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
