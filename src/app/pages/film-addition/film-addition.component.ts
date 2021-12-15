import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {IFilm} from "../../film.interface";

@Component({
  selector: 'app-film-addition',
  templateUrl: './film-addition.component.html',
  styleUrls: ['./film-addition.component.sass']
})
export class FilmAdditionComponent implements OnInit {

  toggleForm: FormGroup;

  showSearch: boolean = true;
  showPreFilledForm: boolean = false;
  film?: IFilm;


  constructor(private fb: FormBuilder) {
    this.toggleForm = this.fb.group({
      toggle: [true]
    });
    this.toggleForm.valueChanges.subscribe((res: {toggle: boolean}) => {
      if (this.showSearch !== res.toggle) {
        this.showSearch = res.toggle;
      }
    });
  }

  ngOnInit(): void {
  }

  fillFilmDetails(film: IFilm) {
    console.log(film);
    this.film = film;
    this.showPreFilledForm = true;
  }

}
