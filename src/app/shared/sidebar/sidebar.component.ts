import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {


  isActive = false;
  showMenu = '';
  eventCalled() {
      this.isActive = !this.isActive;
  }

  
  constructor() { }

  ngOnInit() {
  }

}
