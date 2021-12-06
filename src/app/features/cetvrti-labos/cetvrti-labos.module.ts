import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsComponent } from './students/students.component';
import { TableModule } from 'primeng/table';
import { SemestarPipe } from 'src/app/shared/pipes/semestar.pipe';
import { SharedModule } from 'src/app/shared/shared.module';
import { InputNumberModule } from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';



@NgModule({
  declarations: [
    StudentsComponent,
    StudentDetailComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    SharedModule,
    InputNumberModule,
    FormsModule,
    RouterModule,
    ButtonModule
  ]
})
export class CetvrtiLabosModule { }
