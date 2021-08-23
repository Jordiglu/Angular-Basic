import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  sideNav: Boolean;
  constructor() {
    this.sideNav = true;
  }

  ngOnInit() {

  }
  closesideNav() {
    this.sideNav = false;
  }
}

// closeSideNav() {
  // this.sideNav = true;
  //  let sideNav= document.getElementsByClassName('navbar-toggler');
  // sideNav.remove()
  // console.log(this.sideNav);

