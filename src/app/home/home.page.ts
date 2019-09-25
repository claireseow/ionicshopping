import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ActionSheetController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit{
  cart = [];
  items = []; 

  sliderConfig = {
   spaceBetween: 10,
   centeredSlides:true,
   slidesPerView:1.6
  }

  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit() {
    this.cart = this.cartService.getCart();
    this.items = this.cartService.getProducts();
  }

  addToCart(product) {
    this.cartService.addProduct(product);
  }

  openCart() {
    this.router.navigate(['cart'])
  }
}


//   carts = []
//   constructor(private cartService: CartService, private actionSheetCtrl: ActionSheetController, private navCtrl: NavController) {}

//   ngOnInit(){
//     this.cartService.carts.subscribe(carts => {
//       this.carts = carts
//     })
//   }

//   onNavigateToCart(id){
//     this.navCtrl.navigateForward("/carts/" + id)
//   }

//   onClickMore(event, cart){
//     event.stopPropagation()
//     this.actionSheetCtrl.create({
//       header: "What do you want to do?",
//       buttons: [
//         {
//           text: "Go To",
//           handler: () => {
//             this.navCtrl.navigateForward("/carts/" + cart.id)
//           }
//         },
//         {
//           text: "Remove",
//           handler: () => {
//             this.cartService.remove(cart.id)
//           }
//         },
//         {
//           text: "Favourite",
//           handler: () => {
//             this.cartService.favourite(cart.id)
//           } 
//         }
//       ]
//     }).then(actionSheet => {
//       actionSheet.present()
//     })

//   }

// }
