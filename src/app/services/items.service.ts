import {Injectable} from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { WebShopItem } from '../models/items.model';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  public itemsList: WebShopItem[];
  public itemsListSubject: BehaviorSubject<WebShopItem[]>;


  constructor() {
    this.itemsList = [];
    this.itemsListSubject = new BehaviorSubject<WebShopItem[]>([]);
    
  }

    addItem (item: WebShopItem) {
      console.log(this.itemsList);
      this.itemsList.push(item);
      console.log(this.itemsList);
      this.itemsListSubject.next(this.itemsList);
     
      
    }

    removeItem(item: WebShopItem) {

    }

  
}
