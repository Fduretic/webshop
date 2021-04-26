import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  public email: string;
  public password: string;

  constructor(private authService: AuthService,
    private router: Router) {

  }

  ngOnInit(): void {
  }

  public register() {
    this.authService.register(this.email, this.password).then(
      (res) => {
        this.password = '';
        this.email = '';
        this.authService.assignUser(res);
        console.log(res);
        
      });

    
    // HINT: Priprema za poziv registracije iz AuthService-a
  }

 

}
