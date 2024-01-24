import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FruitType } from '../shared/model/fruit-type';

@Component({
  selector: 'app-ngswitch-demo',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './ngswitch-demo.component.html',
  styleUrl: './ngswitch-demo.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgswitchDemoComponent { 
  fruitsMap = new Map<FruitType, number>([]);

  FruitType = FruitType;

  @Input()
  set fruits(fruitArr : FruitType[]) {
    fruitArr.forEach(f => this.addOrUpdate(f));
  }

  private addOrUpdate(fruit : FruitType) {
    if (!this.fruitsMap.has(fruit)) {
      this.fruitsMap.set(fruit, 1);
    } else {
      let amount = this.fruitsMap.get(fruit);
      this.fruitsMap.set(fruit, amount! + 1);
    }
  }
}
