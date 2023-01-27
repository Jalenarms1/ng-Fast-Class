import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { MY_CLASSES } from 'src/utils/queries';
import { ClassroomsService } from '../classrooms.service';

interface Classroom {
  subject: string,
  courseName: string,
  open: boolean,
  getStudentCount: number
}

@Component({
  selector: 'app-dashboard-report',
  templateUrl: './dashboard-report.component.html',
  styleUrls: ['./dashboard-report.component.css']
})
export class DashboardReportComponent implements OnInit {
  classrooms: Classroom[] = [];

  constructor(private apollo: Apollo, public classService: ClassroomsService) { 
    this.classService.getClassrooms()
    
    
    
  }
  
  ngOnInit(): void {
    console.log(this.classService.classrooms);
  }

  getClasses() {
    this.apollo.query({
      query: MY_CLASSES
    })
    .subscribe(({data}: {data: any}) => {
      console.log(data.getMyClasses);
      this.classrooms = data.getMyClasses
      
    })
  }

}
