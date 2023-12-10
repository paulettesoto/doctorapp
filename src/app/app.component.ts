import { Component, OnInit } from '@angular/core';
import { storageService } from './storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private storage: storageService) {}

  title = 'doctorapp';
  type: string | null = null;

  ngOnInit() {
    // Inicializar tipo y modo desde el almacenamiento
    this.type = this.storage.getDataItem('type');
    const mode = this.storage.getDataItem('mode');
    this.actualizarTema(mode);

    // Suscribirse a cambios en logout$
    this.storage.logout$.subscribe(() => {
      this.type = this.storage.getDataItem('type');
      const modoActualizado = this.storage.getDataItem('mode');
      this.actualizarTema(modoActualizado);
    });
  }

  private actualizarTema(modo: string | null) {
    if (modo) {
      document.body.setAttribute('cds-theme', modo);
    }
    // Otros procesos relacionados para actualizar el tipo si es necesario
  }
}
