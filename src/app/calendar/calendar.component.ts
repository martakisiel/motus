import { Component } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { Pipe } from '@angular/core';
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  // standalone: true,
  // imports: [MatCardModule, MatDatepickerModule, MatNativeDateModule],
})
export class CalendarComponent {
  selectedDate: Date | null | undefined = new Date();
  clicked(){
    console.log('klik'+ this.selectedDate)
   }
}
