import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-support-button',
  templateUrl: './support-button.component.html',
  styleUrls: ['./support-button.component.css']
})
export class SupportButtonComponent {
  message: string | undefined;
  constructor(private http: HttpClient, private clipboard: Clipboard, public matSnackBar:MatSnackBar) { }
  
  copyText(textToCopy: string) {
    this.clipboard.copy(textToCopy);
    }
    openSnackBar(message: string, action: string) {
      this.matSnackBar.open(message, action, {
        duration: 2000, // Duration in milliseconds
      });
    }
    //metoda wywołująca 'skopowano do schowka'
    showNotification() {
      this.openSnackBar('Skopiowano do schowka', 'zamknij');
    }
  onFormSubmit(forms: { fname: string, lname: string, tel: number, email: string, desc: string, file: File, }) {
    //in the value propetrty of ngform object a property with the name of the input element will be created
    //the value that user will enter into each input element will be assign to the proper property
    console.log(forms);
    this.http.post('https://motus-9743d-default-rtdb.europe-west1.firebasedatabase.app/form.json', forms).subscribe((response) => { console.log(response) })
  }
  onNameClicked(): void {

    this.message = "Dziękujemy za wiadomość! Jesteśmy w kontakcie:)"; //message is a string from header album-name.component passed by $event
  }
  clearFields(firstNameInput: NgModel, lastNameInput: NgModel, emailInput: NgModel, descInput: NgModel): void {
    firstNameInput.reset();
    lastNameInput.reset();
    emailInput.reset();
    descInput.reset();

  }
}
