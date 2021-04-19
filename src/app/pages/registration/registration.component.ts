import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  public email: string;
  public password: string;

  constructor(private authService: AuthService) {

  }

  ngOnInit(): void {
  }

  public register() {
    // HINT: Priprema za poziv registracije iz AuthService-a
  }

}
