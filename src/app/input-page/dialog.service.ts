import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OutputPageComponent } from '../output-page/output-page.component';
import { bottom } from '@popperjs/core';


@Injectable({
  providedIn: 'root',
})
export class DialogService {
  constructor(public dialog: MatDialog) {}

  openGenerate(): void {
    this.dialog.open(OutputPageComponent, {
      height: '85%',
      maxWidth: '99%'
    });
  }
}