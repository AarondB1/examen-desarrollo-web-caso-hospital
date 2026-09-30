import { Injectable, computed, signal } from '@angular/core';
import { Alerta, Cita } from '../models/cita';

const CLAVE = 'dr-sano-citas';

/**
 * Estado de las citas gestionado con Signals:
 *  - signal:   citas y alerta (estado que cambia)
 *  - computed: total (valor derivado que se recalcula solo)
 */
@Injectable({ providedIn: 'root' })
export class CitaService {
  private readonly _citas = signal<Cita[]>(this.cargar());
  readonly citas = this._citas.asReadonly();
  readonly total = computed(() => this._citas().length);

  readonly alerta = signal<Alerta | null>(null);
  private temporizador?: ReturnType<typeof setTimeout>;

  agregar(datos: Omit<Cita, 'id'>): void {
    const id = Date.now();
    this._citas.update(lista => [...lista, { id, ...datos }]);
    this.guardar();
    this.mostrarAlerta({ tipo: 'success', mensaje: `Cita registrada para ${datos.nombre}.` });
  }

  eliminar(id: number): void {
    this._citas.update(lista => lista.filter(c => c.id !== id));
    this.guardar();
    this.mostrarAlerta({ tipo: 'warning', mensaje: 'La cita fue eliminada.' });
  }

  mostrarAlerta(alerta: Alerta): void {
    clearTimeout(this.temporizador);
    this.alerta.set(alerta);
    this.temporizador = setTimeout(() => this.alerta.set(null), 5000);
  }

  cerrarAlerta(): void {
    this.alerta.set(null);
  }

  private guardar(): void {
    try { localStorage.setItem(CLAVE, JSON.stringify(this._citas())); } catch { /* sin almacenamiento */ }
  }

  private cargar(): Cita[] {
    try { return JSON.parse(localStorage.getItem(CLAVE) ?? '[]') as Cita[]; } catch { return []; }
  }
}
