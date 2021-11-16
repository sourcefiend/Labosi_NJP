import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { Movie } from 'src/app/shared/models/movie';
import { MovieService } from 'src/app/shared/services/movies.service';
import { PrviLabosAddMovieComponent } from '../prvi-labos-add-movie/prvi-labos-add-movie.component';

@Component({
  selector: 'app-prvi-labos-dashboard',
  templateUrl: './prvi-labos-dashboard.component.html',
  styleUrls: ['./prvi-labos-dashboard.component.scss'],
  providers: [DialogService, MovieService, MessageService]
})
export class PrviLabosDashboardComponent implements OnInit {

  public years: Number[] = [];
  public isDataLoaded: boolean = false;
  public movies!: Movie[];
  public filteredMovies!: Movie[];

  public filterForm = new FormGroup({
    limit: new FormControl(),
    reverse: new FormControl(),
    year: new FormControl()
  })

  constructor(
    private dialogService: DialogService,
    private movieService: MovieService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.movieService.movieAdded.subscribe((movie) => {
      this.fetchMovies();
    })
  }

  public addMovie() {
    this.dialogService.open(PrviLabosAddMovieComponent, {
      header: 'Unesi film',
      width: '50%'
    }).onClose.subscribe(result => {
      if (result == 'success') {
        this.messageService.add({severity: 'success', summary: 'Success', detail: 'Film uspješno dodan!'})
      }
    })
  }

  public fetchMovies(): void {
    this.years = [];
    this.movies = this.movieService.getMovies();
    
    this.filteredMovies = this.movies;
    this.isDataLoaded = true;
    
    this.movies.forEach(movie => {
      this.years.push(movie.year);
    })

    this.years = [...new Set(this.years)];

    this.years.sort((a, b) => a.valueOf() - b.valueOf())

    this.movies.sort((a, b) => b.rating.valueOf() - a.rating.valueOf());
  }

  public deleteMovie(movie: Movie) {
    const index = this.movies.indexOf(movie);
    if (index > -1) {
      this.movies.splice(index, 1);
      this.movieService.deleteMovie(movie);
      this.messageService.add({severity: 'success', summary: 'Success', detail: 'Film uspješno obrisan!'})
    }
  }

  public refreshTable(): void {

    this.filteredMovies = this.movies.filter(movie => movie.year == this.filterForm.value.year);
    
    if (this.filterForm.value.reverse) {
      this.filteredMovies.sort((a, b) => a.rating.valueOf() - b.rating.valueOf())
    }

    if (this.filterForm.value.limit) {
      this.filteredMovies = this.filteredMovies.slice(0, this.filterForm.value.limit);
    }
  }

}
