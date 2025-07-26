import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-liga',
  templateUrl: './liga.html',
  styleUrls: ['./liga.css'],
   encapsulation: ViewEncapsulation.None 
})
export class LigaComponent implements OnInit {
  terminarzHtml: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<{ html: string }>('http://liga.ksmotus.pl/wp-json/custom/v1/terminarz-tabela')
  .subscribe(res => {
    this.terminarzHtml = res.html;
  });
  }
}
//   terminarzHtml: any;

//   constructor(private http: HttpClient) {}

//   ngOnInit() {
//     this.http.get<{ html: string }>('http://liga.ksmotus.pl/wp-json/custom/v1/terminarz-tabela')
//   .subscribe(res => {
//     this.terminarzHtml = res.html;
//   });
//   }
//}
