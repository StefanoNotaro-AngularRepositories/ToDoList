import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  public menuItems = [
    { Name: 'To-Do', Path: 'ToDo' },
    { Name: 'Done', Path: 'Done' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
