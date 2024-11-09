import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day-night-clock',
  templateUrl: './day-night-clock.component.html',
  styleUrls: ['./day-night-clock.component.css']
})
export class DayNightClockComponent implements OnInit {
  currentTime: Date = new Date();
  hourOffset: number = 0; 

  ngOnInit(): void {
    setInterval(() => {
      this.updateTime();
    }, 1000);
  }

  updateTime(): void {
    const newTime = new Date();
    newTime.setHours(newTime.getHours() + this.hourOffset);
    this.currentTime = newTime;
  }

  onSliderChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.hourOffset = Number(input.value);
    this.updateTime();
  }
  
  isDayTime(): boolean {
    const hours = this.currentTime.getHours();
    return hours >= 6 && hours < 18; // De 6 a 18 horas es de día
  }
}
