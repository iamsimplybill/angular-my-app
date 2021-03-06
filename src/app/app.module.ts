import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { GreeterComponent } from './greeter/greeter.component';
import { HeaderModule } from './header/header.module';
import { MainModule } from './main/main.module';
import { FooterModule } from './footer/footer.module';
import { StudentsModule } from './students/students.module';
import { AppRoutingModule } from './app-routing.module';
import { AboutusModule } from './aboutus/aboutus.module';


@NgModule({
  declarations: [
    AppComponent,
    GreeterComponent
  ],
  imports: [
    HeaderModule,
    MainModule,
    FooterModule,
    BrowserModule,
    FormsModule,
    StudentsModule,
    AppRoutingModule,
    AboutusModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
