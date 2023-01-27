import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { ADD_CLASS } from 'src/utils/mutations';
import { MY_CLASSES } from 'src/utils/queries';
import { ClassroomsService } from '../classrooms.service';
import { DashboardReportComponent } from '../dashboard-report/dashboard-report.component';


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

  constructor(private apollo: Apollo, private router: Router, private classService: ClassroomsService) { 
  
  }

  

  ngOnInit(): void {
    
  }

  submitClass() {
    this.apollo.mutate({
      mutation: ADD_CLASS,
      variables: {
        ...this.classroom
      }
    })
    .subscribe((data: any) => {
      location.reload()
      
    })
    // this.clearForm()

  }

  // clearForm() {
  //   this.classroom.subject = ''
  //   this.classroom.courseName = ''

  //   this.router.navigate([this.router.url])
  // }
}
