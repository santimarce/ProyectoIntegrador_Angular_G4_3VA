export interface Student {
    id_alumno: string;
    nombres_alumno: string;
    apellidos_alumno: string;
    fechanacimiento_alumno: Date | null;
    contacto_alumno: string;
    direccion_alumno: string;
    email_alumno: string;
    contrasenia_alumno: string;
    id_jornada: number;
    id_nivel: number;
    id_paralelo: number;
    id_carrera: number;
}
