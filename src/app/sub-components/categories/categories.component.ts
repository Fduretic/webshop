import { Component, OnInit } from '@angular/core';
import {CategoryModel, selectedCategory} from '../../models/items.model';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  public categories: CategoryModel [];
  public select: selectedCategory [];

  constructor() {
    this.categories = [
      {
        id: 'all',
        name: 'Sve',
        iconId: '',
      },
      {
        id: 'clothes',
        name: 'Odjeća',
        iconId: '',
      },
      {
        id: 'kitchen',
        name: 'Kuhinja',
        iconId: '',
      },
      {
        id: 'beauty',
        name: 'Beauty',
        iconId: '',
      },
    ]

    this.select = [
      {
        id:'kch',
        name:'Kuhinja',
      },
      {
        id:'clt',
        name:'Odjeća i obuća',
      },
      {
        id:'bty',
        name:'Beauty',
      }
    ]
   }

  ngOnInit(): void {
  }

}
