import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'aplication-json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class CuentaService {

  constructor(private http: HttpClient) { }

  public getCategorias(id){
    return this.http.get("http://167.71.202.42/api/cuentas/"+id,null);
  }

  crearCat(id,nom,cant){
    return this.http.put("http://167.71.202.42/api/cuentas/"+id+"/categorias/crear/"+nom+"/"+cant,null);  }
}
//nombre y saldo