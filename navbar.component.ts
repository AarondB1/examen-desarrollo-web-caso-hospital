import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  template: `
    <nav class="navbar navbar-expand-lg navbar-dark sticky-top" style="background: var(--sano-deep)">
      <div class="container">
        <a class="navbar-brand fs-4" href="#inicio">✚ Dr. Sano</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#menu" aria-controls="menu" aria-expanded="false" aria-label="Abrir menú">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="menu">
          <ul class="navbar-nav ms-auto align-items-lg-center gap-lg-1">
            <li class="nav-item"><a class="nav-link" href="#servicios">Servicios</a></li>
            <li class="nav-item"><a class="nav-link" href="#medicos">Médicos</a></li>
            <li class="nav-item"><a class="nav-link" href="#resenas">Reseñas</a></li>
            <li class="nav-item"><a class="nav-link" href="#promociones">Promociones</a></li>
            <li class="nav-item ms-lg-2"><a class="btn btn-coral btn-sm px-3" href="#cita">Reservar cita</a></li>
          </ul>
        </div>
      </div>
    </nav>
  `
})
export class NavbarComponent {}
