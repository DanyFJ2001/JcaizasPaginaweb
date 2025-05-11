import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-autos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './autos.component.html',
  styleUrl: './autos.component.css'
})
export class AutosComponent {

featuredCars = [
    {
      id: 1,
      brand: 'Renault',
      model: 'Sandero',
      year: 2023,
      kilometers: 22750,
      location: 'Quito',
      price: 14700,
      negotiable: true,
      image: '',
      isTop: true
    },
    {
      id: 2,
      brand: 'Nissan',
      model: 'Versa',
      year: 2022,
      kilometers: 42000,
      location: 'Quito',
      price: 18900,
      negotiable: true,
      image: '',
      isTop: true
    },
    {
      id: 3,
      brand: 'Lifan',
      model: '620',
      year: 2018,
      kilometers: 74650,
      location: 'Quito',
      price: 7500,
      negotiable: true,
      image: '',
      isTop: true
    },
    {
      id: 4,
      brand: 'Chevrolet',
      model: 'DMAX CRDI PREMIER',
      year: 2021,
      kilometers: 95000,
      location: 'Quito',
      price: 25000,
      negotiable: true,
      image: '',
      isTop: true
    },
    {
      id: 5,
      brand: 'Chevrolet',
      model: 'Grand Vitara SZ 2.4',
      year: 2012,
      kilometers: 185000,
      location: 'Quito',
      price: 13500,
      negotiable: true,
      image: '',
      isTop: true
    },
    {
      id: 6,
      brand: 'Kia',
      model: 'Optima',
      year: 2002,
      kilometers: 174000,
      location: 'Quito',
      price: 6500,
      negotiable: true,
      image: '',
      isTop: true
    },
   
  ];

  // Método para manejar el clic en el botón de oferta
  makeOffer(carId: number): void {
    console.log(`Se ha realizado una oferta para el auto ID: ${carId}`);
    // Aquí se implementaría la lógica para abrir un modal de oferta
    // o redirigir a una página de detalles del auto
  }
}
