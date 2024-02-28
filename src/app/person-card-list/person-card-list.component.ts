import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-person-card-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './person-card-list.component.html',
  styleUrl: './person-card-list.component.css'
})
export class PersonCardListComponent {

}
