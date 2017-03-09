import { Component, OnInit } from '@angular/core';

import {APP_BASE_HREF} from '@angular/common';

@Component({
  selector: 'app-login-layout',
  templateUrl: './login-layout.component.html',
  styleUrls: ['./login-layout.component.css']
})
export class LoginLayoutComponent implements OnInit {
  private msg_success: string;
  constructor() { }

  ngOnInit() {

  }

  private success():string {
    this.msg_success = localStorage.getItem('flash-success');
    localStorage.setItem('flash-success', '');
    return this.msg_success;
  }

}
