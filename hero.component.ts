import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <header id="inicio" class="text-white" style="background: linear-gradient(120deg, var(--sano-deep), var(--sano-teal));">
      <div class="container py-5">
        <div class="row align-items-center py-lg-5 g-4">
          <div class="col-lg-7">
            <h1 class="display-4 fw-bold">Su salud, en manos que escuchan.</h1>
            <p class="lead mb-4">Atención médica integral para toda la familia. Reserve su cita en un minuto y
              evite esperas.</p>
            <a href="#cita" class="btn btn-coral btn-lg me-2 mb-2">Reservar cita</a>
            <a href="#servicios" class="btn btn-outline-light btn-lg mb-2">Ver servicios</a>
          </div>
          <div class="col-lg-5">
            <div class="card text-dark">
              <div class="card-body p-4">
                <h2 class="h5 text-teal">Horario de atención</h2>
                <p class="mb-1"><strong>Emergencias:</strong> las 24 horas</p>
                <p class="mb-1"><strong>Consultas:</strong> lunes a sábado, 7:00 a 20:00</p>
                <p class="mb-0"><strong>Teléfono:</strong> (064) 555-0123</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  `
})
export class HeroComponent {}
