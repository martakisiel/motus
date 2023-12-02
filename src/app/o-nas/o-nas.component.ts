import { Component, HostListener, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { BoardImg, ServiceService } from '../service.service';
@Component({
  selector: 'app-o-nas',
  templateUrl:'./o-nas.component.html',
  styleUrls: ['./o-nas.component.css']
})
export class ONasComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
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

  boardImg: BoardImg[] = [];
  
  constructor(private serviceService:ServiceService){
  }
  
ngOnInit() {
  this.serviceService.getBoardImg().subscribe((response:string) => { 
    this.boardImg = JSON.parse(response) as BoardImg[];
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
