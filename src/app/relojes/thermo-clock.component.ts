import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thermo-clock',
  templateUrl: './thermo-clock.component.html',
  styleUrls: ['./thermo-clock.component.css']
})
export class ThermometerClockComponent implements OnInit {
  hours: number = new Date().getHours();
  minutes: number = new Date().getMinutes();
  seconds: number = new Date().getSeconds();
  hourOffset: number = 0;

  ngOnInit() {
    this.startClock();
  }

  startClock() {
    setInterval(() => {
      const now = new Date();
      this.hours = (now.getHours() + this.hourOffset) % 24;
      this.minutes = now.getMinutes();
      this.seconds = now.getSeconds();
    }, 1000);
  }

  updateTime() {
    this.hours = (new Date().getHours() + this.hourOffset) % 24;
  }

  getColor(value: number, max: number): string {
    const ratio = value / max;
    const red = Math.round(255 * (1 - ratio));
    const green = Math.round(255 * ratio);
    return `rgb(${red}, ${green}, 0)`;
  }
}
