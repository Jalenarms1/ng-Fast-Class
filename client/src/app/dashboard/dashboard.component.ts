import { Component, OnInit } from '@angular/core';
import Auth from 'src/utils/auth';
import { Router } from '@angular/router';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router) { 
    
  }

  ngOnInit(): void {
    if(!Auth.loggedIn()) {
      this.router.navigate([''])
    }
  }

  

}
