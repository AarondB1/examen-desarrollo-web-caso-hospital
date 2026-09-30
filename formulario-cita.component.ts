import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HospitalService } from '../../services/hospital.service';
import { CitaService } from '../../services/cita.service';

@Component({
  selector: 'app-formulario-cita',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario-cita.component.html'
})
export class FormularioCitaComponent {
  private readonly hospital = inject(HospitalService);
  readonly citaService = inject(CitaService);

  readonly especialidades = this.hospital.getEspecialidades();

  // Cada campo del formulario es un Signal
  nombre = signal('');
  dni = signal('');
  telefono = signal('');
  email = signal('');
  especialidad = signal('');
  fecha = signal('');
  motivo = signal('');

  /** Se pone en true al intentar enviar, para mostrar los errores. */
  intentado = signal(false);

  /** Fecha mínima permitida para evitar registrar citas en el pasado. */
  readonly fechaMinima = new Date().toISOString().split('T')[0];

  // Validaciones derivadas con computed
  errores = computed(() => {
    const e: Record<string, string> = {};
    if (this.nombre().trim().length < 3) e['nombre'] = 'Ingrese su nombre completo.';
    if (!/^\d{8}$/.test(this.dni())) e['dni'] = 'El DNI debe tener 8 dígitos.';
    if (!/^9\d{8}$/.test(this.telefono())) e['telefono'] = 'Ingrese un celular de 9 dígitos que empiece con 9.';
    if (!/^\S+@\S+\.\S+$/.test(this.email())) e['email'] = 'Ingrese un correo válido.';
    if (!this.especialidad()) e['especialidad'] = 'Elija una especialidad.';
    if (!this.fecha()) e['fecha'] = 'Elija una fecha.';
    else if (this.fecha() < this.fechaMinima) e['fecha'] = 'Seleccione una fecha válida desde hoy.';
    return e;
  });

  esValido = computed(() => Object.keys(this.errores()).length === 0);

  enviar(): void {
    this.intentado.set(true);
    if (!this.esValido()) {
      this.citaService.mostrarAlerta({
        tipo: 'danger',
        mensaje: 'Revise los campos marcados en rojo antes de guardar.'
      });
      return;
    }
    this.citaService.agregar({
      nombre: this.nombre().trim(),
      dni: this.dni(),
      telefono: this.telefono(),
      email: this.email(),
      especialidad: this.especialidad(),
      fecha: this.fecha(),
      motivo: this.motivo().trim()
    });
    this.limpiar();
  }

  limpiar(): void {
    this.nombre.set(''); this.dni.set(''); this.telefono.set(''); this.email.set('');
    this.especialidad.set(''); this.fecha.set(''); this.motivo.set('');
    this.intentado.set(false);
  }

  invalido(campo: string): boolean {
    return this.intentado() && !!this.errores()[campo];
  }
}
