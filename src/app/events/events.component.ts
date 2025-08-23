import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ServiceService, Aktualnosci, Album } from '../service.service';
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  aktualnosci: Aktualnosci[] = []; // Make sure data is of type string
  albums: Album[] = []; 
  isTopButtonVisible: boolean = false;
  constructor(private route:ActivatedRoute, private serviceService: ServiceService){}
  ngOnInit(){
    // this.serviceService.getAktualnosciFile().subscribe((response: string) => {
    //   this.aktualnosci = JSON.parse(response) as Aktualnosci[];
    //   // console.log(this.aktualnosci); 
    // });
    this.serviceService.getAktualnosciFile().subscribe(
      (data: Aktualnosci[]) => { this.aktualnosci = data; },
      (err) => console.error('Błąd wczytywania aktualności', err)
    );
    this.serviceService.getAlbums().subscribe((albums: Album[]) => {
    this.albums = albums;
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
  slugify(text: string): string {
    return text
      .toLowerCase()
      .normalize("NFD") // usuwa polskie znaki diakrytyczne
      .replace(/[\u0300-\u036f]/g, "") // czyści akcenty
      .replace(/\s+/g, '-') // spacje → myślniki
      .replace(/[^\w\-]+/g, '') // usuwa niedozwolone znaki
      .replace(/\-\-+/g, '-') // usuwa podwójne myślniki
      .replace(/^-+/, '') // usuwa myślniki z początku
      .replace(/-+$/, ''); // usuwa myślniki z końca
  }
}

