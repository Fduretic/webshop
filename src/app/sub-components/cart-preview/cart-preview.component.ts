import {Component, OnInit} from '@angular/core';
import {ItemsService} from 'src/app/services/items.service';
import {WebShopItem} from '../../models/items.model';

@Component({
  selector: 'app-cart-preview',
  templateUrl: './cart-preview.component.html',
  styleUrls: ['./cart-preview.component.scss']
})
export class CartPreviewComponent implements OnInit {

  public itemsList: WebShopItem[];
  public cartTotal: number;

  get sum() {
    return this.itemsList.map(x => x.price).reduce((a, b) => a + b, 0);
  }

  constructor(private itemsService: ItemsService) {
    this.itemsList = [];
    this.cartTotal = 0;
  }

  ngOnInit() {
    this.itemsService.itemsListSubject.subscribe((data) => {
      console.log(data);
      this.cartTotal = 0;
      this.itemsList = data;
      this.itemsList.forEach(item => {
        this.cartTotal += item.price;
      });
    });
  }
}


