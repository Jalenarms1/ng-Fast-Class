import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Apollo, MutationResult } from 'apollo-angular';
import Auth from 'src/utils/auth';
import { ADD_USER, LOGIN_USER } from 'src/utils/mutations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: {username:string,password:string, email:string} = {
    username: '',
    email:'',
    password: ''
  }
  login: boolean = true

  

  constructor(private apollo: Apollo) { }

  ngOnInit(): void {
  }

  toggleLogin() {
    this.login = !this.login
  }

  addUser() {
    this.apollo.mutate({
      mutation: ADD_USER,
      variables: {
        ...this.user
      }
    })
    .subscribe((data: any) => {
      Auth.login(data.data.addUser.token)
    })
  }

  loginUser() {
    this.apollo.mutate({
      mutation: LOGIN_USER,
      variables: {
        username: this.user.username,
        password: this.user.password
      }
    })
    .subscribe((data: any) => {
      Auth.login(data.data.login.token)
    })
  }

}
