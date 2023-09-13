// login.component.ts

import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.username, this.password).subscribe(
      (response) => {
        if (response && response.user) {
          // Authentication successful, navigate to the groups page
          this.router.navigate(['/groups']);
        } else {
          // Authentication failed, handle the error or display an error message
          console.error('Authentication failed');
        }
      },
      (error) => {
        // Handle HTTP error or display an error message
        console.error('An error occurred:', error);
      }
    );
  }
}