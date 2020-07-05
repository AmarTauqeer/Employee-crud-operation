import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  isTrue: boolean = false;
  constructor() {}

  ngOnInit(): void {}
  changeTheme() {
    this.isTrue = !this.isTrue;
  }
}
