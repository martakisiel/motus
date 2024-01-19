import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { text } from '@fortawesome/fontawesome-svg-core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private selectedImageIndex = 0;
  private configUrl = "assets/sportGroups/";
  constructor(private http: HttpClient) { }
  // private logoSponsors: Sponsors[] = [
  //   { alt: "SkyWorldGames", url: "assets/sponsorzy/1.png", link: "https://skyworldgames.com/" },
  //   { alt: "gmina Lesko", url: "assets/sponsorzy/2.jpg", link: "https://www.lesko.pl/" },

  // ]

  // private aktualnosci: Aktualnosci[] = [
  //   { title: "Mecz siatkówki na hali SP Lesko", date: "21.09.2023", content:"W czwartek 21.09.2023 o godzinie 19:00 odbędzie się koleżeński mecz siatkówki."},
  //   { title: "assets/galerySample/gs2.JPG", date: "10.10.2023", content:"Mecz na hali" },
  //   { title: "assets/galerySample/gs3.JPG", date: "10.10.2023", content:"Mecz na hali" },
  //   { title: "assets/galerySample/gs4.JPG", date: "10.10.2023", content:"Mecz na hali" },
  //   { title: "assets/galerySample/gs5.JPG", date: "10.10.2023", content:"Mecz na hali" }

  // ]
  //ZAMIENIĆ WSZYSTKO TABLICE Z SERVICE NA OSOBNE PLIKI ZACZYTYWANE Z FOLDEROW!!!!
  private galerySample: GalerySample[] = [
    { url: "assets/galerySample/gs1.JPG", alt: "siatkówka" },
    { url: "assets/galerySample/gs2.JPG", alt: "siatkówka" },
    { url: "assets/galerySample/gs3.JPG", alt: "siatkówka" },
    { url: "assets/galerySample/gs4.JPG", alt: "siatkówka" },
    { url: "assets/galerySample/gs5.JPG", alt: "Wspinaczka" },
    { url: "assets/galerySample/gs6.JPG", alt: "San" },
    { url: "assets/galerySample/gs7.JPG", alt: "kajaki" }

  ]

 
getSponsors():Observable<string>{
  return this.http.get('assets/sponsors/sponsorsList.txt', {responseType:'text'})
}
  getManagement():Observable<string>{
    return this.http.get('assets/management/managementList.txt', {responseType:'text'});
  }

  getAktualnosciFile(): Observable<string> {
    return this.http.get('assets/aktualnosci/aktualnosci.txt', { responseType: 'text' });
  }
  getSportGroupsList(): Observable<string> {
    return this.http.get('assets/sportGroups/sportGroupsList.txt', { responseType: 'text' });
  }

  // getLogoSponsors() {
  //   return this.logoSponsors;
  // }
  getGalerySample() {
    return this.galerySample;
  }
  setSelectedImageIndex(index: number) {
    this.selectedImageIndex = index;
  }
  getSelectedImageIndex() {
    return this.selectedImageIndex;
  }
//   getBoardImg(){
//   return this.boardImg;
// }

}
export interface Sponsors {
  url: string;
  logo: string;
  name: string;
  id: string;
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

export interface Management{
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
  
}