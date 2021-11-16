import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { Movie } from 'src/app/shared/models/movie';
import { MovieService } from 'src/app/shared/services/movies.service';

@Component({
  selector: 'app-prvi-labos-add-movie',
  templateUrl: './prvi-labos-add-movie.component.html',
  styleUrls: ['./prvi-labos-add-movie.component.scss']
})
export class PrviLabosAddMovieComponent implements OnInit {

  model!: Movie;

  form = new FormGroup({
    name: new FormControl('', Validators.required),
    year: new FormControl(null, Validators.required),
    rating: new FormControl(null, Validators.required),
    poster: new FormControl('', Validators.required)
  });
  
  constructor(
    private movieService: MovieService,
    private dialogRef: DynamicDialogRef
  ) { }

  ngOnInit(): void {
  }

  onSubmit(model: Movie) {
    try {
      this.movieService.addMovie(model);
      this.dialogRef.close('success');
    } catch (error) {
      console.log(error);
      this.dialogRef.close('error');
    }
  }

}
