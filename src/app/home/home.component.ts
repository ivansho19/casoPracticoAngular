import { Component, OnInit } from '@angular/core';
import { ILoginObject } from '../login/commons/services/model/login.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user:String;
  constructor() { }

  ngOnInit() {
     this.user = JSON.parse(localStorage.getItem('user')).Message;
  }

}
