import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  selectedItems = [];
  total = 0;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    let items = this.cartService.getCart();
    let selected = {};

    for (let obj of items) {
      if (selected[obj.id]) {
        selected[obj.id].count++;
      } else {
        selected[obj.id] = { ...obj, count: 1 };
      }
    }

    this.selectedItems = Object.keys(selected).map(key=> selected[key])
    console.log('items:',this.selectedItems);
    this.total=this.selectedItems.reduce((a,b)=>a+(b.count * b.price),0);
  }

  // removeProduct(product) {
  //   this.selectedItems.reduce(product);
  // }
  
  onDeleteItem(i) {
    const index = this.selectedItems.indexOf(i);
    if (index > -1) {
    this.cartService.deleteFromCart(index);
    this.selectedItems.splice(index, 1);
    console.log(this.selectedItems);
    }
    this.total = this.selectedItems.reduce((a, b) => a + (b.count * b.price), 0);
    }

}


