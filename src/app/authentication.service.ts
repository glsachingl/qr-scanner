import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {


  USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'

  loginUrl = 'http://localhost:8080/product/login'

  public username!: String;
  public password!: String;

  constructor(private http: HttpClient) {

  }

  authenticationService(username: string, password: string) {

    return this.http.get(this.loginUrl,
      { headers: { authorization: this.createBasicAuthToken(username, password) }, responseType: 'text' }).pipe(map((res) => {
        this.username = username;
        this.password = password;
        this.registerSuccessfulLogin();
      }));
  }

  createBasicAuthToken(username: String, password: String) {
    return 'Basic ' + window.btoa(username + ":" + password)
  }

  registerSuccessfulLogin() {
    sessionStorage.setItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME, this.createBasicAuthToken(this.username, this.password))
  }

  logout() {
    sessionStorage.removeItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
    this.username = "";
    this.password = "";
  }

  isUserLoggedIn(): boolean {
    let user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)
    if (user === null) return false
    return true
  }

  getLoggedInUserName() {
    let user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)
    if (user === null) return ''
    return user
  }
}