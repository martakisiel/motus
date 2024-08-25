import { Component } from '@angular/core';
import { AlbumNameComponent } from '../album-name/album-name.component';
import { Photos, ServiceService } from '../service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent {
  pageTitle: string = "Album name"; 
  pictures : Photos[] = [];
  albumName: string | null = null; //!!!!
  albums: AlbumNameComponent[] = [];

  constructor(private route: ActivatedRoute, private serviceservice: ServiceService){}
  ngOnInit(): void{
  
  this.albumName = this.route.snapshot.paramMap.get('albumName');
    this.pageTitle = `${this.albumName}`; //!!!!!!!!tutaj powiazana jest nazwa albumu z nazwą w linku!!!!!!!!!!!!

    this.serviceservice.getPhotos().subscribe((response:string) => { 
      this.pictures = JSON.parse(response) as Photos[];
    });
}
  
}