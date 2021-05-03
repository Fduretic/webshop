import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {HomeComponent} from './pages/home/home.component';
import {CartPreviewComponent} from './sub-components/cart-preview/cart-preview.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {AuthService} from './services/auth.service';
import {ItemsService} from './services/items.service';
import {UserComponent} from './pages/user/user.component';
import {RegistrationComponent} from './pages/registration/registration.component';
import {CategoriesComponent} from './sub-components/categories/categories.component';
import {AngularFireModule} from '@angular/fire';
import { FilterPipe } from './pipes/filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartPreviewComponent,
    UserComponent,
    RegistrationComponent,
    CategoriesComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    FontAwesomeModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyC8eDSC9UeIWcgaclzqpUdpPV6j2Uc8BHw',
      authDomain: 'webshop-dfm.firebaseapp.com',
      databaseURL: 'https://webshop-dfm-default-rtdb.europe-west1.firebasedatabase.app',
      projectId: 'webshop-dfm',
      storageBucket: 'webshop-dfm.appspot.com',
      messagingSenderId: '440979036436',
      appId: '1:440979036436:web:c993825a296aac95f40a01'
    })
  ],
  providers: [
    AuthService,
    ItemsService],

  bootstrap: [AppComponent]
})
export class AppModule {
}
