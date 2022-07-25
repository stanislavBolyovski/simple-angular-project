import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  searched: string = '';
  movies: any;
  constructor(private dService: DataService) { }

  ngOnInit(): void {
  }
  
  searchMovies(str: string) {
   this.dService.getTvSeriesService(str).subscribe({
      next: data => {
        this.movies = data
        this.searched = '';
        return data
      }
    });
  }
  
}
