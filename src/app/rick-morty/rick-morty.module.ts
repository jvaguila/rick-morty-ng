import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { CardRickMortyComponent } from './component/card-rick-morty/card-rick-morty.component';
import { SearchComponent } from './component/search/search.component';
import { RickMortyService } from './services/rick-morty.service';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: '**',
        redirectTo: 'home',
      },
    ],
  },
];

@NgModule({
  declarations: [HomeComponent, CardRickMortyComponent, SearchComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [RickMortyService],
})
export class RickMortyModule {}
