import { Component, ElementRef, ViewChild, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'Customer Dashboard';
  sideBarState = '';

  @ViewChild("ngWrapper", { static: true }) wrapper: ElementRef;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.setNavBarState();
  }

  setNavBarState() {
    if(window.innerWidth < 961) {
      this.sideBarState = 'close';
    }
    else {
      this.sideBarState = 'open';
    }
  }

  ngOnInit() {
    this.setNavBarState();
  }

  
  toggleSideMenu() {
    this.wrapper.nativeElement.querySelector('#sidebar-wrapper').classList.toggle('open');
    this.wrapper.nativeElement.querySelector('#sidebar-wrapper').classList.toggle('close');
  }

}
