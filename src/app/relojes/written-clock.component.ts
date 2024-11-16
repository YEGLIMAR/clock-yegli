import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-written-clock',
  templateUrl: './written-clock.component.html',
  styleUrls: ['./written-clock.component.css']
})
export class WrittenClockComponent implements OnInit, OnDestroy {
  totalSeconds: number = 0;
  interval: any;

  ngOnInit(): void {
    const now = new Date();
    this.totalSeconds = now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();

    // Increment seconds every second
    this.interval = setInterval(() => {
      this.totalSeconds = (this.totalSeconds + 1) % 86400; // Keeps seconds within 0-86399
    }, 1000);
  }

  ngOnDestroy(): void {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  get hours(): number {
    return Math.floor(this.totalSeconds / 3600) % 24;
  }

  get minutes(): number {
    return Math.floor((this.totalSeconds % 3600) / 60);
  }

  get seconds(): number {
    return this.totalSeconds % 60;
  }

  get hoursInWords(): string {
    return this.numberToWords(this.hours).toUpperCase();
  }

  get minutesInWords(): string {
    return this.numberToWords(this.minutes).toUpperCase();
  }

  get secondsInWords(): string {
    return this.numberToWords(this.seconds).toUpperCase();
  }

  numberToWords(num: number): string {
    const words = ["cero", "uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve", "diez", "once", "doce", "trece", "catorce", "quince", "dieciséis", "diecisiete", "dieciocho", "diecinueve", "veinte", "veintiuno", "veintidós", "veintitrés", "veinticuatro", "veinticinco", "veintiséis", "veintisiete", "veintiocho", "veintinueve", "treinta", "treinta y uno", "treinta y dos", "treinta y tres", "treinta y cuatro", "treinta y cinco", "treinta y seis", "treinta y siete", "treinta y ocho", "treinta y nueve", "cuarenta", "cuarenta y uno", "cuarenta y dos", "cuarenta y tres", "cuarenta y cuatro", "cuarenta y cinco", "cuarenta y seis", "cuarenta y siete", "cuarenta y ocho", "cuarenta y nueve", "cincuenta", "cincuenta y uno", "cincuenta y dos", "cincuenta y tres", "cincuenta y cuatro", "cincuenta y cinco", "cincuenta y seis", "cincuenta y siete", "cincuenta y ocho", "cincuenta y nueve"];
    return words[num] || '';
  }

  updateTotalSeconds(event: any): void {
    this.totalSeconds = event.target.value;
  }
}
