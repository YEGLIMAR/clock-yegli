import { TestBed } from '@angular/core/testing';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthService } from './auth.service';
import { of } from 'rxjs';

describe('AuthService', () => {
  let service: AuthService;
  let afAuthMock: any;

  beforeEach(() => {
    // Crear un mock de AngularFireAuth
    afAuthMock = {
      createUserWithEmailAndPassword: jasmine.createSpy('createUserWithEmailAndPassword'),
      signInWithEmailAndPassword: jasmine.createSpy('signInWithEmailAndPassword'),
      signOut: jasmine.createSpy('signOut'),
      authState: of(null)
    };

    TestBed.configureTestingModule({
      providers: [
        AuthService,
        { provide: AngularFireAuth, useValue: afAuthMock }
      ]
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should register a user', async () => {
    const email = 'test@example.com';
    const password = 'password123';
    afAuthMock.createUserWithEmailAndPassword.and.returnValue(Promise.resolve({ user: { email } }));

    const result = await service.register(email, password);
    expect(afAuthMock.createUserWithEmailAndPassword).toHaveBeenCalledWith(email, password);
    expect(result.user?.email).toBe(email);
  });

  it('should login a user', async () => {
    const email = 'test@example.com';
    const password = 'password123';
    afAuthMock.signInWithEmailAndPassword.and.returnValue(Promise.resolve({ user: { email } }));

    const result = await service.login(email, password);
    expect(afAuthMock.signInWithEmailAndPassword).toHaveBeenCalledWith(email, password);
    expect(result.user?.email).toBe(email);
  });

  it('should logout a user', async () => {
    afAuthMock.signOut.and.returnValue(Promise.resolve());

    await service.logout();
    expect(afAuthMock.signOut).toHaveBeenCalled();
  });

  it('should return auth state', (done) => {
    service.getUserState().subscribe(state => {
      expect(state).toBeNull(); // authState está configurado para devolver null en el mock
      done();
    });
  });
});
