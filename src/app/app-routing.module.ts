import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
