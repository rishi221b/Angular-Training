import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.css']
})
export class UserHeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  LogoutUser() {
    localStorage.clear();
    this.router.navigate(['login']);
  }
  DisplayCart()
  {
    this.router.navigate(["../display-cart"]);
  }
}
