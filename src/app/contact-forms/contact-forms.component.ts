import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-contact-forms',
  templateUrl: './contact-forms.component.html',
  styleUrls: ['./contact-forms.component.css']
})
export class ContactFormsComponent {
  message: string | undefined;
  constructor(private http: HttpClient) { }

  onFormSubmit(forms: { fname: string, lname: string, tel: number, email: string, desc: string }) {
    //in the value propetrty of ngform object a property with the name of the input element will be created
    //the value that user will enter into each input element will be assign to the proper property
    console.log(forms);
    this.http.post('https://formsexcercise-default-rtdb.europe-west1.firebasedatabase.app/form.json', forms).subscribe((response) => { console.log(response) })
  }
  onNameClicked (): void{
    
    this.message="Message has been sent!"; //message is a string from header album-name.component passed by $event
  }
  clearFields(firstNameInput: NgModel, lastNameInput: NgModel, emailInput:NgModel, descInput:NgModel): void {
    firstNameInput.reset();
    lastNameInput.reset();
    emailInput.reset();
    descInput.reset();
  }
}

