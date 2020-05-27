import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-tablas',
  templateUrl: './tablas.component.html',
  styleUrls: ['./tablas.component.scss']
})
export class TablasComponent implements OnInit {

  cargaDatosTabla: any = [];

  constructor(private srvDatos: ServicesService) { }

  ngOnInit() {
    this.cargaDatosTablas();
  }

  cargaDatosTablas() {
    this.srvDatos.getDatosTabla().subscribe( response => {
      this.cargaDatosTabla = response;
    });
  }

}
