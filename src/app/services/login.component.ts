import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string | null = null;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  onLogin() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.errorMessage = null; // Limpiar cualquier mensaje de error previo
      this.authService
        .login(email, password)
        .then(() => {
          console.log('Inicio de sesión exitoso');
          this.router.navigate(['/main-view']);
        })
        .catch((error) => {
          console.error('Error al iniciar sesión:', error);
          // Mostrar un mensaje específico basado en el error
          if (error.code === 'auth/user-not-found') {
            this.errorMessage = 'El correo no está registrado.';
          } else if (error.code === 'auth/wrong-password') {
            this.errorMessage = 'La contraseña es incorrecta.';
          } else {
            this.errorMessage = 'Error al iniciar sesión. Intenta nuevamente.';
          }
        });
    }
  }
}
