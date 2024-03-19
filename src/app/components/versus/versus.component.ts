import { Component } from '@angular/core';
import { PokemonService } from 'src/app/service/pokemon-api.service';

@Component({
  selector: 'app-versus',
  templateUrl: './versus.component.html',
  styleUrls: ['./versus.component.css'],
})
export class VersusComponent {
  pokemonList: any[] = [];
  pokemonUno: any = {};
  pokemonDos: any = {};
  pokemonSelect: any;
  barAnimationActive: boolean = false;
  alertaPokemonSelect: boolean = false;
  pokemonGanador: any;
  racha: number = 0;
  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.getAllPokemon();
  }

  refrestar() {
    this.getAllPokemon();
    this.barAnimationActive = false;
    this.pokemonSelect = '';
  }

  getAllPokemon() {
    this.pokemonService.getAllPokemon().subscribe(
      (data: any) => {
        this.pokemonList = data.results;
        this.getPokemonDetails();
        this.pokemonUno = this.pokemonList[this.generarNumeroAleatorio()];
        this.pokemonDos = this.pokemonList[this.generarNumeroAleatorio()];
        if (this.pokemonUno === this.pokemonDos) {
          this.pokemonDos = this.pokemonList[this.generarNumeroAleatorio()];
        }
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

          const stats = pokemon.details.stats;
          let sumaTotal = 0;

          // Sumar todas las estadísticas
          for (let index = 0; index < stats.length; index++) {
            sumaTotal += stats[index].base_stat;
          }

          // Calcular el promedio
          const promedio = sumaTotal / stats.length;
          pokemon.poder = Math.floor(promedio);
          if (pokemon.name) {
            pokemon.name =
              pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
          }
        });
    }
  }
  generarNumeroAleatorio() {
    // Genera un número aleatorio entre 1 y 150
    return Math.floor(Math.random() * 150) + 1;
  }

  selectPoke(url: string) {
    this.pokemonSelect = url;
  }

  batalla() {
    if (this.pokemonUno.poder > this.pokemonDos.poder) {
      this.pokemonGanador = true;
      if (this.pokemonSelect === this.pokemonUno.url) {
        this.racha++;
      } else {
        this.racha = 0;
      }
    } else if (this.pokemonUno.poder === this.pokemonDos.poder) {
      this.pokemonGanador = undefined;
      if (
        this.pokemonSelect === this.pokemonUno.url ||
        this.pokemonSelect === this.pokemonDos.url
      ) {
        this.racha++;
      }
    } else {
      this.pokemonGanador = false;
      if (this.pokemonSelect === this.pokemonDos.url) {
        this.racha++;
      } else {
        this.racha = 0;
      }
    }
    if (this.pokemonSelect) {
      this.barAnimationActive = true;
      this.alertaPokemonSelect = false;
      setTimeout(() => {
        this.refrestar();
      }, 5000); // 5000 milisegundos = 5 segundos
    } else {
      this.alertaPokemonSelect = true;
    }
  }
}
