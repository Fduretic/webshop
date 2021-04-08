import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';
import {User} from '../models/user.model';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user = new Subject<User>();

  constructor(private http: HttpClient) {

  }

  public logIn(email: string, password: string) {
    return this.http.post<any>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC8eDSC9UeIWcgaclzqpUdpPV6j2Uc8BHw', {
      email,
      password,
      returnSecureToken: true
    }).pipe(
      tap(response => {
        const expirationDate = new Date(new Date().getTime() + +response.expiresIn * 1000);
        const user = new User(response.email, response.localId, response.idToken, expirationDate);
        this.user.next(user);
      })
    );
  }

  public logOut() {
    this.user.next(null);
  }
}
