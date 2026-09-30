import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { MedicosComponent } from './components/medicos/medicos.component';
import { ResenasComponent } from './components/resenas/resenas.component';
import { PromocionesComponent } from './components/promociones/promociones.component';
import { FormularioCitaComponent } from './components/formulario-cita/formulario-cita.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, HeroComponent, ServiciosComponent, MedicosComponent,
    ResenasComponent, PromocionesComponent, FormularioCitaComponent],
  template: `
    <app-navbar />
    <app-hero />
    <main>
      <app-servicios />
      <app-medicos />
      <app-resenas />
      <app-promociones />
      <app-formulario-cita />
    </main>
    <footer class="text-white text-center py-4" style="background: var(--sano-deep)">
      <p class="mb-0 small">© 2026 Hospital Dr. Sano · Av. Salud 123 · (064) 555-0123</p>
    </footer>
  `
})
export class AppComponent {}
