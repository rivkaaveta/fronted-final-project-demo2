import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Person } from '../shared/model/person';
import { LoggingService } from '../services/logging.service';
import { PeronsService } from '../services/perons.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forms-demo',
  standalone: true,
  imports: [
    CommonModule, FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule
  ],
  templateUrl: './forms-demo.component.html',
  styleUrl: './forms-demo.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormsDemoComponent implements OnInit{
  @Input()
  id? : string;
  currentPerson! : Person;

  constructor(private loggingService : LoggingService,
    private personsService : PeronsService,
    private router : Router) {}

  ngOnInit(): void {
    if (this.id) {
      this.loggingService.log("Editing existing person");

      let numericId = parseInt(this.id);
      let existingPerson = this.personsService.get(numericId);

      if (existingPerson) {
        this.currentPerson = existingPerson;
      } else {
        this.currentPerson = new Person(0, "", "", "");
      }
    } else {
      this.loggingService.log("New person");
      this.currentPerson = new Person(0, "", "", "");
    }
  } 

  submitRegistrationForm() {
    console.log("Form submitted!");
    console.log("Person object:" + JSON.stringify(this.currentPerson));

    if (this.id) {
      this.personsService.update(this.currentPerson);
    } else {
      this.personsService.add(this.currentPerson);
    }

    this.router.navigate(["/persons"]);
  }
}
