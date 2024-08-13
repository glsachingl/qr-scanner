import { Component } from '@angular/core';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scanproduct',
  standalone: true,
  imports: [ZXingScannerModule, RouterLink],
  templateUrl: './scanproduct.component.html',
  styleUrl: './scanproduct.component.css'
})
export class ScanproductComponent {

  qrResultString!: string;

  constructor(private router: Router) {
    // ...
  }

  clearResult(): void {
    this.qrResultString = "";
  }

  onCodeResult(resultString: string) {
    this.qrResultString = resultString;
    this.router.navigateByUrl(resultString)
  }

}
