import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { faArrowLeft, faArrowRight, faTable, faBarcode, faUser, faCalendarTimes, faSearchPlus, faLandmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav-side-bar',
  templateUrl: './nav-side-bar.component.html',
  styleUrls: ['./nav-side-bar.component.less']
})
export class NavSideBarComponent implements OnInit {
  @Input('state') state: string;
  @Output() toggleNavBar: EventEmitter<any> = new EventEmitter();
  toggleIcon = faArrowLeft;
  faTable = faTable;
  faSearchPlus = faSearchPlus;
  faBarcode = faBarcode;
  faUser = faUser;
  faCalendarTimes = faCalendarTimes;
  faLandmark = faLandmark;

  constructor() { }

  ngOnInit() {}

  toggleNavigationBar() {
    this.toggleNavBar.emit();
  }

}
