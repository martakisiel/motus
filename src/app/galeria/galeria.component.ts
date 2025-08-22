import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ServiceService, Album, Management } from '../service.service';
@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css'],
  providers: [ServiceService]
})
export class GaleriaComponent  implements OnInit {
  albums: Album[] = []; 
  constructor(private route:ActivatedRoute, private serviceService:ServiceService){
 
  }
  ngOnInit(): void {
      this.serviceService.getAlbums().subscribe((albums: Album[]) => {
    this.albums = albums;
      });
  }
 
    scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
 
}

