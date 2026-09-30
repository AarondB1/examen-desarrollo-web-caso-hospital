import { Component, inject } from '@angular/core';
import { HospitalService } from '../../services/hospital.service';

@Component({
  selector: 'app-medicos',
  standalone: true,
  template: `
    <section id="medicos" class="seccion bg-mint">
      <div class="container">
        <h2>Nuestros médicos</h2>
        <p class="lead-sub">Especialistas con experiencia y trato cercano.</p>
        <div class="row g-4">
          @for (m of medicos; track m.id) {
            <div class="col-6 col-md-4 col-lg-2">
              <div class="card h-100 text-center">
                <div class="card-body">
                  <div class="display-4" aria-hidden="true">{{ m.avatar }}</div>
                  <h3 class="h6 mt-2 mb-1">{{ m.nombre }}</h3>
                  <span class="badge text-bg-primary mb-1">{{ m.especialidad }}</span>
                  <p class="small text-secondary mb-0">{{ m.experiencia }} de experiencia</p>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `
})
export class MedicosComponent {
  private readonly hospital = inject(HospitalService);
  medicos = this.hospital.getMedicos();
}
