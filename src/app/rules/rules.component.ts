import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../utils/index';
import { Router } from '@angular/router'


@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.css']
})
export class RulesComponent implements OnInit{

  formData: any = {};
  rules: any[] = [];
  comments: any[] = [];

  constructor(private authService :AuthService, private router : Router){}
  
  ngOnInit(): void {
    this.authService.getAllComments().subscribe(data => {
      this.comments = data;
      console.log(data)
    });

    this.authService.getAllRules().subscribe(data => {
      this.rules = data
    })
  }


  submitRules(): void {
    const { Rule } = this.formData;
    const cookieValue = this.getCookie('login');
    console.log(cookieValue)
    console.log(Rule)
    this.authService.addRules(cookieValue, Rule).subscribe(
      response => {
        console.log(response)
        window.location.reload();
      },
      error => {
        // Handle error response
        console.error('Login failed:', error);
      }
    )
  }
  

  submitComments(): void {
    const { Comment } = this.formData;
    const username = this.getCookie('login');
    console.log(username)
    console.log(Comment)
    this.authService.addComments(username, Comment).subscribe(
      response => {
        console.log(response)
        window.location.reload();
      },
      error => {
        // Handle error response
        console.error('Login failed:', error);
      }
    )
  }


  private getCookie(name: string): string {
    const cookieValue = document.cookie;
    if (cookieValue) {
      const parts = cookieValue.split('; ')
        .find(row => row.startsWith(name + '='));
      if (parts) {
        return parts.split('=')[1];
      }
    }
    return '';
  }

}
