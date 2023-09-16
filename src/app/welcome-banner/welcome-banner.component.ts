import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';

@Component({
  selector: 'app-welcome-banner',
  templateUrl: './welcome-banner.component.html',
  styleUrls: ['./welcome-banner.component.css']
})
export class WelcomeBannerComponent implements OnInit{
ngOnInit(): void {
  Aos.init({
    duration:1000,
      easing: 'ease-in-out-back'
  })
}
}
