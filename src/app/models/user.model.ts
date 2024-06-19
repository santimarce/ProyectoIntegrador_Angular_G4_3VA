import { Rol } from "./catalogmodel";

export interface User {
id_user: number;
user_id: string;
email: string;
contrasenia: string;
activo: boolean;
rol: Rol;
}