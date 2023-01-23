import { Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { TEST_GET } from 'src/utils/queries';
import { Router } from '@angular/router';
import Auth from 'src/utils/auth';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  keywords: any = '';

  
  constructor(private apollo: Apollo, private router: Router) { 
    
  }
  
  ngOnInit(): void {
    if(Auth.loggedIn()) {
      this.router.navigate(['user'])
    }
  }
  


  

}
