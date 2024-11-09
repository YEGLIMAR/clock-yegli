import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reloj-sencillo',
  templateUrl: './reloj-sencillo.component.html',
  styleUrls: ['./reloj-sencillo.component.css']
})
export class RelojSencilloComponent implements OnInit {
  currentTime: Date = new Date();
  timeOffset: number = 0;

  ngOnInit(): void {
    setInterval(() => {
      this.currentTime = new Date(new Date().getTime() + this.timeOffset * 3600000);
    }, 1000);
  }

  adjustTime(event: any) {
    this.timeOffset = event.target.value;
  }
}
