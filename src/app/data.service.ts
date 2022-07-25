import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IHero, IMovieDetails, IStarWars } from './first-component/hero';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  result: Array<IHero> = [];
  favourite: IMovieDetails[] = [];
  URL = 'https://swapi.dev/api/people/';
  moviesUrl = "https://api.tvmaze.com/search/shows?q="
  movieDetailURL = "https://api.tvmaze.com/shows/"
  data: Array<IHero> = [{
    "name": "Molecule Man",
    "age": '29',
    "imgSrc": 'https://images.unsplash.com/photo-1608889175106-86d4a3c66bd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
  },
  {
    "name": "Madame Uppercut",
    "age": '39',
    "imgSrc": "https://cdn.pixabay.com/photo/2017/07/06/18/48/wonder-woman-2478971_960_720.jpg"
  },
  {
    "name": "Eternal Flame",
    "age": '1000000',
    "imgSrc": "https://comicvine.gamespot.com/a/uploads/scale_medium/1/15776/891358-eternalflame.jpg"
  }]

  constructor(private http: HttpClient) { }

  getApiData(): Observable<IStarWars> {
    return this.http.get<IStarWars>(this.URL);
  }

  getMovieDetails(id: string): Observable<IMovieDetails> {
    return this.http.get<IMovieDetails>(`${this.movieDetailURL}${id}`);
  }

  getDataService() {
    return this.data;
  }

  addDataService(name: string, age: string, imgSrc: string) {
    let newData: IHero = {
      name: name,
      age: age,
      imgSrc: imgSrc
    }
    this.data.push(newData);
  }

  searchHeroService(input: string) {
    this.result = [];
    for (const item of this.data) {
      if (item.name.includes(input)) {
        this.result.push(item)
      }
    }
    return this.result
  }

  removeItemService(removeName: string) {
    for (let item of this.data) {
      if (item.name == removeName) {
        this.data.splice(this.data.indexOf(item), 1);
        break;
      }
    }
  }

  getTvSeriesService(name: string) {
    return this.http.get(this.moviesUrl + name)
  }

  addFavMovies(movie: IMovieDetails) {
    let isThere = false;
    for (let item of this.favourite) {
      if (item.id == movie.id) {
         isThere = true
      }
    }
    if (!isThere) {
      this.favourite.push(movie)
      return true
    } else {
      return false
    }
  }
 
}
