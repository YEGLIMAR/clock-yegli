import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RelojSencilloComponent } from './relojes/reloj-sencillo.component';
import { LoginComponent } from './services/login.component';
import { RegisterComponent } from './services/register.component';
import { MainViewComponent } from './relojes/main-view.component';


const routes: Routes = [
    {path: 'reloj-sencillo', component: RelojSencilloComponent},
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'main-view', component: MainViewComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
