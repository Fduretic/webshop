import {Component, OnInit} from '@angular/core';
import { ItemsService } from 'src/app/services/items.service';
import {WebShopItem} from '../../models/items.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public items: WebShopItem[];

  constructor( private itemsService: ItemsService) {

   this.items = []
    
  }

  ngOnInit() {
    
  }

  onAddToCart(item: WebShopItem) {
    this.itemsService.addItem(item);
  }

 

}
