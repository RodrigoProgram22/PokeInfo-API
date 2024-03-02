import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=151';

  constructor(private http: HttpClient) {}

  // Método para obtener la lista de todos los Pokémon
  getAllPokemon(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // Método para obtener los detalles de un Pokémon específico por su ID
  getPokemonDetails(pokemonURL: string): Observable<any> {
    return this.http.get(pokemonURL);
  }
}
