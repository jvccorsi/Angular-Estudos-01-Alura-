import { Transferencia } from './../transferencia/transferencia.module';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ServiceTransferenciaService {
  private lista_transferencia: any[];
  private url = '';

  constructor(private httpClient: HttpClient) {
    this.lista_transferencia = [];
    this.url = 'http://localhost:3000/transferencias';
  }

  get listaTransferencias_GET() {
    return this.lista_transferencia;
  }
  // Transferencia = meu model
  todasTransferencias_GET_API(): Observable<Transferencia[]> {
    return this.httpClient.get<Transferencia[]>(this.url);
    //Model  Transferencia
    // Observable: É observador, ele espera uma resposta futura da API. Quando chegar a resposta, o metodo vai acontecer.
  }

  AdicionarlistaTransferencias(transferencia: any) {
    transferencia.data = new Date();
    this.lista_transferencia.push(transferencia);
  }

  AdicionarlistaTransferencias_POST_API(
    transferencia: Transferencia
  ): Observable<Transferencia> {
    return this.httpClient.post<Transferencia>(this.url, transferencia);
  }
}
