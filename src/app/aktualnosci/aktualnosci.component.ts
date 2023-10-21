import { Component, OnInit } from '@angular/core';
import { ServiceService, Aktualnosci } from '../service.service';
@Component({
  selector: 'app-aktualnosci',
  templateUrl: './aktualnosci.component.html',
  styleUrls: ['./aktualnosci.component.css']
})
export class AktualnosciComponent implements OnInit {

  aktualnosci: Aktualnosci[] = []; // Make sure data is of type string
  constructor(private serviceService: ServiceService) {}

  ngOnInit() {
    this.serviceService.getAktualnosciFile().subscribe((response: string) => {
      this.aktualnosci = JSON.parse(response) as Aktualnosci[];
      // console.log(this.aktualnosci); 
    });
  }
}
