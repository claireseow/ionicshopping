import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

private data = [
  {category: 'Woman Wear',
  expanded: true,
  products: [
    {id:0, name: 'Skirt',price: '55', image:'../assets/img/wtshirt.jpg' },
    {id:1, name: 'Blouse',price: '30', image:'../assets/img/wtshirt.jpg' }
  ]
 },
 {category: 'Man Wear',
 expanded: true,
 products: [
   {id:0, name: 'T-shirt',price: '20', image:'../assets/img/wtshirt.jpg'},
   {id:1, name: 'Pants',price: '60',image:'../assets/img/wtshirt.jpg'}
 ]
 },
 {category: 'Kid Wear',
 expanded: true,
 products: [
   {id:0, name: 'T-shirt',price: '15',image:'../assets/img/wtshirt.jpg'},
   {id:1, name: 'Pants',price: '30',image:'../assets/img/wtshirt.jpg'},
   {id:2, name: 'Dress',price: '50',image:'../assets/img/wtshirt.jpg'}
 ]
 }
];
 private cart = [];
 constructor() {}

 getProducts(){
   return this.data;
 }

 getCart(){
  return this.cart;
}

addProduct(product) {
  this.cart.push(product);
}

// removeProduct(product) {
//   this.cart.reduce(product);
// }

deleteFromCart(i) {
  console.log(i);
  if (i === 0) {
  this.cart.shift();
  } else {
  this.cart.splice(i, 1);
  }
  }


}
