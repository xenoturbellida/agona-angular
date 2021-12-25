import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {IFilm} from "../../film.interface";

@Component({
  selector: 'app-film-addition-form',
  templateUrl: './film-addition-form.component.html',
  styleUrls: ['./film-addition-form.component.sass']
})
export class FilmAdditionFormComponent implements OnInit {
  form: FormGroup;
  @Input() film: IFilm | undefined;
  options: string[] = ['Фантастика','Фэнтези','Триллер']

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: [''],
      year: [''],
      synopsis: [''],
      genre: [''],
      poster: ['']
    })
  }

  ngOnInit(): void {
    this.setFormValues();
  }

  setFormValues() {
    if (this.film != null) {
      this.form.patchValue({
        name: this.film.name,
        year: this.film.year,
        synopsis: this.film.synopsis,
        genre: this.film.genre
      })
    }
  }

  onSubmit() {
    alert('the form was submitted');
  }

}
