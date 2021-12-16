import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FILMS } from "../../mock-films";
import {IFilm} from "../../film.interface";

@Component({
  selector: 'app-films-search',
  templateUrl: './films-search.component.html',
  styleUrls: ['./films-search.component.sass']
})
export class FilmsSearchComponent implements OnInit {
  filmToSearch: string = '';
  filmsSuggested: IFilm[] = [];

  @Output() filmFoundEvent = new EventEmitter<IFilm>();
  @Output() addManuallyEvent = new EventEmitter();

  constructor() { }

  lookForFilm(): void {
    this.filmsSuggested = [];
    const filmInput = this.filmToSearch.toLowerCase();
    if (filmInput === '') return;
    for (let film of FILMS) {
      const filmStored = film.name.toLowerCase();
      if (filmStored.includes(filmInput)) {
        this.filmsSuggested.push(film);
      }
      if (this.filmsSuggested.length === 5) return;
    }
  }

  chooseFilm(film: IFilm) {
    this.filmFoundEvent.emit(film);
  }

  tryToChooseFilm() {
    if (this.filmsSuggested.length !== 0) {
      const film = this.filmsSuggested[0];
      this.chooseFilm(film);
    }
  }

  addManually() {
    this.addManuallyEvent.emit();
  }

  ngOnInit(): void {
  }

}
