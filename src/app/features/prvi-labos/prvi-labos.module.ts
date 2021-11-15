import { NgModule } from '@angular/core';
import { PrviLabosDashboardComponent } from './prvi-labos-dashboard/prvi-labos-dashboard.component';
import { PrviLabosTableToolbarComponent } from './prvi-labos-table-toolbar/prvi-labos-table-toolbar.component';
import { PrviLabosAddMovieComponent } from './prvi-labos-add-movie/prvi-labos-add-movie.component';
import { PrviLabosMovieTableComponent } from './prvi-labos-movie-table/prvi-labos-movie-table.component';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { ImageModule } from 'primeng/image';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { InputTextModule } from 'primeng/inputtext';


@NgModule({
  declarations: [
    PrviLabosDashboardComponent,
    PrviLabosTableToolbarComponent,
    PrviLabosAddMovieComponent,
    PrviLabosMovieTableComponent,
  ],
  imports: [
    ButtonModule,
    InputNumberModule,
    CheckboxModule,
    FormsModule,
    DropdownModule,
    TableModule,
    CommonModule,
    ImageModule,
    DynamicDialogModule,
    InputTextModule
  ],
})
export class PrviLabosModule { }
