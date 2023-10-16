import { Component, OnInit } from '@angular/core';
import { ServiceService, Sponsors } from '../service.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
sponsors: Sponsors[]= [];

constructor( private logoSponsors: ServiceService){
}
ngOnInit():void{
  this.sponsors=this.logoSponsors.getLogoSponsors();
}

}
