import { Component } from '@angular/core';
import { Person } from '../shared/model/person';
import { PersonsService } from '../services/perons.service';
import { PersonCardComponent } from "../person-card/person-card.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-team-view',
    standalone: true,
    templateUrl: './team-view.component.html',
    styleUrl: './team-view.component.css',
    imports: [PersonCardComponent,CommonModule]
})
export class TeamViewComponent {
  allPersons : Person[] = [];
  constructor(private peronService : PersonsService) {}
  ngOnInit(): void {
  this.allPersons = this.peronService.list();
  }
 
}
