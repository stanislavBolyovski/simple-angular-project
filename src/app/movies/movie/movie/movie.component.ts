import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { IMovieDetails } from 'src/app/first-component/hero';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  id: string | null = '';
  message: string = '';
  isThere: Boolean = false;
 
  currentMovie: IMovieDetails = {};
 
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private movie: DataService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getMovie(this.id || '');
  }

  goBack() {
    this.router.navigate(['/movies']);
  }

  getMovie(id: string) {
    this.movie.getMovieDetails(id).subscribe({
      next: (data: IMovieDetails) => {
        this.currentMovie = data
      }
    });
  }

  addToFav() {
    if (!this.movie.addFavMovies(this.currentMovie)) {
      this.isThere = true
      this.message = 'This movie is already in the Watchlist';
      setTimeout(() => {
        this.isThere = false;
      }, 3000);
    } else {
      this.isThere = true
      this.message = 'Movie is added in the watchlist';
      setTimeout(() => {
        this.isThere = false;
      }, 3000);
     // color
      this.movie.addFavMovies(this.currentMovie)
    }

    
  }

}
