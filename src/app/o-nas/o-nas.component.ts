import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-o-nas',
  templateUrl:'./o-nas.component.html',
  styleUrls: ['./o-nas.component.css']
})
export class ONasComponent {
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
