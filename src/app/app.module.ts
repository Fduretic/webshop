import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './pages/home/home.component';
import { CartPreviewComponent } from './sub-components/cart-preview/cart-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartPreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
