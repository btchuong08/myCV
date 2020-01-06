import { Component, OnInit } from '@angular/core';
import counterUp from 'counterup2'

import Scrollbar from 'smooth-scrollbar';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  counterStart: number = 10;
  name: boolean = true;
  loading: boolean = true;
  age: boolean = false;
  show: boolean = true;
  fade: boolean = true;
  item = 'profile';
  clear: boolean = false;
  getItem = (data) => {
    this.clear = true;
    this.show = false;
    this.item = data;
    this.fade = false;


    setTimeout(() => {
      this.show = true;

    }, 500);

    setTimeout(() => {
      this.clear = false
    }, 800);


    setTimeout(() => {
      this.fade = true;

    }, 900);
  }

  hireMe = () => {
    window.open('mailto:thechuong0806@gmail.com?subject=Hiring&body=Front End Developer ', 'email')
  }

  constructor() { }

  ngOnInit() {


    Scrollbar.init(document.querySelector('#my-scrollbar'));
    setTimeout(() => {
      this.loading = false
    }, 2100);


    counterUp(document.querySelector('.counter'))
  }

}
