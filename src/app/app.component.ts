import { Component } from '@angular/core';

export class Product {
  id: number;
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Swag';
  product: Product = {
    id: 1,
    name: 'Sticker'
  };
}
