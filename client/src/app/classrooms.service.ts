import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { MY_CLASSES } from 'src/utils/queries';
interface Classroom {
  subject: string,
  courseName: string,
  open: boolean,
  getStudentCount: number
  
}
@Injectable({
  providedIn: 'root'
})
export class ClassroomsService {
  classrooms: Classroom[] = []

  constructor(private apollo: Apollo) { }

  getClassrooms() {
    this.apollo.query({
      query: MY_CLASSES
    })
    .subscribe(({data} : {data: any}) => {
      console.log(data.getMyClasses);
      
      this.classrooms = data.getMyClasses
    })

  }
}
