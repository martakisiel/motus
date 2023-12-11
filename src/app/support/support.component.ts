import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent {
  message: string | undefined;
  constructor(private http: HttpClient, private clipboard: Clipboard, public matSnackBar:MatSnackBar) { }
  
  copyText(textToCopy: string) {
    this.clipboard.copy(textToCopy);
    }
    openSnackBar(message: string, action: string) {
      this.matSnackBar.open(message, action, {
        duration: 2000, // Duration in milliseconds
      });
    
    }
    showNotification() {
      this.openSnackBar('Skopiowano do schowka', 'zamknij');
    }
}
