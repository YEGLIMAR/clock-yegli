import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent implements OnInit {
  @Input() selectedMode: string = 'simple';

  currentTime: Date = new Date();
  hourOffset: number = 0;

  ngOnInit() {
    this.updateRealTime();
  }

  updateRealTime() {
    setInterval(() => {
      const now = new Date();
      now.setHours(now.getHours() + this.hourOffset);
      this.currentTime = now;
    }, 1000);
  }

  updateTime() {
    const now = new Date();
    now.setHours(now.getHours() + this.hourOffset);
    this.currentTime = now;
  }
}

