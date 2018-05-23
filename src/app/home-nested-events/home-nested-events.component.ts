import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home-nested-events',
  templateUrl: './home-nested-events.component.html',
  styleUrls: ['./home-nested-events.component.css']
})
export class HomeNestedEventsComponent implements OnInit {

  @Input() nestedEvents: any = [];

  isEmptyObject(obj) {
    return (obj && (Object.keys(obj).length === 0));
  }
  constructor() { }

  ngOnInit() {
  }

}
