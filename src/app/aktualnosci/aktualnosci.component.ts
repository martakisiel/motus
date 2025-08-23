import { Component, OnInit } from '@angular/core';
import { ServiceService, Aktualnosci, Album } from '../service.service';
@Component({
  selector: 'app-aktualnosci',
  templateUrl: './aktualnosci.component.html',
  styleUrls: ['./aktualnosci.component.css']
})
export class AktualnosciComponent implements OnInit {

  aktualnosci: Aktualnosci[] = []; // Make sure data is of type string
  albums: Album[] = [];
  constructor(private serviceService: ServiceService) {}

  ngOnInit() {
    this.serviceService.getAktualnosciFile().subscribe(
      (data: Aktualnosci[]) => { this.aktualnosci = data; },
      (err) => console.error('Błąd wczytywania aktualności', err)
    );
    // this.serviceService.getAktualnosciFile().subscribe((response: string) => {
    //   this.aktualnosci = JSON.parse(response) as Aktualnosci[];
    //   // console.log(this.aktualnosci); 
    // });
  }
  getRemainingAktualnosci(): Aktualnosci[] {
    return this.aktualnosci.slice(2); // Returns an array starting from the 1st element
  }
}
