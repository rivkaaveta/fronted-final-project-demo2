import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-ngclass-demo',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './ngclass-demo.component.html',
  styleUrl: './ngclass-demo.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgclassDemoComponent { 
  isSpecial= true;
  isSuccess= true;
}
