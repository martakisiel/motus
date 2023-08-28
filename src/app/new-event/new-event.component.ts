import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Route } from '@angular/router';
import { NgForm, NgModel } from '@angular/forms';
@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.css']
})
export class NewEventComponent implements OnInit{
date: Date = new Date();  
message: string | undefined;
  http: any;
constructor(private route: ActivatedRoute, http:HttpClient){}
  ngOnInit(): void {
    let date: Date = new Date(this.route.snapshot.params['date'])
console.log(this.date)
  }
  



  onNewEventSubmit(forms: { sport: string, place: string,  date: string, h:string, tel: number, textArea: string, }) {
    //in the value propetrty of ngform object a property with the name of the input element will be created
    //the value that user will enter into each input element will be assign to the proper property
    console.log(forms);
    this.http.post('https://motus-umawianie-default-rtdb.europe-west1.firebasedatabase.app/newEvent.json', forms).subscribe((response:any) => { console.log(response) })
  }
  onNameClicked (): void{
    
    this.message="Dziękujemy za wiadomość!"; //message is a string from header album-name.component passed by $event
  }
  clearFields(sportInput: NgModel, placeInput: NgModel, dateInput:NgModel, hInput:NgModel, telInput:NgModel, textAreaInput:NgModel): void {
    sportInput.reset();
    placeInput.reset();
    dateInput.reset();
    hInput.reset();
    telInput.reset();
    textAreaInput.reset();
  }

}
