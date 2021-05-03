import {Injectable} from '@angular/core';
import {CategoryModel, WebShopItem} from '../models/items.model';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  private databaseURL = 'https://webshop-dfm-default-rtdb.europe-west1.firebasedatabase.app/products.json';
  public itemsList: WebShopItem[];
  public itemsListSubject: BehaviorSubject<WebShopItem[]>;
  public activeFilterSubject: BehaviorSubject<string>;


  constructor(private http: HttpClient) {
    this.itemsList = [];
    this.itemsListSubject = new BehaviorSubject<WebShopItem[]>([]);
    this.activeFilterSubject = new BehaviorSubject<string>(null);
  }


  getList() {
    return this.http.get<WebShopItem[]>(this.databaseURL);
  }

  addItem(item: WebShopItem) {
    console.log(this.itemsList);
    this.itemsList.push(item);
    console.log(this.itemsList);
    this.itemsListSubject.next(this.itemsList);
  }

  changeFilter(category: CategoryModel): void {
    this.activeFilterSubject.next(category.id);
    console.log(category);
  }

  removeItem(item: WebShopItem) {

  }
}
