import { Component, OnInit } from '@angular/core';
import { Demo } from './demo';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  hidden = false
  constructor() { }

  title = "TaskTrack"

  obj: Demo = {
    id: 5,
    name: 'Jalen',
    spotsOpen: 1
  }
  

  ngOnInit(): void {
  }

  toggle () {
    this.hidden = !this.hidden
  }

}
