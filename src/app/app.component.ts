import { Component } from '@angular/core';
import { NavigationEnd,Event, Router } from '@angular/router';
import { BuscadorService } from './service/buscador.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  activeInicio: boolean = true;
  activeVerTodos : boolean = false;
  activeVersus : boolean = false
  constructor(private router: Router, private searchService: BuscadorService){}
  ngOnInit() {

    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        const currentRoute = event.url;
        // Lógica para determinar si la clase debe aplicarse o no
        this.activeInicio = currentRoute === '/inicio';
        this.activeVerTodos = currentRoute === '/pokemon';
        this.activeVersus = currentRoute === '/versus';
      }
    });
  }

  searchTerm: string = '';

  onSearch() {
    this.searchService.changeSearchTerm(this.searchTerm);
  }

}
