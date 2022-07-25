import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { MovieComponent } from './movies/movie/movie/movie.component';
import { FavouritesComponent } from './movies/favourites/favourites.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    MoviesComponent,
    MovieComponent,
    FavouritesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'heroes', component: FirstComponentComponent},
      {path: 'movies', component:MoviesComponent},
      {path: 'favourites', component:FavouritesComponent},
      {path: 'movie/:id', component:MovieComponent},
      {path:'', component:FirstComponentComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
