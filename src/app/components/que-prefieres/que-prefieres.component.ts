import { Component } from '@angular/core';
import { PokemonService } from 'src/app/service/pokemon-api.service';

@Component({
  selector: 'app-que-prefieres',
  templateUrl: './que-prefieres.component.html',
  styleUrls: ['./que-prefieres.component.css']
})
export class QuePrefieresComponent {
  pokemonList: any[] = [];
  pokemonUno: any = {};
  pokemonDos: any = {};

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.getAllPokemon();
  }
  refrestar(){
    this.getAllPokemon();
  }

  getAllPokemon() {
    this.pokemonService.getAllPokemon().subscribe(
      (data: any) => {
        this.pokemonList = data.results;
        this.getPokemonDetails();
        this.pokemonUno = this.pokemonList[this.generarNumeroAleatorio()];
        this.pokemonDos = this.pokemonList[this.generarNumeroAleatorio()];
      },
      (error) => {
        console.error('Error al obtener los datos:', error);
      }
    );
  }

  getPokemonDetails() {
    for (const pokemon of this.pokemonList) {
      this.pokemonService
        .getPokemonDetails(pokemon.url)
        .subscribe((details: any) => {
          pokemon.details = details;
          if (pokemon.name) {
            pokemon.name =
              pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
          }
        });
    }
  }
  generarNumeroAleatorio(): number {
    // Genera un número aleatorio entre 1 y 150
    return Math.floor(Math.random() * 150) + 1;
  }
}
