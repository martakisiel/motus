import { Component, OnInit } from '@angular/core';
import { ServiceService, Sponsors } from '../service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
sponsors: Sponsors[]= [];
constructor(private route:ActivatedRoute, private serviceService:ServiceService){
}

ngOnInit() {
  this.serviceService.getSponsors().subscribe((response: string) => {
    this.sponsors = JSON.parse(response) as Sponsors[];
  });
}

}
