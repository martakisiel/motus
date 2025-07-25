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
    { url: "assets/galerySample/gs1_2100_300_70.JPG", alt: "siatkówka" },
    { url: "assets/galerySample/gs2_2100_300_70.JPG", alt: "siatkówka" },
    { url: "assets/galerySample/gs3_2100_300_70.JPG", alt: "siatkówka" },
    { url: "assets/galerySample/gs4_2100_300_70.JPG", alt: "siatkówka" },
    { url: "assets/galerySample/gs5_2100_300_70.JPG", alt: "Wspinaczka" },
    { url: "assets/galerySample/gs6_2100_300_70.JPG", alt: "San" },
    { url: "assets/galerySample/gs7_2100_300_70.JPG", alt: "kajaki" }

  ]
  getAlbumsNames(): Observable<string> {
    return this.http.get('assets/galery/albumsNames.txt', {responseType:'text'});
  }
  getPhotos() {
    return this.http.get('assets/galery/photosList.txt', {responseType:'text'});
  }
 
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
export interface AlbumsNames { //nowy typ danych
  coverUrl : string | undefined
  name: string | undefined;
  alt: string | undefined;

}
export class Photos {
  public name: string | undefined;
  public url: string = '';
    width?: number;    // szerokość zdjęcia (opcjonalna)
  height?: number;   // wysokość zdjęcia (opcjonalna)
}

