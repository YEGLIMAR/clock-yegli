import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  onRegister() {
    if (this.email === '' || this.password === '') {
      this.errorMessage = 'Por favor, complete todos los campos.';
      return;
    }

    this.afAuth.createUserWithEmailAndPassword(this.email, this.password)
      .then(() => {
        // Registro exitoso, redirigir al usuario a la página de inicio de sesión o a la página principal
        this.router.navigate(['/login']);
      })
      .catch(error => {
        // Manejar el error y mostrar mensaje al usuario
        this.errorMessage = this.getErrorMessage(error.code);
      });
  }

  private getErrorMessage(code: string): string {
    switch (code) {
      case 'auth/email-already-in-use':
        return 'El correo electrónico ya está en uso.';
      case 'auth/invalid-email':
        return 'El correo electrónico no es válido.';
      case 'auth/weak-password':
        return 'La contraseña es demasiado débil. Usa al menos 6 caracteres.';
      default:
        return 'Ocurrió un error inesperado. Inténtelo de nuevo.';
    }
  }
}
