import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrviLabosDashboardComponent } from './prvi-labos-dashboard/prvi-labos-dashboard.component';
import { PrviLabosTableToolbarComponent } from './prvi-labos-table-toolbar/prvi-labos-table-toolbar.component';
import { PrviLabosAddMovieComponent } from './prvi-labos-add-movie/prvi-labos-add-movie.component';
import { PrviLabosMovieTableComponent } from './prvi-labos-movie-table/prvi-labos-movie-table.component';
import {ButtonModule} from 'primeng/button';



@NgModule({
  declarations: [
    PrviLabosDashboardComponent,
    PrviLabosTableToolbarComponent,
    PrviLabosAddMovieComponent,
    PrviLabosMovieTableComponent,
  ],
  imports: [
    CommonModule,
    ButtonModule
  ],
})
export class PrviLabosModule { }
