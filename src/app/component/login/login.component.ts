import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { Login } from 'src/app/model/login';
import { UserserviceService } from 'src/app/services/userservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login:Login;
  constructor(private userservice:UserserviceService, private router:Router) { 
    this.login = new Login();
  }
  ngOnInit(): void {
  }
  Login(){
    this.userservice.LoginUser(this.login).subscribe({
      next: (res) =>{
        let jsonobject = JSON.stringify(res);
        let jsontoken = JSON.parse(jsonobject);
        console.log(`${jsontoken["Token"]}`);
  
        console.log(res);  
        localStorage.setItem('UserToken',jsontoken["Token"]);
        localStorage.setItem('isAdmin',jsontoken["isAdmin"]);
        localStorage.setItem('name',jsontoken["name"]);
        localStorage.setItem('id',jsontoken["id"]);
        let isadmin=(localStorage.getItem("isAdmin"));
        if(isadmin=="false"){
          this.router.navigate(["../dashboard"]);
        }
        else{
            this.router.navigate(["../admin-dashboard"]);
          }
  
      },
      error: (e)=>{
        console.log(e);
        Swal.fire({
          icon: 'error',
          title: 'Login Failed!',
          text: e.error,
        });
      }
          })
  }
}
