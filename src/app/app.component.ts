
import { Component, OnInit } from '@angular/core';
import Scrollbar from 'smooth-scrollbar';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myCV';

  ngAfterViewInit() {
    Scrollbar.initAll()
  }
}
