import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from 'src/app/service/pokemon-api.service';

@Component({
  selector: 'app-pokemon-detalles',
  templateUrl: './pokemon-detalles.component.html',
  styleUrls: ['./pokemon-detalles.component.css'],
})
export class PokemonDetallesComponent {
  pokemon:any;
  constructor(private router: Router,private activateRouter : ActivatedRoute,private pokemonService : PokemonService) {}
  ngOnInit(): void {
    this.cargarDatos();
  }
  cargarDatos(){
    const nombrePokemon = this.activateRouter.snapshot.params['nombre'];
    this.pokemonService.getPokemonNombre(nombrePokemon).subscribe(data=>{
      this.pokemon = data;
      if (this.pokemon.name) {
        this.pokemon.name =
           this.pokemon.name.charAt(0).toUpperCase() + this.pokemon.name.slice(1);
       }
    },(err)=>{
      alert('Error al ver el producto.')
      console.log(err)
    })
  }
}