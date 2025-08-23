import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService, Album } from '../service.service';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css'],
  providers: [ServiceService]
})
export class GaleriaComponent implements OnInit {
  albums: Album[] = [];

  constructor(private route: ActivatedRoute, private serviceService: ServiceService) {}

  ngOnInit(): void {
    this.serviceService.getAlbums().subscribe((albums: Album[]) => {
      // Tworzymy slug dla każdego albumu
      this.albums = albums.map(a => ({
        ...a,
        slug: this.slugify(a.name)
      }));
    });
  }

  slugify(text: string): string {
    return text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\s+/g, '-')
      .replace(/[^\w\-]+/g, '')
      .replace(/\-\-+/g, '-')
      .replace(/^-+/, '')
      .replace(/-+$/, '');
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
