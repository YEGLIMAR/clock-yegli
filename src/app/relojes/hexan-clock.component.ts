import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-hexan-clock',
  templateUrl: './hexan-clock.component.html',
  styleUrls: ['./hexan-clock.component.css']
})
export class HexanClockComponent implements OnInit {
  @ViewChild('clockCanvas', { static: true }) clockCanvas!: ElementRef<HTMLCanvasElement>;
  private ctx!: CanvasRenderingContext2D;
  timeOffset: number = 0;

  ngOnInit(): void {
    const canvas = this.clockCanvas.nativeElement;
    this.ctx = canvas.getContext('2d')!;
    const scaleFactor = 2;
    canvas.width = 200 * scaleFactor;
    canvas.height = 200 * scaleFactor;
    this.ctx.scale(scaleFactor, scaleFactor);

    this.updateClock();
    setInterval(() => this.updateClock(), 1000);
  }

  drawHexagon(x: number, y: number, radius: number) {
    this.ctx.beginPath();
    for (let i = 0; i < 6; i++) {
      const angle = (i * Math.PI) / 3;
      const xPos = x + radius * Math.cos(angle);
      const yPos = y + radius * Math.sin(angle);
      i === 0 ? this.ctx.moveTo(xPos, yPos) : this.ctx.lineTo(xPos, yPos);
    }
    this.ctx.closePath();
    this.ctx.fillStyle = '#FF8C00';
    this.ctx.fill();
  }

  updateClock(): void {
    const now = new Date();
    now.setHours(now.getHours() + this.timeOffset);
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    this.ctx.clearRect(0, 0, 200, 200);

    this.drawHexagon(100, 100, 85);

    this.ctx.beginPath();
    this.drawHexagon(100, 100, 80);
    this.ctx.fillStyle = '#ffffff';
    this.ctx.fill();

    this.ctx.fillStyle = '#8B0000';
    this.ctx.font = '16px Arial';
    this.ctx.textAlign = 'center';
    this.ctx.textBaseline = 'middle';
    for (let num = 1; num <= 12; num++) {
      const angle = (num * Math.PI) / 6;
      const x = 100 + Math.cos(angle - Math.PI / 2) * 60;
      const y = 100 + Math.sin(angle - Math.PI / 2) * 60;
      this.ctx.fillText(num.toString(), x, y);
    }

    const hourAngle = ((hours % 12) + minutes / 60) * (Math.PI / 6);
    this.ctx.strokeStyle = '#d4671e';
    this.ctx.lineWidth = 6;
    this.ctx.beginPath();
    this.ctx.moveTo(100, 100);
    this.ctx.lineTo(100 + Math.cos(hourAngle - Math.PI / 2) * 40, 100 + Math.sin(hourAngle - Math.PI / 2) * 40);
    this.ctx.stroke();

    const minuteAngle = (minutes + seconds / 60) * (Math.PI / 30);
    this.ctx.strokeStyle = '#8B0000';
    this.ctx.lineWidth = 4;
    this.ctx.beginPath();
    this.ctx.moveTo(100, 100);
    this.ctx.lineTo(100 + Math.cos(minuteAngle - Math.PI / 2) * 60, 100 + Math.sin(minuteAngle - Math.PI / 2) * 60);
    this.ctx.stroke();

    const secondAngle = seconds * (Math.PI / 30);
    this.ctx.strokeStyle = '#3e2723';
    this.ctx.lineWidth = 2;
    this.ctx.beginPath();
    this.ctx.moveTo(100, 100);
    this.ctx.lineTo(100 + Math.cos(secondAngle - Math.PI / 2) * 70, 100 + Math.sin(secondAngle - Math.PI / 2) * 70);
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.arc(100, 100, 5, 0, 2 * Math.PI);
    this.ctx.fillStyle = '#d4671e';
    this.ctx.fill();
  }
}
