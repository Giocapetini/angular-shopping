import { AfterContentInit, Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import mockCart from '../../../mocks/items.json';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss']
})
export class ListItemsComponent implements OnInit {

  list = mockCart;
  cart: Array<object> = [];

  constructor(private cartservice: CartService) {
    this.pushItem();
  }

  ngOnInit(): void {

  }

  pushItem() {
    this.cartservice.cart = this.list;
  }



}
