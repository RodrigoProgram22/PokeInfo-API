import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  pokemonData: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getPokemonData();
  }

  getPokemonData() {
    const apiUrl = 'https://pokeapi.co/api/v2/pokemon/pikachu';

    this.http.get(apiUrl).subscribe((data: any) => {
      this.pokemonData = data;
      console.log(this.pokemonData)
    }, error => {
      console.error('Error al obtener los datos:', error);
    });
  }

}
