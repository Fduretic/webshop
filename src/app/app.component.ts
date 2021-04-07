import {Component} from '@angular/core';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons/faShoppingCart';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'web-shop';
  public faCart = faShoppingCart;
  public showCart: boolean;

  constructor() {
    this.showCart = false;
  }

  public toggleCart(): void {
    this.showCart = !this.showCart;
  }
}
