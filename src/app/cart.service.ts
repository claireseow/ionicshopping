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
    {id:0, name: 'Skirt',price: '55'},
    {id:1, name: 'Blouse',price: '30'}
  ]
 },
 {category: 'Man Wear',
 expanded: true,
 products: [
   {id:0, name: 'T-shirt',price: '20'},
   {id:1, name: 'Pants',price: '60'}
 ]
 },
 {category: 'Kid Wear',
 expanded: true,
 products: [
   {id:0, name: 'T-shirt',price: '15'},
   {id:1, name: 'Pants',price: '30'},
   {id:2, name: 'Dress',price: '50'}
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
}

//    carts = new BehaviorSubject(
//     {
//       id: 1,
//       // imageUrl: "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y",
//       title: "Wall Paper",
//       Price: "100",
//       Remark: "Imported from Korea",
//       favourite: false      
//       }
//      )
//   constructor() { }
//   remove(id){
//     let filteredCarts = this.carts.getValue().filter(cart => {
//       return cart.id !== id
//     })
//     this.carts.next(filteredCarts)
//   }

//   favourite(id){
//      let currentCarts = this.carts.getValue()
//      let result = []

//      for(let cart of currentCarts){
//        if(cart.id === id){
//         cart.favourite = true
//        }
//        result.push(cart)
//      }

//      this.carts.next(result)
//   }
// }
