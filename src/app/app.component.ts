import { ServiceTransferenciaService } from './services/service-transferencia.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'my-dream-app';

  constructor(private service: ServiceTransferenciaService) {}

  //Exemplo com emit
  // transferir($event) {
  //   this.service.AdicionarlistaTransferencias($event);
  // }
}
