import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { Movie } from 'src/app/shared/models/movie';

@Component({
  selector: 'app-prvi-labos-add-movie',
  templateUrl: './prvi-labos-add-movie.component.html',
  styleUrls: ['./prvi-labos-add-movie.component.scss']
})
export class PrviLabosAddMovieComponent implements OnInit {

  form = new FormGroup({});
  
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(model: Movie) {

  }

}
