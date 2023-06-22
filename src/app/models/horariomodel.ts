import { Time } from "@angular/common";

export interface Horario{
    id: string;
    horainicio: Time;
    horafin: Time;
    iddocente: number;
    idcurso: number;    
    idasignatura: number;
    iddia: number;
}