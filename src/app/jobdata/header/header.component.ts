import { Component, OnInit } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currentDate$: Observable<string>;

  constructor() {
    this.currentDate$ = interval(1000).pipe(
      map(() => {
        const today = new Date();
        return this.formatDate(today);
      })
    );
  }

  formatDate(date: Date): string {
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();
    let hours = date.getHours();
    let minutes: any = date.getMinutes();
    const seconds: any = date.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours %= 12;
    hours = hours || 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? `0${minutes}` : minutes;

    return `${monthNames[monthIndex]} ${day}, ${year} ${hours}:${minutes}:${seconds} ${ampm}`;
  }

  ngOnInit(): void {
  }
}
