import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/app/models/course';
import { EditCourseService } from 'src/app/services/edit-course.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {
  test:any
  test2:any
  course:Course
  products:any = {};
  id?:number

  constructor(private editCourseService:EditCourseService,private router:Router,private route:ActivatedRoute) { 
    this.course=new Course();
  }

  ngOnInit(): void {
      this.route.params.subscribe(data =>{
        // console.log(data); 
        this.test= data['id'] 
        this.editCourseService.GetProductById(this.test).subscribe(res=>{
          console.log(res);
          this.test2=res
        })   
      });
  }
  
  EditProduct(){
     
    this.editCourseService.EditCourse(this.route.snapshot.params['id'],this.test2).subscribe((data)=>{
      console.log(data);
      if(data){
        console.log("Edition Success");
        Swal.fire(
          'Product Edition',
          'Product Success',
          'success'
        )
        //this.router.navigate(['']);
      }
      
      else{
        console.log("Registration failed");
        
      }
      console.log("Success edition");      
    })
  }




}
