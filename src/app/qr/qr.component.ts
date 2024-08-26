import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialogModule,
  MAT_DIALOG_DATA,
  MatDialogTitle,
  MatDialogContent,
  MatDialogRef,
} from '@angular/material/dialog';

@Component({
  selector: 'app-qr',
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent, MatDialogModule, MatButtonModule],
  templateUrl: './qr.component.html',
  styleUrl: './qr.component.css'
})
export class QrComponent {
  data = inject(MAT_DIALOG_DATA);

  constructor(public dialogRef: MatDialogRef<any>) { }

  ngOnInit() {
    this.dialogRef.updateSize('80%', '40%');
  }
}
