import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'clock-yegli';
  selectedMode: string = 'simple';

  onModeSelected(mode: string) {
    this.title= 'clock-yegli';
    this.selectedMode = mode;
  }
}
