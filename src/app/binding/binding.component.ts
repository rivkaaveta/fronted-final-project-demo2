import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { LoggingService } from '../services/logging.service';

@Component({
  selector: 'app-binding',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './binding.component.html',
  styleUrl: './binding.component.css'
})
export class BindingComponent {
  productName = "iPhone 15"
  price = 5000
  quantity = 5
  isDisabled = true

  constructor(private loggingService : LoggingService) {}

  getDateAsString() : string {
    const today = new Date();
    return today.toLocaleDateString();
  }

  changeDisable() : void {
    this.isDisabled = !this.isDisabled;
    this.loggingService.log("change disable: " + this.isDisabled);
  }
}
