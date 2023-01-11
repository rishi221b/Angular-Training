import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserserviceService } from 'src/app/services/userservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user:User
  constructor(private userService:UserserviceService) {
    console.log("within register Component");
    this.user=new User()
    
   }

  ngOnInit(): void {
   // this.registerUser();
  }
  registerUser() {
    // this.user.name="Rishii";
    // this.user.password="1234";
    // this.user.location="mumbai";
    // this.user.email="risii@gmail.com";
    this.user.isBlocked=false;
    console.log(this.user);
    
    this.userService.RegisterUser(this.user).subscribe(res=>{
      if(res){
        console.log("Register Success");
        Swal.fire(
          'User Registration',
          'Registration Success',
          'success'
        )
        
      }
      else{
        console.log("Registarion Failed");
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          footer: 'This User already exists'
        })
        
      }
    })
  }

}
