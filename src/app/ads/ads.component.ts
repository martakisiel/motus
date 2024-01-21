import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Clipboard } from '@angular/cdk/clipboard';
import * as AOS from 'aos';
@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.css']
})
export class AdsComponent implements OnInit  {
  ngOnInit() { 
AOS.init({

});
  }
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
    //metoda wywołująca 'skopowano do schowka'
    showNotification() {
      this.openSnackBar('Skopiowano do schowka', 'zamknij');
    }
}
