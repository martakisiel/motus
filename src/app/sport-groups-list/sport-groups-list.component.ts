import { Component, OnInit } from '@angular/core';
import { ServiceService, SportGroupsList } from '../service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sport-groups-list',
  templateUrl: './sport-groups-list.component.html',
  styleUrls: ['./sport-groups-list.component.css']
})
export class SportGroupsListComponent implements OnInit{

  sportGroupsList: SportGroupsList[] = [];
siatkowka: any|string;

constructor(private route:ActivatedRoute, private serviceService:ServiceService){
}

ngOnInit() {

  this.serviceService.getSportGroupsList().subscribe((response: string) => {
    this.sportGroupsList = JSON.parse(response) as SportGroupsList[];

  });
}
}
