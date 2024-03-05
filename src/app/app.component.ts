import { Component } from '@angular/core';
import { NavigationEnd,Event, Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  activeInicio: boolean = true;
  activeVerTodos : boolean = false;
  constructor(private router: Router){}
  ngOnInit() {

    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        const currentRoute = event.url;
        // Lógica para determinar si la clase debe aplicarse o no
        this.activeInicio = currentRoute === '/inicio';
        this.activeVerTodos = currentRoute === '/pokemon';
      }
    });
  }
}
