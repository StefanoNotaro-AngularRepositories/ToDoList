import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ToDoComponent } from './components/to-do/to-do.component';
import { DoneComponent } from './components/done/done.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, ToDoComponent, DoneComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
