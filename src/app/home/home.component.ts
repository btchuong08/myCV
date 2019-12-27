import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  
  name: boolean = true;
  hide: boolean = true;
  age: boolean = false;
  show: boolean = true;
  fade: boolean = true;
  item = 'profile';
  clear: boolean = false;
  getItem = (data) => {
    this.clear = true;
    this.show = false;
    this.item = data;
    this.fade=false;
   

    setTimeout(() => {
      this.show = true;

    }, 500);

    setTimeout(() => {
      this.clear = false
    }, 800);

    setTimeout(() => {
      this.hide = true;
    
    }, 850);
    setTimeout(() => {
      this.fade = true;
    
    }, 900);
  }



  constructor( ) { }

  ngOnInit(
 
  ) {
   
    
  }

}
