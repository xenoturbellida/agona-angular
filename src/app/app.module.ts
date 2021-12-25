import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmsSearchComponent } from './components/films-search/films-search.component';
import { ToggleComponent } from './components/toggle/toggle.component';
import { FilmAdditionComponent } from './pages/film-addition/film-addition.component';
import { FilmAdditionFormComponent } from './components/film-addition-form/film-addition-form.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmsSearchComponent,
    ToggleComponent,
    FilmAdditionComponent,
    FilmAdditionFormComponent,
    HeaderComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
