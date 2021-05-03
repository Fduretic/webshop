import {Injectable} from '@angular/core';
import {WebShopItem} from '../models/items.model';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { WebShopItem } from '../models/items.model';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  
  private databaseURL = 'https://webshop-dfm-default-rtdb.europe-west1.firebasedatabase.app/products.json'
  public itemsList: WebShopItem[];
  public itemsListSubject: BehaviorSubject<WebShopItem[]>;


  constructor(private http: HttpClient) {
    this.itemsList = [];
    this.itemsListSubject = new BehaviorSubject<WebShopItem[]>([]);
  }

  
  getList() {
    return this.http.get<WebShopItem[]>(this.databaseURL);
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
