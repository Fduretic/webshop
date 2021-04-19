import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';
import {Router} from '@angular/router';
import {AngularFireAuth} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user = new Subject<any>();

  constructor(private http: HttpClient,
              private router: Router,
              private fireAuth: AngularFireAuth) {
  }

  public login(email: string, password: string): Promise<any> {
    return this.fireAuth.signInWithEmailAndPassword(email, password);
  }

  public logOut(): Promise<any> {
    this.assignUser(null);
    this.router.navigate(['/home']);
    return this.fireAuth.signOut();
  }

  public register(email: string, password: string): Promise<any> {
    // HINT: Ova funkcija vraća tip podatka Promise (Sličan je Subject tipu). Pogledati kako se već koristi
    //       u projektu. Ako bude nedoumica, pitati Google. Ako i dalje bude pitanja, slobodno cimnite @Fduretic
    return this.fireAuth.createUserWithEmailAndPassword(email, password);
  }

  public assignUser(user: any) {
    // Ova funkcija putem user BehaviorSubject-a odašilje vrijednost koju prima kao parametar
    // Na primjer kada se korisnik ulogira, odašilje podatke usera koje primi u response-u
    // ili na sign out šalje null vrijednost, tj. poništava vrijednost koju trenutno ima spremljenu
    this.user.next(user);
  }
}
