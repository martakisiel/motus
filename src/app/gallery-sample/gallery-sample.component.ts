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
  setSelectedImageIndex:any= 0;
  constructor(private galerySample: ServiceService) { }

  ngOnInit(): void {
    this.galerySampleImages = this.galerySample.getGalerySample();
    this.selectedImageIndex = this.galerySample.getSelectedImageIndex();
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
