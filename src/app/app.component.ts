import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbar, MatToolbarRow } from '@angular/material/toolbar';
import { AuthenticationService } from './authentication.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ZXingScannerModule, MatToolbar, MatButtonModule, MatToolbarRow, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  _router!: Router;

  constructor(public router: Router,
    private authenticationService: AuthenticationService) {

    this._router = router
  }

  onLogout() {
    this.authenticationService.logout();
    this.router.navigateByUrl('/login')
  }


}