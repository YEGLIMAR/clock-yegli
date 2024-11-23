import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-candle-clock',
  templateUrl: './candle-clock.component.html',
  styleUrls: ['./candle-clock.component.css']
})
export class CandleClockComponent implements OnInit {
  hoursPercentage: number = 100;
  minutesPercentage: number = 100;
  secondsPercentage: number = 100;

  constructor() {}

  ngOnInit(): void {
    this.updateTime();
    setInterval(() => {
      this.updateTime();
    }, 1000); // Update every second
  }

  updateTime(): void {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    this.hoursPercentage = (hours / 24) * 100;
    this.minutesPercentage = (minutes / 60) * 100;
    this.secondsPercentage = (seconds / 60) * 100;
  }
}
