import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environments';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
//import { LoginComponent } from './components/login/login.component';
//import { RegisterComponent } from './components/register/register.component';
import { RelojSencilloComponent } from './relojes/reloj-sencillo.component';
import { SidebarComponent } from './relojes/sidebar.component';
import { MainViewComponent } from './relojes/main-view.component';
import { DigitalClockComponent } from './relojes/digital-clock.component';
import { AnalogClockComponent } from './relojes/analog-clock.component';
import { HexanClockComponent } from './relojes/hexan-clock.component';
import { StairCaseClockComponent } from './relojes/stair-clock.component';
import { PageClockComponent } from './relojes/page-clock.component';
@NgModule({
  declarations: [
    AppComponent,
    RelojSencilloComponent,
    SidebarComponent,
    MainViewComponent,
    DigitalClockComponent,
    AnalogClockComponent,
    HexanClockComponent,
    StairCaseClockComponent,
    PageClockComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
