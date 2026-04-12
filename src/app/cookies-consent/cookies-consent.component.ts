import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cookies-consent',
  templateUrl: './cookies-consent.component.html',
  styleUrls: ['./cookies-consent.component.css']
})
export class CookiesConsentComponent implements OnInit {
  isVisible = false;

  ngOnInit(): void {
  const consent = localStorage.getItem('cookiesAccepted');
  console.log('CONSENT:', consent);

  this.isVisible = !consent;
  console.log('VISIBLE:', this.isVisible);
  }

  accept(): void {
    localStorage.setItem('cookiesAccepted', 'true');
    this.isVisible = false;
  }
}