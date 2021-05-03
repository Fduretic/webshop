import {Component, OnInit} from '@angular/core';
import {CategoryModel, selectedCategory} from '../../models/items.model';
import {ItemsService} from '../../services/items.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  public categories: CategoryModel [];
  public select: selectedCategory [];
  public selectedCategory: CategoryModel;

  constructor(private itemsService: ItemsService) {
    this.categories = [
      {
        id: 'all',
        name: 'Sve',
        iconId: '',
      },
      {
        id: 'clt',
        name: 'Odjeća',
        iconId: '',
      },
      {
        id: 'kch',
        name: 'Kuhinja',
        iconId: '',
      },
      {
        id: 'bty',
        name: 'Beauty',
        iconId: '',
      },
    ];
  }

  ngOnInit(): void {
  }

  public selectCategory(category: CategoryModel): void {
    this.selectedCategory = category;
    this.itemsService.changeFilter(category);
  }
}
