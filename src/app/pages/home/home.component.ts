import {Component, OnInit} from '@angular/core';
import {WebShopItem} from '../../models/items.model';
import {ItemsService} from '../../services/items.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public items: WebShopItem[];
  public selectedCategoryId: string;

  constructor(private appService: ItemsService,
              private itemsService: ItemsService) {
    this.items = [];
  }

  ngOnInit(): void {
    this.appService.getList()
      .subscribe((response) => {
        this.items = response;
      },
        error => console.log(error));

    this.itemsService.activeFilterSubject.subscribe(
      categoryId => this.selectedCategoryId = categoryId);
  }

  onAddToCart(item: WebShopItem) {
    this.itemsService.addItem(item);
  }
}
