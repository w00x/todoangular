import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../../service/session.service';
import { User } from '../../../model/user';
import { Router } from '@angular/router';
import { NgForm }    from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [SessionService]
})
export class LoginComponent implements OnInit {
  model: any = {};
  error: string;

  constructor(private router: Router,private sessionService: SessionService) { }

  ngOnInit() {
  }

  login() {
    this.sessionService.create(this.model.email, this.model.password).subscribe(
      service => {
        if (service === true) {
            // login successful
            this.router.navigate(['/']);
        } else {
            // login failed
            this.error = 'Email o contraseña invalidos';
        }
      },
      err => {
          console.log(err);
      }
    );
  }

}
