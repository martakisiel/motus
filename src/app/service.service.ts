import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private selectedImageIndex = 0;
  constructor(private http: HttpClient) { }
  private logoSponsors: Sponsors[] = [
    { alt: "SkyWorldGames", url: "assets/sponsorzy/1.png", link: "https://skyworldgames.com/" },
    { alt: "gmina Lesko", url: "assets/sponsorzy/2.jpg", link: "https://www.lesko.pl/" },

  ]

  // private aktualnosci: Aktualnosci[] = [
  //   { title: "Mecz siatkówki na hali SP Lesko", date: "21.09.2023", content:"W czwartek 21.09.2023 o godzinie 19:00 odbędzie się koleżeński mecz siatkówki."},
  //   { title: "assets/galerySample/gs2.JPG", date: "10.10.2023", content:"Mecz na hali" },
  //   { title: "assets/galerySample/gs3.JPG", date: "10.10.2023", content:"Mecz na hali" },
  //   { title: "assets/galerySample/gs4.JPG", date: "10.10.2023", content:"Mecz na hali" },
  //   { title: "assets/galerySample/gs5.JPG", date: "10.10.2023", content:"Mecz na hali" }

  // ]
  private galerySample: GalerySample[] = [
    { url: "assets/galerySample/gs1.JPG", alt: "San" },
    { url: "assets/galerySample/gs2.JPG", alt: "serw" },
    { url: "assets/galerySample/gs3.JPG", alt: "Wspinaczka" },
    { url: "assets/galerySample/gs4.JPG", alt: "kajaki" },
    { url: "assets/galerySample/gs5.JPG", alt: "siatkówka" }

  ]


  getAktualnosciFile(): Observable<string> {
    return this.http.get('assets/teksty/aktualnosci.txt', { responseType: 'text' });
  }


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
export interface Aktualnosci {

  title: string;
  date: string ;
  content: string;

}