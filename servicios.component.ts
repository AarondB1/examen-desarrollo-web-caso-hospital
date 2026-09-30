import { Component, inject } from '@angular/core';
import { HospitalService } from '../../services/hospital.service';

@Component({
  selector: 'app-servicios',
  standalone: true,
  template: `
    <section id="servicios" class="seccion">
      <div class="container">
        <h2>Nuestros servicios</h2>
        <p class="lead-sub">Todo lo que necesita para cuidar su salud, en un solo lugar.</p>
        <div class="row g-4">
          @for (s of servicios; track s.id) {
            <div class="col-12 col-md-6 col-lg-4">
              <div class="card h-100">
                <div class="card-body p-4">
                  <div class="fs-1 mb-2" aria-hidden="true">{{ s.icono }}</div>
                  <h3 class="h5">{{ s.nombre }}</h3>
                  <p class="mb-0 text-secondary">{{ s.descripcion }}</p>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `
})
export class ServiciosComponent {
  private readonly hospital = inject(HospitalService);
  servicios = this.hospital.getServicios();
}
