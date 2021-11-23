import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrugiLabosDashboardComponent } from './drugi-labos-dashboard/drugi-labos-dashboard.component';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';



@NgModule({
  declarations: [
    DrugiLabosDashboardComponent,
  ],
  imports: [
    CommonModule,
    CardModule,
    InputTextModule,
    InputTextareaModule,
    FormsModule,
    ButtonModule,
    DynamicDialogModule,
    ReactiveFormsModule
  ],
  providers: [DialogService]
})
export class DrugiLabosModule { }
