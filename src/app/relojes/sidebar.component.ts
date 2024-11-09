import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @Output() modeSelected = new EventEmitter<string>();

  modes = [
    { key: 'simpleClock', label: 'Reloj Sencillo' },
    { key: 'dayNightClock', label: 'Reloj día-noche' },
  ];

  selectedMode: string = 'simpleClock';

  selectMode(mode: any): void {
    this.selectedMode = mode.key;
    this.modeSelected.emit(this.selectedMode);
  }
}
