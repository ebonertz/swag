import { Component } from '@angular/core';
import { createClient } from '@commercetools/sdk-client'
import { createAuthMiddlewareForClientCredentialsFlow } from '@commercetools/sdk-middleware-auth'
import { createHttpMiddleware } from '@commercetools/sdk-middleware-http'
import { createRequestBuilder } from '@commercetools/api-request-builder'

var config = {
  host: '',
  projectKey: '',
  credentials: {
    clientId: '',
    clientSecret: '',
  },
}

var host = {
  host: '',
  }

export class Product {
  id: number;
  name: string;
  price: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Swag';
  products = PRODUCTS;
  selectedProduct: Product;

  onSelect(product: Product): void {
    this.selectedProduct = product;
  }
};

const PRODUCTS: Product [] = [
{id:1, name:'Sticker', price:2},
{id:2, name:'Pen', price:3},
{id:3, name:'Bandana', price:5},
{id:4, name:'API Commerce', price:7}

];
