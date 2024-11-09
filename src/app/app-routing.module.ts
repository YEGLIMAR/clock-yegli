import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RelojSencilloComponent } from './relojes/reloj-sencillo.component';

const routes: Routes = [
    {path: 'reloj-sencillo', component: RelojSencilloComponent}
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
