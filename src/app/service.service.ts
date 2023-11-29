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
  //ZAMIENIĆ WSZYSTKO TABLICE Z SERVICE NA OSOBNE PLIKI ZACZYTYWANE Z FOLDEROW!!!!
  private galerySample: GalerySample[] = [
    { url: "assets/galerySample/gs1.JPG", alt: "San" },
    { url: "assets/galerySample/gs2.JPG", alt: "serw" },
    { url: "assets/galerySample/gs3.JPG", alt: "Wspinaczka" },
    { url: "assets/galerySample/gs4.JPG", alt: "kajaki" },
    { url: "assets/galerySample/gs5.JPG", alt: "siatkówka" }

  ]

  private boardImg: BoardImg[] = [
    { url: "assets/boardImg/1.JPG", alt: "CEO", name:"Fabian", surname:"Mach", position:"Prezes", id:"0" },
    { url: "assets/boardImg/2.JPG", alt: "CEO", name:"Beata", surname:"Mach", position:"Viceprezes",id:"1"},
    { url: "assets/boardImg/2.JPG", alt: "CEO", name:"Kamil", surname:"X", position:"Skarbnik",id:"2"  },
    { url: "assets/boardImg/3.JPG", alt: "CEO", name:"XXXXXX", surname:"YYYYYY", position:"COS",id:"3" },
  ]


  getAktualnosciFile(): Observable<string> {
    return this.http.get('assets/teksty/aktualnosci.txt', { responseType: 'text' });
  }
  getSportGroupsList(): Observable<string> {
    return this.http.get('assets/sportGroups/sportGroupsList.txt', { responseType: 'text' });
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
  getBoardImg(){
  return this.boardImg;
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
  url: string;
  alt: string;
  title: string;
  date: string;
  content: string;
}

export interface BoardImg{
  url: string;
  alt: string;
  name: string;
  surname: string;
  position: string;
  id: string;
}

export interface SportGroupsList{
  url: string;
  alt: string;
  title: string;
  id: string;
}