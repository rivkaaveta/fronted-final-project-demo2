import { Component,Input } from '@angular/core';
import { 
   MatCardModule } from '@angular/material/card';
import { Person } from '../shared/model/person';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-person-card',
  standalone: true,
  imports: [MatCardModule, CommonModule ],
  templateUrl: './person-card.component.html',
  styleUrl: './person-card.component.css'
})
export class PersonCardComponent {
  @Input()
  currentPerson? : Person;
 }
 