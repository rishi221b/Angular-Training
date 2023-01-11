import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/models/user';
import { UserserviceService } from 'src/app/services/userservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  userData: any;
  dataSource: any;
  displayedColumns: string[]=['Username','password','location','isBlocked','actions'];
  constructor(private userService:UserserviceService) {
    this.userData = new User();
    // this.dataSource = new User();
   }
   
   
  ngOnInit(): void {
    this.userService.GetAllUsers().subscribe((res) => {
      this.userData = res;
      console.log(this.userData);
      this.dataSource = new MatTableDataSource(this.userData);
    });
  }
  // dataSource = new MatTableDataSource(this.userData);
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  BlockUser(user: any) {
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
    this.userService.BlockUser(user.id).subscribe((res) => {
      if (res && !user.isBlocked) {
        Toast.fire({
          icon: 'error',
          title: 'User Blocked',
        });
        setTimeout(() => {
          location.reload();
        }, 1600);
      } else if (res && user.isBlocked) {
        Toast.fire({
          icon: 'success',
          title: 'User Unblocked',
        });
        setTimeout(() => {
          location.reload();
        }, 1600);
      } else {
        Toast.fire({
          icon: 'error',
          title: 'Cannot Perform Block Command',
        });
      }
    });
  }


}
