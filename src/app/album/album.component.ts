import { Component, ElementRef, ViewChild, HostListener, OnInit } from '@angular/core';
import { Photos, ServiceService } from '../service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css'],
})
export class AlbumComponent implements OnInit {

  pageTitle: string = 'Album name';
  pictures: Photos[] = [];
  albumSlug: string | null = null; // slug z URL

  @ViewChild('fullscreenContainer') fullscreenContainer!: ElementRef;
  @ViewChild('fullscreenImage') fullscreenImage!: ElementRef;
  currentIndex = 0;

  constructor(
    private route: ActivatedRoute,
    private serviceservice: ServiceService
  ) {}

  ngOnInit(): void {
    
    // Pobranie sluga z URL
    this.albumSlug = this.route.snapshot.paramMap.get('albumName'); // np. "siatkowka-plazowa-wegry-2025"

    this.serviceservice.getPhotos().subscribe((allPhotos: Photos[]) => {
      // Filtrowanie zdjęć po slugu
      this.pictures = allPhotos.filter(photo => this.slugify(photo.albumName) === this.albumSlug);

      // Ustawienie pageTitle na pełną nazwę albumu (pierwsze zdjęcie)
      //this.pageTitle = this.pictures[0]?.albumName || 'Album';
this.pageTitle = allPhotos.find(p => this.slugify(p.albumName) === this.albumSlug)?.albumName || 'Album';
      // Ładowanie rozmiarów zdjęć
      this.pictures.forEach((photo) => {
        this.loadImageSize(photo.url).then((size) => {
          photo.width = size.width;
          photo.height = size.height;
        });
      });
    });
  }

  // Funkcja do generowania slugów
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

  // metoda do pobrania wymiarów obrazka
  loadImageSize(url: string): Promise<{ width: number; height: number }> {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => {
        resolve({ width: img.naturalWidth, height: img.naturalHeight });
      };
      img.src = url;
    });
  }

  isPortrait(photo: Photos): boolean {
    return photo.height! > photo.width!;
  }

  viewFullscreen(url: string): void {
    this.currentIndex = this.pictures.findIndex((pic) => pic.url === url);
    this.showImage(this.currentIndex);
    const container = this.fullscreenContainer.nativeElement;
    container.hidden = false;
    if (container.requestFullscreen) {
      container.requestFullscreen();
    } else if ((container as any).webkitRequestFullscreen) {
      (container as any).webkitRequestFullscreen();
    } else if ((container as any).msRequestFullscreen) {
      (container as any).msRequestFullscreen();
    }
  }

  showImage(index: number): void {
    const image = this.fullscreenImage.nativeElement;
    image.src = this.pictures[index].url;
  }

  showNext(event: MouseEvent): void {
    event.stopPropagation();
    this.currentIndex = (this.currentIndex + 1) % this.pictures.length;
    this.showImage(this.currentIndex);
  }

  showPrevious(event: MouseEvent): void {
    event.stopPropagation();
    this.currentIndex = (this.currentIndex - 1 + this.pictures.length) % this.pictures.length;
    this.showImage(this.currentIndex);
  }

  exitFullscreen(): void {
    const container = this.fullscreenContainer.nativeElement;
    container.hidden = true;
    if (document.fullscreenElement) {
      document.exitFullscreen();
    }
  }

  @HostListener('document:keydown', ['$event'])
  handleKeydown(event: KeyboardEvent): void {
    if (event.key === 'ArrowRight' && document.fullscreenElement) {
      this.showNext(new MouseEvent('click'));
    } else if (event.key === 'ArrowLeft' && document.fullscreenElement) {
      this.showPrevious(new MouseEvent('click'));
    } else if (event.key === 'Escape' && document.fullscreenElement) {
      document.exitFullscreen();
    }
  }

  @HostListener('document:fullscreenchange')
  onFullscreenChange(): void {
    if (!document.fullscreenElement) {
      const container = this.fullscreenContainer.nativeElement;
      container.hidden = true;
    }
  }
}
