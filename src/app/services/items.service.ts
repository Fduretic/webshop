import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {WebShopItem} from '../models/items.model';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  public itemsSubject: BehaviorSubject<WebShopItem[]>;
  private itemsList: WebShopItem[];

  constructor(private http: HttpClient) {
    this.itemsSubject = new BehaviorSubject([]);
    this.itemsList = [];
  }

  public addItem(item: WebShopItem): void {
    this.itemsList.push(item);
    this.itemsSubject.next(this.itemsList);
    return;
  }
}
