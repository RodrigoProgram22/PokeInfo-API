import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  pokemonList: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getAllPokemon();
  }

  getAllPokemon() {
    const apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=151'; // Cambia el límite según la cantidad de Pokémon que quieras mostrar

    this.http.get(apiUrl).subscribe((data: any) => {
      this.pokemonList = data.results;
      this.getPokemonDetails();
    }, error => {
      console.error('Error al obtener los datos:', error);
    });
  }

  getPokemonDetails() {
    for (const pokemon of this.pokemonList) {
      this.http.get(pokemon.url).subscribe((details: any) => {
        pokemon.details = details;
      });
    }
  }
}