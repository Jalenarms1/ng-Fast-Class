import { Component, OnInit } from '@angular/core';
import Auth from 'src/utils/auth';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  loggedIn: boolean = Auth.loggedIn() ? true : false

  constructor() { }

  ngOnInit(): void {
  }

  logout() {
    Auth.logout()
  }
}
