import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chess-clock',
  templateUrl: './chess-clock.component.html',
  styleUrls: ['./chess-clock.component.css']
})
export class ChessClockComponent implements OnInit {
  currentHour: number = new Date().getHours();
  currentMinute: number = new Date().getMinutes();
  currentSecond: number = new Date().getSeconds();

  ngOnInit(): void {
    // Actualizar el tiempo dinámicamente cada segundo
    setInterval(() => {
      const now = new Date();
      this.currentHour = now.getHours();
      this.currentMinute = now.getMinutes();
      this.currentSecond = now.getSeconds();
    }, 1000);
  }

  // Determinar la clase de cada celda
  getCellClass(index: number): string {
    if (index < 24) {
      // Celdas de horas (0-23)
      return index === this.currentHour ? 'cell active-hour' : 'cell';
    } else if (index >= 24 && index < 84) {
      // Celdas de minutos (0-59)
      return (index - 24) === this.currentMinute ? 'cell active-minute' : 'cell';
    } else if (index >= 84 && index < 144) {
      // Celdas de segundos (0-59)
      return (index - 84) === this.currentSecond ? 'cell active-second' : 'cell';
    }
    return 'cell';
  }

  // Mostrar el valor en la celda activa
  getCellValue(index: number): string {
    if (index < 24 && index === this.currentHour) {
      return this.currentHour.toString();
    } else if (index >= 24 && index < 84 && (index - 24) === this.currentMinute) {
      return this.currentMinute.toString();
    } else if (index >= 84 && index < 144 && (index - 84) === this.currentSecond) {
      return this.currentSecond.toString();
    }
    return '';
  }
}
