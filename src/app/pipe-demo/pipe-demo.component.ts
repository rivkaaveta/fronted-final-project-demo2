import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './pipe-demo.component.html',
  styleUrl: './pipe-demo.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PipeDemoComponent { }
