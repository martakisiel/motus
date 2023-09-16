import { Component, OnInit, HostListener } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  isTopButtonVisible: boolean = false;
  
  ngOnInit(): void {
    AOS.init({
    duration:1000,
      easing: 'ease-in-out-back'
    });
  }
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
