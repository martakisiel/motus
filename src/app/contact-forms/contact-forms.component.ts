import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { NgForm, NgModel } from '@angular/forms';
import {ClipboardModule} from '@angular/cdk/clipboard';

@Component({
  selector: 'app-contact-forms',
  templateUrl: './contact-forms.component.html',
  styleUrls: ['./contact-forms.component.css'],
})
export class ContactFormsComponent {
  message: string | undefined;
  constructor(private http: HttpClient) { }

  onFormSubmit(forms: { fname: string, lname: string, tel: number, email: string, desc: string, file: File, }) {
    //in the value propetrty of ngform object a property with the name of the input element will be created
    //the value that user will enter into each input element will be assign to the proper property
    console.log(forms);
    this.http.post('https://motus-9743d-default-rtdb.europe-west1.firebasedatabase.app/form.json', forms).subscribe((response) => { console.log(response) })
  }
  onNameClicked (): void{
    
    this.message="Dziękujemy za wiadomość! Jesteśmy w kontakcie:)"; //message is a string from header album-name.component passed by $event
  }
  clearFields(firstNameInput: NgModel, lastNameInput: NgModel, emailInput:NgModel, descInput:NgModel): void {
    firstNameInput.reset();
    lastNameInput.reset();
    emailInput.reset();
    descInput.reset();

  }
  onFileChange(event: any) {
    if (event?.target) {
      const file: File = event.target.files[0];
      const reader = new FileReader();
  
      reader.onload = (e) => {
        const dataURL = e.target?.result as string;
        console.log('Data URL:', dataURL);
        // You can use the dataURL to display an image preview or send the data to the server.
      };
  
      reader.readAsDataURL(file);
  }
  
  
  
  
  
  
}
}
