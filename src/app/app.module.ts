import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environments';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RelojSencilloComponent } from './relojes/reloj-sencillo.component';
import { SidebarComponent } from './relojes/sidebar.component';
import { MainViewComponent } from './relojes/main-view.component';
import { DigitalClockComponent } from './relojes/digital-clock.component';
import { AnalogClockComponent } from './relojes/analog-clock.component';
import { HexanClockComponent } from './relojes/hexan-clock.component';
import { StairCaseClockComponent } from './relojes/stair-clock.component';
import { PageClockComponent } from './relojes/page-clock.component';
import { WrittenClockComponent } from './relojes/written-clock.component';
import { ThermometerClockComponent } from './relojes/thermo-clock.component';
import { LoginComponent } from './services/login.component';
import { RegisterComponent } from './services/register.component';
import { DominoClockComponent } from './relojes/domino-clock.component';
import { CandleClockComponent } from './relojes/candle-clock.component';
import { ChessClockComponent } from './relojes/chess-clock.component';
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
    PageClockComponent,
    WrittenClockComponent,
    ThermometerClockComponent, 
    LoginComponent,
    RegisterComponent, 
    DominoClockComponent,
    CandleClockComponent,
    ChessClockComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
