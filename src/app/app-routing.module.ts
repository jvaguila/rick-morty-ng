import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RickMortyModule } from './rick-morty/rick-morty.module';

const routes: Routes = [
  {
    path: 'rick-morty',
    loadChildren: () =>
      import('./rick-morty/rick-morty.module').then((m) => m.RickMortyModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), RickMortyModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
