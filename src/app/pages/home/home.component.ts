import {Component, OnInit} from '@angular/core';
import {WebShopItem} from '../../models/items.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public items: WebShopItem[];

  constructor() {
    this.items = [];
  }

  ngOnInit(): void {
  }
}
