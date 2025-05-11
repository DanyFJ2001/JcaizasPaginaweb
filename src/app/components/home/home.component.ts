import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, OnInit, OnDestroy, PLATFORM_ID, Inject, ElementRef, ViewChild, Renderer2, AfterViewInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy, AfterViewInit {
   @ViewChild('wordsRotation') wordsRotation: ElementRef | undefined;
  
  // Datos para los selectores
  vehicleTypes = ['Autos', 'SUVs', 'Camionetas', 'Motocicletas', 'Vehículos Comerciales'];
  brands = ['Toyota', 'Honda', 'Chevrolet', 'Ford', 'Nissan', 'Kia', 'Hyundai', 'Volkswagen', 'Mazda', 'BMW', 'Mercedes-Benz'];
  models = ['Corolla', 'Civic', 'Spark', 'F-150', 'Sentra', 'Sportage', 'Tucson', 'Gol', 'CX-5', 'X5', 'Clase C'];
  
  // Rangos de precios
  priceRanges = [
    '0 - 10,000',
    '10,000 - 20,000',
    '20,000 - 30,000',
    '30,000 - 40,000',
    '40,000 - 50,000',
    '50,000+'
  ];
  
  // Años
  years: number[] = [];
  
  // Valores seleccionados
  selectedType: string = 'Autos';
  selectedBrand: string = '';
  selectedModel: string = '';
  selectedPriceFrom: string = '';
  selectedPriceTo: string = '';
  selectedYearFrom: number | null = null;
  selectedYearTo: number | null = null;
  
  // Control de carrusel
  currentSlide = 0;
  slides = [
    {
      image: '../../../assets/imagenes/1.jpg',
      title: 'Las mejores subastas de autos en un solo lugar',
      subtitle: 'Las mejores ofertas en autos nuevos y usados'
    },
    {
      image: '../../../assets/imagenes/3.jpg',
      title: 'Encuentra el auto de tus sueños',
      subtitle: 'Gran selección de vehículos de calidad'
    },
    {
      image: '../../../assets/imagenes/2.jpg',
      title: 'Subastas 100% transparentes',
      subtitle: 'Procesos verificados y seguros'
    }
  ];
  
  // Propiedades para controlar el carrusel automático
  private carouselInterval: any;
  autoplayInterval = 5000; // 5 segundos
  
  // Palabras para el efecto de rotación de texto
  rotatingWords = ['subastas','experiencias' , 'oportunidades', 'promociones'];
  currentWordIndex = 0;
  
  // Control de intervalos
  private textRotationInterval: any;
  
  // Flag para verificar si estamos en el navegador
  private isBrowser: boolean;
  
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private renderer: Renderer2
  ) {
    // Verificar si estamos en el navegador
    this.isBrowser = isPlatformBrowser(this.platformId);
    
    // Generar años desde 2000 hasta el año actual
    const currentYear = new Date().getFullYear();
    for (let year = currentYear; year >= 2000; year--) {
      this.years.push(year);
    }
  }
  
  ngOnInit() {
    // Iniciar el carrusel automático
    if (this.isBrowser) {
      this.startCarouselAutoplay();
    }
  }
  
  ngAfterViewInit() {
    // Solo iniciar la rotación en el navegador después de que el DOM esté listo
    if (this.isBrowser && this.wordsRotation) {
      // Pequeño retraso para asegurarnos de que el DOM esté completamente renderizado
      setTimeout(() => {
        this.startWordRotation();
      }, 500);
    }
  }
  
  ngOnDestroy() {
    // Limpiar todos los intervalos para evitar fugas de memoria
    if (this.isBrowser) {
      if (this.textRotationInterval) {
        clearInterval(this.textRotationInterval);
      }
      this.stopCarouselAutoplay();
    }
  }
  
  // Método para iniciar la rotación de palabras
  startWordRotation() {
    if (!this.isBrowser || !this.wordsRotation) return;
    
    const wordElements = this.wordsRotation.nativeElement.querySelectorAll('b');
    
    if (!wordElements || wordElements.length === 0) return;
    
    // Asegurar que la primera palabra sea visible inicialmente
    this.renderer.addClass(wordElements[0], 'is-visible');
    
    // Establecer un intervalo para cambiar las palabras
    this.textRotationInterval = setInterval(() => {
      // Quitar clases del elemento actual
      this.renderer.removeClass(wordElements[this.currentWordIndex], 'is-visible');
      this.renderer.addClass(wordElements[this.currentWordIndex], 'is-hidden');
      
      // Calcular el siguiente índice
      const nextWordIndex = (this.currentWordIndex + 1) % wordElements.length;
      
      // Añadir clase al siguiente elemento
      this.renderer.addClass(wordElements[nextWordIndex], 'is-visible');
      
      // Después de que termina la animación de salida
      setTimeout(() => {
        this.renderer.removeClass(wordElements[this.currentWordIndex], 'is-hidden');
        this.currentWordIndex = nextWordIndex;
      }, 600); // Duración de la animación CSS
      
    }, 3000); // Cambiar cada 3 segundos
  }
  
  // Métodos para el carrusel automático
  startCarouselAutoplay() {
    if (this.isBrowser) {
      this.carouselInterval = setInterval(() => {
        this.currentSlide = (this.currentSlide + 1) % this.slides.length;
        
        // Opcional: Añadir/quitar clase para efectos visuales al cambiar
        const heroElement = document.querySelector('.hero-section');
        if (heroElement) {
          this.renderer.addClass(heroElement, 'slide-change');
          
          // Quitar la clase después de la animación
          setTimeout(() => {
            this.renderer.removeClass(heroElement, 'slide-change');
          }, 500);
        }
        
        // Reiniciar animación de la barra de progreso - CORREGIDO CON CASTING
        const progressElement = document.querySelector('.progress-inner');
        if (progressElement) {
          this.renderer.removeClass(progressElement, 'progress-animation');
          // Forzar un reflow para reiniciar la animación
          void (progressElement as HTMLElement).offsetWidth;
          this.renderer.addClass(progressElement, 'progress-animation');
        }
      }, this.autoplayInterval);
    }
  }
  
  stopCarouselAutoplay() {
    if (this.isBrowser && this.carouselInterval) {
      clearInterval(this.carouselInterval);
    }
  }
  
  // Método para cambiar de slide manualmente
  changeSlide(index: number): void {
    this.currentSlide = index;
    
    // Reiniciar el autoplay al interactuar manualmente
    if (this.isBrowser) {
      this.stopCarouselAutoplay();
      this.startCarouselAutoplay();
      
      // Reiniciar animación de la barra de progreso - CORREGIDO CON CASTING
      const progressElement = document.querySelector('.progress-inner');
      if (progressElement) {
        this.renderer.removeClass(progressElement, 'progress-animation');
        // Forzar un reflow para reiniciar la animación
        void (progressElement as HTMLElement).offsetWidth;
        this.renderer.addClass(progressElement, 'progress-animation');
      }
    }
  }
  
  // Pausar el carrusel al pasar el mouse encima
  pauseCarousel() {
    this.stopCarouselAutoplay();
  }
  
  // Reanudar el carrusel al quitar el mouse
  resumeCarousel() {
    this.startCarouselAutoplay();
  }
  
  // Método para buscar
  search(): void {
    // Aquí se implementaría la lógica para buscar
    console.log('Búsqueda con parámetros:', {
      tipo: this.selectedType,
      marca: this.selectedBrand,
      modelo: this.selectedModel,
      precioDesde: this.selectedPriceFrom,
      precioHasta: this.selectedPriceTo,
      añoDesde: this.selectedYearFrom,
      añoHasta: this.selectedYearTo
    });
    
    // En una implementación real, redireccionaríamos a una página de resultados
    // o actualizaríamos una lista de vehículos en la página actual
  }
}