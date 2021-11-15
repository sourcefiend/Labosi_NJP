import { NgModule } from '@angular/core';
import { PrviLabosDashboardComponent } from './prvi-labos-dashboard/prvi-labos-dashboard.component';
import { PrviLabosAddMovieComponent } from './prvi-labos-add-movie/prvi-labos-add-movie.component';
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
import { FormlyModule } from '@ngx-formly/core';
import { FormlyPrimeNGModule } from '@ngx-formly/primeng';


@NgModule({
  declarations: [
    PrviLabosDashboardComponent,
    PrviLabosAddMovieComponent,
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
    InputTextModule,
    FormlyModule.forRoot({ extras: { lazyRender: true } }),
    FormlyPrimeNGModule
  ],
})
export class PrviLabosModule { }
