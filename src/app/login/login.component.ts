import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { MatFormField, MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { log } from 'console';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatFormField, MatLabel, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButton, CommonModule, MatIconModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  uploadImage($event: Event) {
    throw new Error('Method not implemented.');
  }

  errorMessage = 'Invalid Credentials';
  successMessage!: string;
  invalidLogin = false;
  loginSuccess = false;
  loginForm!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService) { }

  ngOnInit() {

    this.loginForm = new FormGroup({
      'username': new FormControl(''),
      'password': new FormControl('')
    });

  }

  hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  onLogin() {
    this.authenticationService.authenticationService(this.loginForm.get('username')?.value, this.loginForm.get('password')?.value).subscribe((result) => {
      this.invalidLogin = false;
      this.loginSuccess = true;
      this.successMessage = 'Login Successful.';
      this.router.navigateByUrl("home");
    }, () => {
      this.invalidLogin = true;
      this.loginSuccess = false;
    })
      ;

  }
}