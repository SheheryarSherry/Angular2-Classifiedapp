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

  ngOnInit() {
  }

}
