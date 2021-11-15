import { Component, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { Movie } from 'src/app/shared/models/movie';
import { MovieService } from 'src/app/shared/services/movies.service';
import { PrviLabosAddMovieComponent } from '../prvi-labos-add-movie/prvi-labos-add-movie.component';

@Component({
  selector: 'app-prvi-labos-dashboard',
  templateUrl: './prvi-labos-dashboard.component.html',
  styleUrls: ['./prvi-labos-dashboard.component.scss'],
  providers: [DialogService, MovieService]
})
export class PrviLabosDashboardComponent implements OnInit {

  public reverse: boolean = false;
  public years: Number[] = [];
  public isDataLoaded: boolean = false;
  public movies!: Movie[];

  constructor(
    private dialogService: DialogService,
    private movieService: MovieService,
  ) { }

  ngOnInit(): void {

  }

  public addMovie() {
    this.dialogService.open(PrviLabosAddMovieComponent, {
      header: 'Unesi film',
      width: '50%'
    })
  }

  public fetchMovies(): void {
    this.movieService.getMovies().then(movies => {
      this.movies = movies;
      this.isDataLoaded = true;

      movies.forEach(movie => {
        this.years.push(movie.year);
      })

      this.years = [...new Set(this.years)];
      this.years.sort((a, b) => a.valueOf() - b.valueOf())
    });
  }

}
