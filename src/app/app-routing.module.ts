import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { HomeComponent } from './components/home/home.component';
import { PokemonDetallesComponent } from './components/pokemon-detalles/pokemon-detalles.component';
import { VersusComponent } from './components/versus/versus.component';
import { QuePrefieresComponent } from './components/que-prefieres/que-prefieres.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: HomeComponent },
  { path: 'pokemon', component: PokemonComponent },
  { path: 'detalles/:nombre', component: PokemonDetallesComponent },
  { path: 'versus', component: VersusComponent },
  { path: 'que-prefieres', component: QuePrefieresComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
