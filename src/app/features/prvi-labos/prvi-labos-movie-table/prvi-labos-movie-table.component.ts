import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/shared/models/movie';
import { MovieService } from 'src/app/shared/services/movies.service';

@Component({
  selector: 'app-prvi-labos-movie-table',
  templateUrl: './prvi-labos-movie-table.component.html',
  styleUrls: ['./prvi-labos-movie-table.component.scss'],
  providers: [MovieService]
})
export class PrviLabosMovieTableComponent implements OnInit {

  movies!: Movie[];
  isDataLoaded: boolean = false;

  constructor(
    private movieService: MovieService
  ) { }

  ngOnInit(): void {
    this.movieService.getMovies().then(movies => {
      this.movies = movies;
      this.isDataLoaded = true;
      console.log(this.movies);
    });
  }

}
