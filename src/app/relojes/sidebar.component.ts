import { Component, Output, EventEmitter, Inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

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
    { key: 'hexagonal', label: 'Reloj hexagonal'},
    { key: 'escalera', label: 'Reloj escalera'},
    { key: 'pagina', label: 'Página de reloj'},
    { key: 'escrito', label: 'Reloj escrito'},
    { key: 'termometro', label: 'Reloj termómetro'}  
  ];

  selectedMode= 'string';

  @Output() modeChange = new EventEmitter<string>();

  constructor(@Inject(AuthService) private _authService: AuthService, @Inject(Router) private _router: Router) {}
  
  selectMode(mode: any){
    this.selectedMode = mode.key;
    this.modeChange.emit(this.selectedMode);
  }
  onLogout() {
    this._authService.logout().then(() => {
      this._router.navigate(['/login']); // Redirige al login
    }).catch(error => {
      console.error('Error al cerrar sesión:', error);
    });
}
}
