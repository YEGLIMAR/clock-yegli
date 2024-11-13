import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stair-clock',
  templateUrl: './stair-clock.component.html',
  styleUrls: ['./stair-clock.component.css']
})
export class StairCaseClockComponent implements OnInit {
    hourWidth: number = 0;
    minuteWidth: number = 0;
    secondWidth: number = 0;
  
    currentHour: number = 0;
    currentMinute: number = 0;
    currentSecond: number = 0;
  
    timeOffset: number = 0; // Ajuste de hora con el slider
  
    ngOnInit(): void {
      this.updateTime();
      setInterval(() => this.updateTime(), 1000); // Actualizar cada segundo
    }
  
    updateTime(): void {
      const now = new Date();
      now.setHours(now.getHours() + this.timeOffset); // Aplicar el ajuste de hora
  
      this.currentHour = now.getHours();
      this.currentMinute = now.getMinutes();
      this.currentSecond = now.getSeconds();
  
      // Calcula el porcentaje de llenado para cada barra
      this.hourWidth = (this.currentHour % 12) / 12 * 100; // Escala de 0 a 100 para 12 horas
      this.minuteWidth = this.currentMinute / 60 * 100; // Escala de 0 a 100 para 60 minutos
      this.secondWidth = this.currentSecond / 60 * 100; // Escala de 0 a 100 para 60 segundos
    }
  }