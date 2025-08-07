import { Component, OnInit } from '@angular/core';
import { ServiceService, GalerySample } from '../service.service';

@Component({
  selector: 'app-gallery-sample',
  templateUrl: './gallery-sample.component.html',
  styleUrls: ['./gallery-sample.component.css']
})
export class GallerySampleComponent {
  galerySampleImages: GalerySample[] = [];
  selectedImageIndex: number = 0;
 // setSelectedImageIndex: any= 0;
  constructor(private galerySample: ServiceService) { }

ngOnInit(): void {
  this.galerySample.getGalerySample().subscribe((response: GalerySample[]) => {
    this.galerySampleImages = response;  // JUŻ JEST TUTAJ TABLICA, więc nie parsujemy JSON!
    this.selectedImageIndex = this.galerySample.getSelectedImageIndex();
  }, error => {
    console.error('Błąd przy pobieraniu:', error);});
}


  nextImage() {
    console.log('next');
    this.selectedImageIndex = (this.selectedImageIndex + 1) % this.galerySampleImages.length;
    this.galerySample.setSelectedImageIndex(this.selectedImageIndex);
  }

  previousImage() {
    console.log('previous');
    this.selectedImageIndex =
      (this.selectedImageIndex - 1 + this.galerySampleImages.length) % this.galerySampleImages.length;
    this.galerySample.setSelectedImageIndex(this.selectedImageIndex);
  }


  }

