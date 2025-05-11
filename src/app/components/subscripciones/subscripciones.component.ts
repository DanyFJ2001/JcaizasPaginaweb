import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-subscripciones',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './subscripciones.component.html',
  styleUrl: './subscripciones.component.css'
})
export class SubscripcionesComponent implements AfterViewInit {
@ViewChild('basicPlanCard') basicPlanCardRef!: ElementRef;
  @ViewChild('standardPlanCard') standardPlanCardRef!: ElementRef;
  @ViewChild('premiumPlanCard') premiumPlanCardRef!: ElementRef;
  
  // Planes de suscripción
  plans = [
    {
      id: 'basic',
      name: 'Básico',
      price: 5,
      period: 'publicación',
      description: 'Ideal para particulares que desean vender un vehículo',
      popular: false,
      features: [
        { name: '1 publicación de vehículo', included: true },
        { name: 'Duración de 15 días', included: true },
        { name: 'Hasta 5 fotos', included: true },
        { name: 'Visibilidad estándar', included: true },
        { name: 'Destacado en búsquedas', included: false },
        { name: 'Estadísticas de visitas', included: false }
      ]
    },
    {
      id: 'standard',
      name: 'Estándar',
      price: 15,
      period: 'mes',
      description: 'Perfecto para vendedores frecuentes',
      popular: true,
      features: [
        { name: '3 publicaciones simultáneas', included: true },
        { name: 'Duración de 30 días', included: true },
        { name: 'Hasta 10 fotos por vehículo', included: true },
        { name: 'Visibilidad mejorada', included: true },
        { name: 'Destacado en búsquedas', included: true },
        { name: 'Estadísticas de visitas', included: false }
      ]
    },
    {
      id: 'premium',
      name: 'Premium',
      price: 30,
      period: 'mes',
      description: 'Para concesionarios y vendedores profesionales',
      popular: false,
      features: [
        { name: '10 publicaciones simultáneas', included: true },
        { name: 'Duración de 45 días', included: true },
        { name: 'Hasta 20 fotos por vehículo', included: true },
        { name: 'Visibilidad máxima', included: true },
        { name: 'Posición TOP en búsquedas', included: true },
        { name: 'Estadísticas detalladas', included: true }
      ]
    }
  ];

  ngAfterViewInit() {
    // Implementar animación al desplazarse y ver las tarjetas
    this.initScrollAnimation();
  }

  // Método para iniciar la suscripción
  selectPlan(planId: string): void {
    console.log(`Plan seleccionado: ${planId}`);
    // Aquí se implementaría la lógica para iniciar el proceso de suscripción
    // Por ejemplo, redirigir a una página de pago o mostrar un modal de confirmación
  }

  // Inicializar animaciones basadas en scroll
  private initScrollAnimation() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    // Observar las tarjetas de plan
    if (this.basicPlanCardRef) observer.observe(this.basicPlanCardRef.nativeElement);
    if (this.standardPlanCardRef) observer.observe(this.standardPlanCardRef.nativeElement);
    if (this.premiumPlanCardRef) observer.observe(this.premiumPlanCardRef.nativeElement);
  }
}



