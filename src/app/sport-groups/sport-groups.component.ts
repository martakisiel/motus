import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ServiceService, SportGroupsList } from '../service.service';

@Component({
  selector: 'app-sport-groups',
  templateUrl: './sport-groups.component.html',
  styleUrls: ['./sport-groups.component.css']
})
export class SportGroupsComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots:  true,
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
sportGroupsList: SportGroupsList[] = [];

constructor(private serviceService:ServiceService){
}

ngOnInit() {
  this.serviceService.getSportGroupsList().subscribe((response: string) => {
    this.sportGroupsList = JSON.parse(response) as SportGroupsList[];
    // console.log("onInit"); 
  });
}
}
