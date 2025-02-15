import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { API_URL } from './const';
import { Router } from '@angular/router'; 

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  constructor(private http: HttpClient, private router : Router) {}
  
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  
  private sendData() {
    return this.httpOptions;
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(API_URL+'login', { username, password },this.sendData()).pipe(
      catchError(error => throwError(error))
  )}

  register(name: string,username: string, password: string): Observable<any> {
    return this.http.post<any>(API_URL+'createUser', { name ,username, password },this.sendData()).pipe(
      catchError(error => throwError(error))
  )}

  getAllRules(): Observable<any> {
    return this.http.get<any>(API_URL+'rules');
  }
  
  getAllComments(): Observable<any> {
    return this.http.get<any>(API_URL+'comments');
  }

  addRules(username: String , rule: string): Observable<any>{
    return this.http.post<any>(API_URL+'addRules', { username, rule },this.sendData()).pipe(
      catchError(error => throwError(error))
  )}

  addComments(username: String , comments: string): Observable<any>{
    return this.http.post<any>(API_URL+'addComments', { username, comments },this.sendData()).pipe(
      catchError(error => throwError(error))
  )}

}