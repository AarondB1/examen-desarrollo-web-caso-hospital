export interface Cita {
  id: number;
  nombre: string;
  dni: string;
  telefono: string;
  email: string;
  especialidad: string;
  fecha: string;
  motivo: string;
}

export type TipoAlerta = 'success' | 'danger' | 'warning';

export interface Alerta {
  tipo: TipoAlerta;
  mensaje: string;
}
