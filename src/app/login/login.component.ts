import { Component } from '@angular/core';
import { AuthService } from '../../utils/index';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  formData: any = {};

  constructor(private authService: AuthService, private router: Router) { }

  submitForm(): void {
    const { Username, Password } = this.formData;
    this.authService.login(Username, Password).subscribe(
      response => {
        if (response && response.username) {
          document.cookie = `login=${response.username}; path=/`;
          this.router.navigate(['Rules']);
        } else {
          console.error('Invalid response from server:', response);
        }
      },
      error => {
        // Handle error response
        console.error('Login failed:', error);
      }
    );
  }

  Login(): void {
    this.submitForm();
  }
}
