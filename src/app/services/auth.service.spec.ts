import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { of } from 'rxjs';

describe('AuthService', () => {
  let service: AuthService;
  let angularFireAuthMock: any;

  beforeEach(() => {
    // Mock de AngularFireAuth
    angularFireAuthMock = {
      signInWithEmailAndPassword: jasmine.createSpy('signInWithEmailAndPassword'),
      createUserWithEmailAndPassword: jasmine.createSpy('createUserWithEmailAndPassword'),
      signOut: jasmine.createSpy('signOut'),
      authState: of(null),
    };

    // Configuración del testbed
    TestBed.configureTestingModule({
      providers: [
        AuthService,
        { provide: AngularFireAuth, useValue: angularFireAuthMock },
      ],
    });

    service = TestBed.inject(AuthService);
  });

  it('debería ser creado', () => {
    expect(service).toBeTruthy();
  });

  describe('login', () => {
    it('debería llamar a signInWithEmailAndPassword con los parámetros correctos', () => {
      const email = 'test@example.com';
      const password = '123456';
      service.login(email, password);
      expect(angularFireAuthMock.signInWithEmailAndPassword).toHaveBeenCalledWith(email, password);
    });
  });

  describe('register', () => {
    it('debería llamar a createUserWithEmailAndPassword con los parámetros correctos', () => {
      const email = 'test@example.com';
      const password = '123456';
      service.register(email, password);
      expect(angularFireAuthMock.createUserWithEmailAndPassword).toHaveBeenCalledWith(email, password);
    });
  });

  describe('logout', () => {
    it('debería llamar a signOut', () => {
      service.logout();
      expect(angularFireAuthMock.signOut).toHaveBeenCalled();
    });
  });
});
