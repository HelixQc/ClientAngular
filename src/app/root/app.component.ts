import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { Router } from'@angular/router'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tp_Client';

  deleteCookie(): void {
    var name = 'login';
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  }
}
