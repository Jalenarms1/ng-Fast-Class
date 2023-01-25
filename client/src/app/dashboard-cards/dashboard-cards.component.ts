import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-cards',
  templateUrl: './dashboard-cards.component.html',
  styleUrls: ['./dashboard-cards.component.css']
})
export class DashboardCardsComponent implements OnInit {
  path: string = ''

  constructor(private router: Router) { 
    this.path = this.router.url
   }

  ngOnInit(): void {
  }

  dirTo(path: string) {
    this.router.navigate([path])
  }
}
