import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'pk-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide:boolean
  constructor(private router:Router) {
    this.hide = true
  }

  ngOnInit() {
  }

  goToRegister() {
    this.router.navigate(['./register']);
  }

}
