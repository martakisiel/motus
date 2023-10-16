import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private selectedImageIndex = 0;
  constructor() { }
  private logoSponsors: Sponsors[] = [
    { alt: "SkyWorldGames", url: "assets/sponsorzy/1.png", link: "https://skyworldgames.com/" },
    { alt: "sponsor", url: "assets/sponsorzy/2.jpg", link: "https://skyworldgames.com/" },

  ]

  private galerySample: GalerySample[] = [
    { url: "assets/galerySample/gs1.JPG", alt: "San" },
    { url: "assets/galerySample/gs2.JPG", alt: "serw" },
    { url: "assets/galerySample/gs3.JPG", alt: "Wspinaczka" },
    { url: "assets/galerySample/gs4.JPG", alt: "kajaki" },
    { url: "assets/galerySample/gs5.JPG", alt: "siatkówka" }

  ]
  getLogoSponsors() {
    return this.logoSponsors;
  }
  getGalerySample() {
    return this.galerySample;
  }


  setSelectedImageIndex(index: number) {
    this.selectedImageIndex = index;
  }

  getSelectedImageIndex() {
    return this.selectedImageIndex;
  }
}
export interface Sponsors {
  alt: string | undefined;
  url: string;
  link: string;
}
export interface GalerySample {
  alt: string | undefined;
  url: string;
  //   link: string;
}