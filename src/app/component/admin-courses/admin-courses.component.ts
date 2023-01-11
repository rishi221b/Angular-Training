import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ProductService } from 'src/app/services/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-courses',
  templateUrl: './admin-courses.component.html',
  styleUrls: ['./admin-courses.component.css']
})
export class AdminCoursesComponent implements OnInit {
  products?: any;
  dataSource: any;
  displayedColumns: string[]=['imagePath','course_Name','category','course_Description','price','actions'];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.GetAllProduct().subscribe(res=>{
      console.log(res);      
      this.products = res;
      this.dataSource = new MatTableDataSource(this.products);

    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
    DeleteCourse(course: any) {
      console.log(course);
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
        text: 'Remove Course?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
      }).then((result) => {
        if (result.isConfirmed) {
          this.productService.DeleteCourse(course.product_Id).subscribe((res) => {
            console.log(res);
            console.log(course.id);
            if (res) {
              Toast.fire({
                icon: 'success',
                title: 'Course Deleted Successfully',
              });
              setTimeout(() => {
                location.reload();
              }, 1600);
            } else {
              Toast.fire({
                icon: 'error',
                title: 'Cannot Delete Course',
              });
            }
          });
        }
      });
    }
  

}
