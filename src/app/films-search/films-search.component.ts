import { Component, OnInit } from '@angular/core';
import { FILMS } from "../mock-films";
import {IFilm} from "../film.interface";

@Component({
  selector: 'app-films-search',
  templateUrl: './films-search.component.html',
  styleUrls: ['./films-search.component.sass']
})
export class FilmsSearchComponent implements OnInit {
  filmToSearch: string = '';
  filmsSuggested: IFilm[] = [];

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
    }
  }
  ngOnInit(): void {
  }

}
