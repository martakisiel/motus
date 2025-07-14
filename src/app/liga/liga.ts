import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-liga',
  templateUrl: './liga.html',
  styleUrls: ['./liga.css']
})
export class LigaComponent implements OnInit {
  terminarzData: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('http://liga.ksmotus.pl/wp-json/custom/v1/terminarz')
      .subscribe(data => {
        this.terminarzData = data;
      });
  }
}
