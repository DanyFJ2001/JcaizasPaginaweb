import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {// Año actual para el copyright
  currentYear: number = new Date().getFullYear();
  
  // Enlaces principales para el footer
  mainLinks = [
    { title: 'Inicio', url: '/' },
    { title: 'Subastas', url: '/subastas' },
    { title: 'Cómo Funciona', url: '/como-funciona' },
    { title: 'Blog', url: '/blog' },
    { title: 'Contacto', url: '/contacto' }
  ];
  
  // Categorías de vehículos
  categories = [
    { title: 'Autos', url: '/subastas/autos' },
    { title: 'SUVs', url: '/subastas/suvs' },
    { title: 'Camionetas', url: '/subastas/camionetas' },
    { title: 'Motocicletas', url: '/subastas/motos' },
    { title: 'Vehículos Comerciales', url: '/subastas/comerciales' }
  ];
  
  // Enlaces legales
  legalLinks = [
    { title: 'Términos y Condiciones', url: '/legal/terminos' },
    { title: 'Política de Privacidad', url: '/legal/privacidad' },
    { title: 'Cookies', url: '/legal/cookies' },
    { title: 'Política de Reembolso', url: '/legal/reembolsos' },
    { title: 'Licencias', url: '/legal/licencias' }
  ];
  
  // Información de contacto
  contactInfo = {
    address: 'Av. Amazonas y Naciones Unidas, Quito, Ecuador',
    phone: '+593 99 123 4567',
    email: 'info@jcaizas.com',
    hours: 'Lun - Vie: 9:00 - 18:00'
  };
  
  // Redes sociales
  socialMedia = [
    { name: 'Facebook', icon: 'fab fa-facebook-f', url: 'https://facebook.com/' },
    { name: 'Instagram', icon: 'fab fa-instagram', url: 'https://instagram.com/' },
    { name: 'Twitter', icon: 'fab fa-twitter', url: 'https://twitter.com/' },
    { name: 'YouTube', icon: 'fab fa-youtube', url: 'https://youtube.com/' },
    { name: 'LinkedIn', icon: 'fab fa-linkedin-in', url: 'https://linkedin.com/' }
  ];
  
  // Métodos de pago aceptados
  paymentMethods = [
    { name: 'Visa', image: 'assets/imagenes/payments/visa.png' },
    { name: 'MasterCard', image: 'assets/imagenes/payments/mastercard.png' },
    { name: 'PayPal', image: 'assets/imagenes/payments/paypal.png' },
    { name: 'American Express', image: 'assets/imagenes/payments/amex.png' }
  ];
  
  // Método para suscribirse al newsletter
  subscribeToNewsletter(email: string) {
    console.log('Suscribiendo al correo:', email);
    // Aquí se implementaría la lógica para guardar el correo en la base de datos
    // o enviar la información a un servicio de email marketing
  }
}
