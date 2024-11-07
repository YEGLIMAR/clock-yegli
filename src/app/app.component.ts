import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'clock-yegli';
  isLogin = true;
  email = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {}

  toggleForm() {
    this.isLogin = !this.isLogin;
  }

  onLogin() {
    this.authService.login(this.email, this.password)
      .then((res) => {
        console.log('Usuario inició sesión:', res);
        this.router.navigate(['/home']); // Redirige a la página de inicio
      })
      .catch((err) => {
        console.error('Error en inicio de sesión:', err);
        alert('Error al iniciar sesión. Por favor verifica tus credenciales.');
      });
  }

  onRegister() {
    this.authService.register(this.email, this.password)
      .then((res) => {
        console.log('Usuario registrado:', res);
        this.router.navigate(['/home']); // Redirige a la página de inicio
      })
      .catch((err) => {
        console.error('Error en registro:', err);
        alert('Error al registrarse. Por favor intenta con otros datos.');
      });
  }
}
