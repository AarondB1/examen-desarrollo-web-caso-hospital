import { Component, inject } from '@angular/core';
import { HospitalService } from '../../services/hospital.service';

@Component({
  selector: 'app-resenas',
  standalone: true,
  template: `
    <section id="resenas" class="seccion">
      <div class="container">
        <h2>Lo que dicen nuestros pacientes</h2>
        <p class="lead-sub">Opiniones reales de quienes se atendieron con nosotros.</p>
        <div class="row g-4">
          @for (r of resenas; track r.id) {
            <div class="col-12 col-md-4">
              <figure class="card h-100 mb-0">
                <div class="card-body p-4">
                  <div class="mb-2" [attr.aria-label]="r.puntaje + ' de 5 estrellas'" style="color:#f2b01e">
                    {{ estrellas(r.puntaje) }}
                  </div>
                  <blockquote class="mb-3">“{{ r.comentario }}”</blockquote>
                  <figcaption class="fw-bold text-teal">{{ r.paciente }}</figcaption>
                </div>
              </figure>
            </div>
          }
        </div>
      </div>
    </section>
  `
})
export class ResenasComponent {
  private readonly hospital = inject(HospitalService);
  resenas = this.hospital.getResenas();

  estrellas(n: number): string {
    return '★'.repeat(n) + '☆'.repeat(5 - n);
  }
}
