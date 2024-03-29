import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { PokemonDetallesComponent } from './components/pokemon-detalles/pokemon-detalles.component';
import { FormsModule } from '@angular/forms'; 
import { NgOptimizedImage } from '@angular/common';
import { VersusComponent } from './components/versus/versus.component';
import { QuePrefieresComponent } from './components/que-prefieres/que-prefieres.component';
@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    HomeComponent,
    FooterComponent,
    PokemonDetallesComponent,
    VersusComponent,
    QuePrefieresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgOptimizedImage 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
