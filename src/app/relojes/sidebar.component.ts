import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  modes = [
    { key: 'sencillo', label: 'Reloj Sencillo' },
    { key: 'digital', label: 'Reloj digital'},
    { key: 'analogico', label: 'Reloj analógico'},
    { key: 'hexagonal', label: 'Reloj hexagonal'}
  ];

  selectedMode= 'sencillo';

  @Output() modeChange = new EventEmitter<string>();

  selectMode(mode: any){
    this.selectedMode = mode.key;
    this.modeChange.emit(this.selectedMode);
  }
}
