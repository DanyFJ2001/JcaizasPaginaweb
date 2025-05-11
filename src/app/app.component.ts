import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { HomeComponent } from "./components/home/home.component";
import { MarcasComponent } from "./components/marcas/marcas.component";
import { AutosComponent } from "./components/autos/autos.component";
import { SubscripcionesComponent } from "./components/subscripciones/subscripciones.component";
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, HomeComponent, MarcasComponent, AutosComponent, SubscripcionesComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Jcaizas';
}
