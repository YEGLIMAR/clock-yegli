import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent {
  currentMode = 'sencillo';

  onModeChange(newMode: string){
    this.currentMode = newMode;
  }

}

