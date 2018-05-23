import { Component, OnInit } from '@angular/core';
import {UserService} from '../common/services/user.service';
@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css']
})
export class SplashComponent implements OnInit {

  constructor(public userService: UserService) { }

  ngOnInit() {
  }

}
