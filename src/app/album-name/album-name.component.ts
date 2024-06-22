import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AlbumsNames, ServiceService } from '../service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-album-name',
  templateUrl: './album-name.component.html',
  styleUrls: ['./album-name.component.css']
})
export class AlbumNameComponent implements OnInit {

  @Input() header:any ="header of album from album-name-comp";
  
  @Output() nameClicked:EventEmitter<string> = new EventEmitter<string>();
  // constructor(){}
  albumsNames: AlbumsNames[] = [];
  
  constructor(private route:ActivatedRoute, private serviceService:ServiceService){
 
  }
   ngOnInit(): void { 
    this.serviceService.getAlbumsNames().subscribe((response:string) => { 
      this.albumsNames = JSON.parse(response) as AlbumsNames[];
    });
  }
  onClick():void{
    this.nameClicked.emit(`${this.header}`)
    //this.nameClicked.emit(`The album called ${this.header} was clicked`)
    console.log(`The album called ${this.header} was clicked`) //header przechowuje tutaj nazwę zdjęcia wyjątą z tablicy Photos
  }
  
}