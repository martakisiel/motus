import { Component } from '@angular/core';
import { AlbumNameComponent } from '../album-name/album-name.component';
import { Photos, ServiceService } from '../service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent {
  pageTitle: string = "Album name"; 
  pictures : Photos[] = [];
  albumName: string | null = null; //!!!!
  albums: AlbumNameComponent[] = [];

  constructor(private route: ActivatedRoute, private serviceservice: ServiceService){}
  ngOnInit(): void{
  
  this.albumName = this.route.snapshot.paramMap.get('albumName');
    this.pageTitle = `${this.albumName}`; //!!!!!!!!tutaj powiazana jest nazwa albumu z nazwą w linku!!!!!!!!!!!!

    this.serviceservice.getPhotos().subscribe((response: string) => {
    this.pictures = JSON.parse(response) as Photos[];

    // teraz ładujemy rozmiary każdego zdjęcia asynchronicznie
    this.pictures.forEach(photo => {
      this.loadImageSize(photo.url).then(size => {
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
}