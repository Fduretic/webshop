import {Component, OnInit} from '@angular/core';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons/faShoppingCart';
import {AuthService} from './services/auth.service';
import {faUser} from '@fortawesome/free-solid-svg-icons/faUser';
import {faBars} from '@fortawesome/free-solid-svg-icons/faBars';
import {CategoryModel} from './models/items.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = 'web-shop';
  public faCart = faShoppingCart;
  public faUser = faUser;
  public faBars = faBars;
  public showCart: boolean;
  public showCat: boolean;
  public isAuthenticated: boolean;
  public email: string;
  public password: string;
  categories: CategoryModel[];

  constructor(private authService: AuthService) {
    this.categories = [];
    this.showCart = false;
    this.isAuthenticated = false;
    this.showCat = false;
  }

  ngOnInit(): void {
    this.authService.user.subscribe((user) => {
      this.isAuthenticated = !!user;
    });
  }

  public logIn() {
    this.authService.login(this.email, this.password).then(
      (res) => {
        this.password = '';
        this.email = '';
        this.authService.assignUser(res);
        console.log(res);
      });
  }

  onlogOut() {
    this.authService.logOut().then(
      (res) => {
        console.log(res);
      });
  }

  public toggleCart(): void {
    this.showCart = !this.showCart;
  }

  public toggleCat(): void {
    this.showCat = !this.showCat;
  }
}
