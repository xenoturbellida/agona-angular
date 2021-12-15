import {IFilm} from "./film.interface";

export const FILMS: IFilm[] = [
  {
    name: 'Довод',
    year: 2020,
    imageAddress: '../../assets/posters/tenet.png',
    synopsis: 'Протагонист пытается обезвредить террориста с помощью уникальной технологии. Блокбастер-пазл Кристофера Нолана.',
    genre: ['Фантастика', 'Боевик', 'Триллер']
  },
  {
    name: 'Довлатов',
    year: 2018,
    imageAddress: '../../assets/posters/dovlatov.png',
    synopsis: 'Советский застой, надлом и рефлексия. Драма о нескольких днях из жизни писателя, отмеченная на Берлинале.',
    genre: ['Драма', 'Мелодрама']
  }
]
