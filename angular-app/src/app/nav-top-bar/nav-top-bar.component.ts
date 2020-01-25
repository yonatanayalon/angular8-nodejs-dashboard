import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav-top-bar',
  templateUrl: './nav-top-bar.component.html',
  styleUrls: ['./nav-top-bar.component.less']
})
export class NavTopBarComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }
}
