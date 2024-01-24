import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FruitType } from '../shared/model/fruit-type';

@Component({
  selector: 'app-router-param-demo',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './router-param-demo.component.html',
  styleUrl: './router-param-demo.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RouterParamDemoComponent { 
  fruits = [FruitType.Apple, FruitType.Banana, FruitType.Banana, FruitType.Pear];
  currentFruit = FruitType.Apple;

  @Input()
  set id(id : number) {
    this.currentFruit = this.fruits[id];
  }
}
