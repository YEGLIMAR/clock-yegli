import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentMode = 'sencillo';


  onModeChange(mode: string): void {
    this.currentMode = mode;


  }
}
