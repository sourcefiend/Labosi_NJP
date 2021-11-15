import { Component, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { PrviLabosAddMovieComponent } from '../prvi-labos-add-movie/prvi-labos-add-movie.component';

@Component({
  selector: 'app-prvi-labos-dashboard',
  templateUrl: './prvi-labos-dashboard.component.html',
  styleUrls: ['./prvi-labos-dashboard.component.scss'],
  providers: [DialogService]
})
export class PrviLabosDashboardComponent implements OnInit {

  constructor(
    public dialogService: DialogService
  ) { }

  ngOnInit(): void {

  }

  public addMovie() {
    this.dialogService.open(PrviLabosAddMovieComponent, {
      header: 'Unesi film',
      width: '50%'
    })
  }

}
