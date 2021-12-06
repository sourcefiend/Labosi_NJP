import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentDetailComponent } from './features/cetvrti-labos/student-detail/student-detail.component';
import { StudentsComponent } from './features/cetvrti-labos/students/students.component';
import { DrugiLabosDashboardComponent } from './features/drugi-labos/drugi-labos-dashboard/drugi-labos-dashboard.component';
import { FullComponent } from './features/layout/full/full.component';
import { PrviLabosDashboardComponent } from './features/prvi-labos/prvi-labos-dashboard/prvi-labos-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: 'prvi-labos',
        component: PrviLabosDashboardComponent,
        loadChildren: () => import('./features/prvi-labos/prvi-labos.module').then(p => p.PrviLabosModule)
      },
      {
        path: 'drugi-labos',
        component: DrugiLabosDashboardComponent,
        loadChildren: () => import('./features/drugi-labos/drugi-labos.module').then(p => p.DrugiLabosModule)
      },
      {
        path: 'cetvrti-labos',
        component: StudentsComponent,
        loadChildren: () => import('./features/cetvrti-labos/cetvrti-labos.module').then(p => p.CetvrtiLabosModule)
      },
      {
        path: 'cetvrti-labos/:jmbag',
        component: StudentDetailComponent,
        loadChildren: () => import('./features/cetvrti-labos/cetvrti-labos.module').then(p => p.CetvrtiLabosModule)
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
