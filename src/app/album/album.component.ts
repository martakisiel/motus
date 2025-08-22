import { Component, ElementRef, ViewChild, HostListener, Input, OnInit } from '@angular/core';
import { AlbumNameComponent } from '../album-name/album-name.component';
import { Photos, ServiceService } from '../service.service';
import { ActivatedRoute } from '@angular/router';
//import photosList from '../../assets/photosList.json';
@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css'],
})
export class AlbumComponent implements OnInit {

  pageTitle: string = 'Album name';
  pictures: Photos[] = [];
  albumName: string | null = null; //!!!! nazwa albumu z parametru URL
  albums: AlbumNameComponent[] = [];
//  @Input() albumName!: string;   // nazwa albumu przekazywana z GaleriaComponent

  @ViewChild('fullscreenContainer') fullscreenContainer!: ElementRef;
  @ViewChild('fullscreenImage') fullscreenImage!: ElementRef;
  currentIndex = 0; // Index of the currently displayed image

  constructor(
    private route: ActivatedRoute,
    private serviceservice: ServiceService
  ) {}
  ngOnInit(): void {
   // this.photos = photosList.filter(photo => photo.albumName === this.albumName);
  
  // 🔥 Pobranie nazwy albumu z parametru w ścieżce
    this.albumName = this.route.snapshot.paramMap.get('albumName');
    this.pageTitle = `${this.albumName}`; //!!!!!!!!tutaj powiazana jest nazwa albumu z nazwą w linku!!!!!!!!!!!!

  // 🔥 Pobranie listy zdjęć i filtrowanie po albumName
    this.serviceservice.getPhotos().subscribe((allPhotos: Photos[]) => {
  this.pictures = allPhotos.filter(photo => photo.albumName === this.albumName);
    // this.serviceservice.getPhotos().subscribe((response: string) => {
    // this.pictures = JSON.parse(response) as Photos[];

      // teraz ładujemy rozmiary każdego zdjęcia asynchronicznie
      this.pictures.forEach((photo) => {
        this.loadImageSize(photo.url).then((size) => {
          photo.width = size.width;
          photo.height = size.height;
        });
      });
    });
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

  // metoda pomocnicza, czy zdjęcie jest pionowe
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
    this.currentIndex =
      (this.currentIndex - 1 + this.pictures.length) % this.pictures.length;
    this.showImage(this.currentIndex);
  }

  exitFullscreen(): void {
  const container = this.fullscreenContainer.nativeElement;

  // Hide modal container first
  container.hidden = true;

  // Then try to exit fullscreen if it's still active
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
    document.exitFullscreen(); // Only exits fullscreen — modal will be hidden by fullscreenchange listener
  }
}
  
@HostListener('document:fullscreenchange')
onFullscreenChange(): void {
  // If browser has exited fullscreen, hide the modal
  if (!document.fullscreenElement) {
    const container = this.fullscreenContainer.nativeElement;
    container.hidden = true;
  }
}
}
