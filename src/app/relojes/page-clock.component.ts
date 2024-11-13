import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-clock',
  templateUrl: './page-clock.component.html',
  styleUrls: ['./page-clock.component.css']
})
export class PageClockComponent implements OnInit {
  currentHour: string = '00';
  currentMinute: string = '00';
  currentSecond: string = '00';

  nextHour: string = '00';
  nextMinute: string = '00';
  nextSecond: string = '00';

  timeOffset: number = 0; 

  ngOnInit(): void {
    this.updateTime();
    setInterval(() => this.updateTime(), 1000); 
  }

  updateTime(): void {
    const now = new Date();

    now.setHours(now.getHours() + this.timeOffset);

    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();

    this.currentHour = this.formatTime(hour);
    this.currentMinute = this.formatTime(minute);
    this.currentSecond = this.formatTime(second);

    this.nextHour = this.formatTime((hour + (minute === 59 && second === 59 ? 1 : 0)) % 24);
    this.nextMinute = this.formatTime((minute + (second === 59 ? 1 : 0)) % 60);
    this.nextSecond = this.formatTime((second + 1) % 60);
  }

  formatTime(value: number): string {
    return value < 10 ? '0' + value : value.toString();
  }

  adjustTime(event: any): void {
    this.timeOffset = +event.target.value;
    this.updateTime(); 
  }
}
