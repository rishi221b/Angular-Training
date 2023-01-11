import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Course } from 'src/app/models/course';
import { ProductService } from 'src/app/services/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {
  course: Course;
  AddCourseForm : FormGroup | any;
  constructor(private productService:ProductService,private fb:FormBuilder) {
    this.course=new Course();
   }

  ngOnInit(): void {
    this.AddCourseForm=this.fb.group(
      {
        courseName:['',Validators.required],
        courseCategory:['',Validators.required],
        coursePrice: ['',Validators.required],
        imagePath:['',Validators.required],
        courseDescription:['',Validators.required]
      }
    );
  }
  AddCourse(form:FormGroup)
  {
      if(form.valid)
      {
        console.log(form);
        this.course.Course_Name=form.value.courseName;
        this.course.Course_Category=form.value.courseCategory;
        this.course.Course_Price=form.value.coursePrice;
        this.course.ImagePath=form.value.imagePath;
        this.course.Course_Description=form.value.courseDescription;
        console.log(this.course);
        this.productService.AddCourse(this.course).subscribe((res) => {
          if (res) {
            console.log(res);
            Swal.fire({
                icon: 'success',
                title: 'Course Added Successfully',
              });
              this.ngOnInit();
            } else {
              Swal.fire({
                icon: 'error',
                title: 'Course Already Exists',
              });
            }
          });
      }
  }
}
