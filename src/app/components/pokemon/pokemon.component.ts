import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/service/pokemon-api.service';
import { BuscadorService } from 'src/app/service/buscador.service';
@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css'],
})
export class PokemonComponent implements OnInit {
  pokemonList: any[] = [];
  filteredPokemonList: any[] = [];
  searchTerm: string = '';
  checkboxType: { [key: string]: boolean } = {
    fire: false,
    water: false,
    normal: false,
    ground: false,
    electric: false,
    grass: false,
    flying: false,
  };
  constructor(
    private pokemonService: PokemonService,
    private searchService: BuscadorService
  ) {}

  ngOnInit(): void {
    this.getAllPokemon();
    this.subscribeToSearchTerm();
  }

  getAllPokemon() {
    this.pokemonService.getAllPokemon().subscribe(
      (data: any) => {
        this.pokemonList = data.results;
        this.getPokemonDetails();
        this.filteredPokemonList = this.pokemonList;
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

  subscribeToSearchTerm() {
    this.searchService.currentSearchTerm.subscribe((searchTerm) => {
      this.searchTerm = searchTerm;
      this.filterPokemon();
    });
  }

  filterPokemon() {
    this.filteredPokemonList = this.pokemonList.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  onCheckboxChange(type: string) {
    if (Object.values(this.checkboxType).some((checked) => checked)) {
      this.filterByType(type);
    } else {
      this.filteredPokemonList = this.pokemonList;
    }
  }

  filterByType(type: string) {
    this.filteredPokemonList = this.filteredPokemonList.filter((pokemon) =>
      pokemon.details.types.some(
        (pokemonType: { type: { name: string } }) =>
          pokemonType.type.name.toLowerCase() === type.toLowerCase()
      )
    );
  }
}
