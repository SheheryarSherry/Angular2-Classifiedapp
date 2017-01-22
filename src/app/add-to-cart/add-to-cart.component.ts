import { Component, OnInit } from '@angular/core';
import {PostingService} from "../posting.service";
import {Add} from "../add";
@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit {
  post:Add[];
  constructor(private service:PostingService) {
    this.post=this.service.getCart();
   }
   deleteFromCart(id){
     this.post[id].addedincart=false;
     this.service.removefromcart(id);

   }

  ngOnInit() {
    (<HTMLTitleElement>document.getElementsByTagName("title")[0]).innerText="your cart";
  }

}
