import { Component, inject } from '@angular/core';
import { HospitalService } from '../../services/hospital.service';

@Component({
  selector: 'app-promociones',
  standalone: true,
  template: `
    <section id="promociones" class="seccion bg-mint">
      <div class="container">
        <h2>Promociones vigentes</h2>
        <p class="lead-sub">Aproveche estos beneficios antes de que terminen.</p>
        <div class="row g-4">
          @for (p of promociones; track p.id) {
            <div class="col-12 col-md-6 col-lg-4">
              <div class="card h-100 border-start border-5 border-warning">
                <div class="card-body p-4">
                  <span class="badge text-bg-danger fs-6 mb-2">{{ p.descuento }}</span>
                  <h3 class="h5">{{ p.titulo }}</h3>
                  <p class="text-secondary">{{ p.descripcion }}</p>
                  <p class="small mb-0">Válido hasta el {{ p.vigenteHasta }}</p>
                </div>
                <div class="card-footer bg-white border-0 pb-3">
                  <a href="#cita" class="btn btn-outline-primary btn-sm">Reservar con esta promo</a>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `
})
export class PromocionesComponent {
  private readonly hospital = inject(HospitalService);
  promociones = this.hospital.getPromociones();
}
