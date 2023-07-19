import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Route } from '@angular/router';

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.css']
})
export class NewEventComponent implements OnInit{

constructor(private route: ActivatedRoute){}
  ngOnInit(): void {
    let date: Date = new Date(this.route.snapshot.params['date']);
    console.log(date);

  }
}
