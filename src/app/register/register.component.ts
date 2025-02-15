import { Component } from '@angular/core';
import { AuthService } from '../../utils/index';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  formData: any = {};

  constructor(private authService: AuthService, private router: Router) { }
  submitForm(): void {
    const { Name ,Username, Password } = this.formData;
    this.authService.register(Name,Username, Password).subscribe(
      response => {
        this.router.navigate(['login']);
      },
      error => {
        // Handle error response
        console.error('Login failed:', error);
      }
    );
  }

  Register(){
    this.submitForm();
  }
}
