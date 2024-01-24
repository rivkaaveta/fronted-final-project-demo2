import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FruitType } from '../shared/model/fruit-type';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NgswitchDemoComponent } from '../ngswitch-demo/ngswitch-demo.component';

@Component({
  selector: 'app-ngfor-demo',
  standalone: true,
  imports: [
    CommonModule, MatButtonModule, MatIconModule, NgswitchDemoComponent
  ],
  templateUrl: './ngfor-demo.component.html',
  styleUrl: './ngfor-demo.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgforDemoComponent { 
  fruits = [FruitType.Apple, FruitType.Apple, FruitType.Orange];
  fruitOptions = Object.values(FruitType);

  deleteFruit(index : number) : void {
    this.fruits.splice(index, 1);
  }

  addFruit(fruit : FruitType) : void {
    this.fruits.push(fruit);
  }
}
