import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(public http: HttpClient) { }

  public getHeaders(): HttpHeaders {
    const headers =  new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json'
    });
    return headers;
  }

  getDatosTabla(): Observable<any> {
    const headers = this.getHeaders();
    return this.http.get(environment.urlBaseGeneral + 'datos-prueba', {headers});
  }

  getDatosTarjetas(): Observable<any> {
    const headers = this.getHeaders();
    return this.http.get(environment.urlBaseGeneral + 'datos-tarjeta', {headers});
  }

}
