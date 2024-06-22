import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ServiceService, AlbumsNames, Management } from '../service.service';
@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css'],
  providers: [ServiceService]
})
export class GaleriaComponent  implements OnInit {
  albumsNames: AlbumsNames[] = [];
 
  constructor(private serviceService:ServiceService){
 
  }
  ngOnInit(): void {
      this.serviceService.getAlbumsNames().subscribe((response:string) => { 
        this.albumsNames = JSON.parse(response) as AlbumsNames[];
      });
  }
 
    scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
 
}

