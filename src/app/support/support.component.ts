import { HttpClient } from '@angular/common/http';
import { Component, HostListener } from '@angular/core';
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
   
    isTopButtonVisible: boolean = false;
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: any) {
    // Calculate the position where the button should appear
    const middleOfPage = window.innerHeight / 2;

    // Update the visibility of the button based on scroll position
    this.isTopButtonVisible = window.scrollY >= middleOfPage;
  }
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
