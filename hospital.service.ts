import { Injectable } from '@angular/core';
import { Servicio } from '../models/servicio';
import { Medico } from '../models/medico';
import { Resena } from '../models/resena';
import { Promocion } from '../models/promocion';

/** Datos institucionales del hospital (en una app real vendrían de una API). */
@Injectable({ providedIn: 'root' })
export class HospitalService {
  private readonly servicios: Servicio[] = [
    { id: 1, nombre: 'Emergencias 24 horas', descripcion: 'Atención inmediata todos los días del año con equipo de guardia.', icono: '🚑' },
    { id: 2, nombre: 'Consulta ambulatoria', descripcion: 'Citas con especialistas sin largas esperas.', icono: '🩺' },
    { id: 3, nombre: 'Laboratorio clínico', descripcion: 'Análisis de sangre, orina y perfiles completos con resultados en línea.', icono: '🧪' },
    { id: 4, nombre: 'Diagnóstico por imágenes', descripcion: 'Rayos X, ecografía y tomografía.', icono: '🩻' },
    { id: 5, nombre: 'Centro quirúrgico', descripcion: 'Cirugías programadas y de urgencia con recuperación monitoreada.', icono: '🏥' },
    { id: 6, nombre: 'Farmacia', descripcion: 'Medicamentos y material médico dentro del hospital.', icono: '💊' }
  ];

  private readonly medicos: Medico[] = [
    { id: 1, nombre: 'Dra. Lucía Ramos', especialidad: 'Cardiología', experiencia: '15 años', avatar: '👩‍⚕️' },
    { id: 2, nombre: 'Dr. Mateo Quispe', especialidad: 'Pediatría', experiencia: '10 años', avatar: '👨‍⚕️' },
    { id: 3, nombre: 'Dra. Carmen Salas', especialidad: 'Ginecología', experiencia: '12 años', avatar: '👩‍⚕️' },
    { id: 4, nombre: 'Dr. Andrés Paredes', especialidad: 'Traumatología', experiencia: '18 años', avatar: '👨‍⚕️' },
    { id: 5, nombre: 'Dra. Valeria Rojas', especialidad: 'Dermatología', experiencia: '8 años', avatar: '👩‍⚕️' },
    { id: 6, nombre: 'Dr. Julio Medina', especialidad: 'Medicina general', experiencia: '20 años', avatar: '👨‍⚕️' }
  ];

  private readonly resenas: Resena[] = [
    { id: 1, paciente: 'María T.', comentario: 'Me atendieron en pocos minutos y el trato fue muy humano.', puntaje: 5 },
    { id: 2, paciente: 'Luis C.', comentario: 'Excelente pediatra, mi hijo salió tranquilo de la consulta.', puntaje: 5 },
    { id: 3, paciente: 'Rosa H.', comentario: 'Instalaciones limpias y personal amable. Solo la farmacia tuvo cola.', puntaje: 4 }
  ];

  private readonly promociones: Promocion[] = [
    { id: 1, titulo: 'Chequeo preventivo', descripcion: 'Examen físico, hemograma y perfil lipídico.', descuento: '30% dto.', vigenteHasta: '31 de diciembre de 2026' },
    { id: 2, titulo: 'Control pediátrico', descripcion: 'Consulta más vacunas del calendario.', descuento: '2x1', vigenteHasta: '30 de noviembre de 2026' },
    { id: 3, titulo: 'Salud de la mujer', descripcion: 'Ecografía y consulta ginecológica.', descuento: '20% dto.', vigenteHasta: '15 de diciembre de 2026' }
  ];

  getServicios(): Servicio[] { return this.servicios; }
  getMedicos(): Medico[] { return this.medicos; }
  getResenas(): Resena[] { return this.resenas; }
  getPromociones(): Promocion[] { return this.promociones; }
  getEspecialidades(): string[] {
    return [...new Set(this.medicos.map(m => m.especialidad))];
  }
}
