import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-domino-clock',
  templateUrl: './domino-clock.component.html',
  styleUrls: ['./domino-clock.component.css'],
})
export class DominoClockComponent implements OnInit {
  currentHours: number = new Date().getHours();
  currentMinutes: number = new Date().getMinutes();
  currentSeconds: number = new Date().getSeconds();

  sliderHours: number = this.currentHours;
  sliderMinutes: number = this.currentMinutes;
  sliderSeconds: number = this.currentSeconds;

  hourValues: number[] = Array.from({ length: 12 }, (_, i) => i + 1); // 12 dominós
  minuteValues: number[] = Array.from({ length: 59 }, (_, i) => i); // 59 dominós
  secondValues: number[] = Array.from({ length: 60 }, (_, i) => i); // 60 dominós

  ngOnInit(): void {
    this.startClock();
  }

  startClock(): void {
    setInterval(() => {
      this.currentSeconds++;
      if (this.currentSeconds >= 60) {
        this.currentSeconds = 0;
        this.currentMinutes++;
        if (this.currentMinutes >= 60) {
          this.currentMinutes = 0;
          this.currentHours++;
          if (this.currentHours > 12) {
            this.currentHours = 1;
          }
        }
      }
    }, 1000);
  }

  adjustTime(): void {
    this.currentHours = this.sliderHours;
    this.currentMinutes = this.sliderMinutes;
    this.currentSeconds = this.sliderSeconds;
  }
}
