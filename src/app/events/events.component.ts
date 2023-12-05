import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ServiceService, Aktualnosci } from '../service.service';
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {
  aktualnosci: Aktualnosci[] = []; // Make sure data is of type string
  isTopButtonVisible: boolean = false;
  constructor(private route:ActivatedRoute, private serviceService: ServiceService){}
  ngOnInit() {
    this.serviceService.getAktualnosciFile().subscribe((response: string) => {
      this.aktualnosci = JSON.parse(response) as Aktualnosci[];
      // console.log(this.aktualnosci); 
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

