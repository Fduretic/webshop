import {Injectable} from '@angular/core';
import {WebShopItem} from '../models/items.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  
  private databaseURL = 'https://webshop-dfm-default-rtdb.europe-west1.firebasedatabase.app/products.json'

  constructor(private http: HttpClient) {  
  }

  getList() {
    return this.http.get<WebShopItem[]>(this.databaseURL);
    
  }

}
