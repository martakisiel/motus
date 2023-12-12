import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService, SportGroupsList } from '../service.service';

@Component({
  selector: 'app-sport-group',
  templateUrl: './sport-group.component.html',
  styleUrls: ['./sport-group.component.css']
})
export class SportGroupComponent implements OnInit{
  groupName: string | null = null;
  sportGroupsList: SportGroupsList[] = [];

  constructor(private route: ActivatedRoute, private serviceService: ServiceService) {}
 
  ngOnInit(): void {
    this.groupName = this.route.snapshot.paramMap.get('groupName');
    this.serviceService.getSportGroupsList().subscribe((response: string) => {
      this.sportGroupsList = JSON.parse(response) as SportGroupsList[];
      // console.log("onInit"); 
    });
  }
}