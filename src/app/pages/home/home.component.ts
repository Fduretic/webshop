import {Component, OnInit} from '@angular/core';
import {WebShopItem} from '../../models/items.model';
import { ItemsService } from "../../services/items.service";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public items: WebShopItem[];

  constructor(private appService : ItemsService) {
    this.items = [];
  }

  ngOnInit(): void {
    this.appService.getList()
    .subscribe((response) => this.items = response, 
    error => console.log(error));
      
  }
}
