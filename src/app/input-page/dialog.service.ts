import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OutputPageComponent } from '../output-page/output-page.component';


@Injectable({
  providedIn: 'root',
})
export class DialogService {
  constructor(public dialog: MatDialog) {}

  openGenerate(): void {
    this.dialog.open(OutputPageComponent, {
      height: '95%',
      maxWidth: '99%'
    });
  }
}