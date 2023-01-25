import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-main',
  templateUrl: './dashboard-main.component.html',
  styleUrls: ['./dashboard-main.component.css']
})
export class DashboardMainComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  dirTo(path: string) {
    this.router.navigate([path])
  }
}
