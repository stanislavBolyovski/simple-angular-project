import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { IMovieDetails } from 'src/app/first-component/hero';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['../movies.component.css']
})
export class FavouritesComponent implements OnInit {
  
  constructor(private service:DataService) { }
  fav:IMovieDetails[] = []
  ngOnInit(): void {
    this.fav = this.service.favourite
  }

}
