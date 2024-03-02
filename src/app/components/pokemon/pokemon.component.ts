import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/service/pokemon-api.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  pokemonList: any[] = [];

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.getAllPokemon();
  }

  getAllPokemon() {
    this.pokemonService.getAllPokemon().subscribe((data: any) => {
      this.pokemonList = data.results;
      this.getPokemonDetails();
    }, error => {
      console.error('Error al obtener los datos:', error);
    });
  }

  getPokemonDetails() {
    for (const pokemon of this.pokemonList) {
      this.pokemonService.getPokemonDetails(pokemon.url).subscribe((details: any) => {
        pokemon.details = details;
      });
    }
  }
}