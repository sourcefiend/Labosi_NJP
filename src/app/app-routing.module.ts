import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
