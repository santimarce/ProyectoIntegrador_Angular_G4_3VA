import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
//import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:3000/auth'; // Ajusta la URL según tu configuración

  constructor(private http: HttpClient) { }

  login(user_id: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, { user_id, password });
  }

  isLoggedIn(): boolean {
    const token = localStorage.getItem('token');
    if (!token) {
      return false;
    }
    try {
      const decodedToken: any = jwtDecode(token);
      const currentTime = Math.floor(Date.now() / 1000);      
      // Verifica si el token ha expirado
      if (decodedToken.exp && decodedToken.exp < currentTime) {
        return false;
      }
      return true;
    } catch (error) {
      console.error('Error al decodificar el token:', error);
      return false;
    }
  }

  userInformation(user_id: string): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/user/${user_id}`);
  }

  getUserFromLocalStorage(): string | null {
    return localStorage.getItem('rol');
  }

  loginWithGoogle() {
    //return signInWithPopup(this.auth, new GoogleAuthProvider());
  }

  logout() {
    //return signOut(this.auth);
  }

}

function jwt_decode(token: string): any {
  throw new Error('Function not implemented.');
}
