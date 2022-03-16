import { ServiceTransferenciaService } from './../services/service-transferencia.service';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Transferencia } from '../transferencia/transferencia.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent implements OnInit {
  constructor(
    private service: ServiceTransferenciaService,
    private router: Router //Obj para conseguir navegar
  ) {}

  @Output() aoTransferir = new EventEmitter<any>();

  // #Mandar esses dados paa quem invocou esse component

  ngOnInit(): void {}
  valor: number;
  destino: string;

  transferir() {
    console.log('Valor' + this.valor + '\nDestino' + this.destino);
    // Exemplo com Emit:
    // this.aoTransferir.emit({ valor: this.valor, destino: this.destino });
    const valorEmitir: Transferencia = {
      valor: this.valor,
      destino: this.destino,
      data: new Date(),
    };

    //Subscribe: Quando retornar um resultado, faça oq eu mandar
    this.service.AdicionarlistaTransferencias_POST_API(valorEmitir).subscribe(
      (resultado) => {
        console.log(resultado);
        this.limparCampo();
        this.router.navigateByUrl('extrato'); //Enviar para outro component
      },
      (error) => {
        console.error(error);
      }
    );
  }

  limparCampo() {
    this.valor = 0;
    this.destino = '';
  }
}
