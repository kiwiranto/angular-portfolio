import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  navigation = [
    {
      text: 'Home',
      url: '/home',
      active: true
    },
    {
      text: 'Profile',
      url: '/profile',
      active: false
    },
    {
      text: 'Error',
      url: '/not-found',
      active: false
    }
  ]

  constructor() { }

  ngOnInit() {
  }
}
