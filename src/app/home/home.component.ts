import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FruitType } from '../shared/model/fruit-type';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule, RouterModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent { 
}
