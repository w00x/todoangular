import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../../service/session.service';
import { User } from '../../../model/user';
import { Router } from '@angular/router';
import { NgForm }    from '@angular/forms';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [SessionService]
})
export class AccountComponent implements OnInit {
  model: any = {};
  error: string;

  constructor(private router: Router, private sessionService: SessionService) { }

  ngOnInit() {
  }

  createAccount() {
    this.sessionService.createAccount(this.model.email, this.model.password, this.model.password_confirmation).subscribe(
      service => {
        if (service !== false) {
            localStorage.setItem('flash-success', 'Cuenta creada correctamente');
            this.router.navigate(['/login']);
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
