import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  search1: string = '';
  search2: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  performSearch() {
    console.log(`Searching for users: ${this.search1}, products: ${this.search2}`);
    // Perform search logic here
  }

}
