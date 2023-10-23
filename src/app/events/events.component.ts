import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ServiceService, Aktualnosci } from '../service.service';
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {
  aktualnosci: Aktualnosci[] = []; // Make sure data is of type string
  constructor(private route:ActivatedRoute, private serviceService: ServiceService){}
  ngOnInit() {
    this.serviceService.getAktualnosciFile().subscribe((response: string) => {
      this.aktualnosci = JSON.parse(response) as Aktualnosci[];
      // console.log(this.aktualnosci); 
    });
  }
}
