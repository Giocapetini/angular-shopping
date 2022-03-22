import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.scss']
})
export class ReceiptComponent implements OnInit {
  receiptItems: any;
  total: number = 0;
  constructor(private service: CartService) {
  }

  ngOnInit(): void {
    this.addCart()
  }

  addCart() {
    this.receiptItems = this.service.cart;
  }

  roundNumber(num: number) {
    return Math.round(num * 100) / 100
  }

  sumArray(array: number[]) {
    const sum = array.reduce((partialSum, a) => partialSum + a, 0);
    return sum;
  }

  calcTotal() {
    this.receiptItems.forEach((element: { selectedAmount: number; sumUntaxed: number; itemValue: number; }) => {

      element.sumUntaxed = this.roundNumber(element.itemValue * element.selectedAmount);
      let numberArray = this.receiptItems.map((element: { sumUntaxed: any; }) =>
        element.sumUntaxed
      );

      this.total = this.sumArray(numberArray);
    });
    return this.roundNumber(this.total);
  }
}
