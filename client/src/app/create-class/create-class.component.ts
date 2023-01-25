import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { ADD_CLASS } from 'src/utils/mutations';

@Component({
  selector: 'app-create-class',
  templateUrl: './create-class.component.html',
  styleUrls: ['./create-class.component.css']
})
export class CreateClassComponent implements OnInit {
  classroom = {
    subject: '',
    courseName: ''
  }

  constructor(private apollo: Apollo, private router: Router) { }

  ngOnInit(): void {
    
  }

  submitClass() {
    console.log({...this.classroom})
    this.apollo.mutate({
      mutation: ADD_CLASS,
      variables: {
        ...this.classroom
      }
    })
    .subscribe(({data}) => {
      console.log(data);
      
    })

    this.clearForm()


  }

  clearForm() {
    this.classroom.subject = ''
    this.classroom.courseName = ''

    this.router.navigate([this.router.url])
  }

}
