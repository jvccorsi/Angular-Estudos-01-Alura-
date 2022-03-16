import { Transferencia } from './../transferencia/transferencia.module';
import { ServiceTransferenciaService } from './../services/service-transferencia.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss'],
})
export class ExtratoComponent implements OnInit {
  transferencia_extrato: any[];
  constructor(private service: ServiceTransferenciaService) {}

  ngOnInit(): void {
    this.service //PARTE DA API, DANDO UM GET E ARMAZENANDO NA VARIAVEL INTERNA.
      .todasTransferencias_GET_API()
      .subscribe((transferencias: Transferencia[]) => {
        console.table(transferencias);
        this.transferencia_extrato = transferencias;
      });
  }
}
