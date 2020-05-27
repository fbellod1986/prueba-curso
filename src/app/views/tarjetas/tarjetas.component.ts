import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services/services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.scss']
})
export class TarjetasComponent implements OnInit {
  datosTargeta: any = [];
  imgCard: string;

  constructor(private srvDatos: ServicesService,
              private router: Router ) { }

  ngOnInit() {
    this.cargaDatosTarjeta();
  }


  cargaDatosTarjeta() {
    try {
      this.srvDatos.getDatosTarjetas().subscribe(response => {
        this.datosTargeta = response;
        console.log('response: ', response);
      });
    } catch (error) {
      console.log('error: ', error);
    }
  }

  irATablas() {
    this.router.navigate([`prueba/tablas`]);
  }

}
