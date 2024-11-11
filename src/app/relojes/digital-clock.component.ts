import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-digital-clock',
  templateUrl: './digital-clock.component.html',
  styleUrls: ['./digital-clock.component.css']
})
export class DigitalClockComponent implements OnInit {
  currentTime: Date = new Date();
  timeOffset: number = 0;

  ngOnInit() {
    setInterval(() => {
      const now = new Date();
      now.setHours(now.getHours() + this.timeOffset);
      this.currentTime = now;
    }, 1000);
  }

  adjustTime(event: any) {
    this.timeOffset = event.target.value;
    this.updateDisplayTime();
  }

  updateDisplayTime() {
    const now = new Date();
    now.setHours(now.getHours() + this.timeOffset);
    this.currentTime = now;
  }
}
