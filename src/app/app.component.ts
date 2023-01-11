import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularTemplateCode';
  showHead: boolean = false;
  adminHead: boolean = false;
  userHead: boolean = false;

  constructor(private router: Router) {
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        if (
          localStorage.getItem('userToken') == null &&
          (event['url'] == '/login' ||
            event['url'] == '/register' ||
            event['url'] == '/')
        ) {
          this.showHead = true;
        } else {
          this.showHead = false;
        }
        if (
          localStorage.getItem('isAdmin') == 'true' && (
          event['url'] != '/login' &&
          event['url'] != '/register')
        ) {
          this.adminHead = true;
        } else {
          this.adminHead = false;
        }
        if (
          localStorage.getItem('isAdmin') == 'false' &&
          event['url'] != '/login' &&
          event['url'] != '/register' &&
          event['url'] != '/'
        ) {
          this.userHead = true;
        } else {
          this.userHead = false;
        }
      }
    });
  }
}
