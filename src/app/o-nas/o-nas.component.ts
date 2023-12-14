import { Component, HostListener, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Board, ServiceService } from '../service.service';
@Component({
  selector: 'app-o-nas',
  templateUrl:'./o-nas.component.html',
  styleUrls: ['./o-nas.component.css']
})
export class ONasComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['<','>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

  board: Board[] = [];
  
  constructor(private serviceService:ServiceService){
  }
  
ngOnInit() {
  this.serviceService.getBoard().subscribe((response:string) => { 
    this.board = JSON.parse(response) as Board[];
  });

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
