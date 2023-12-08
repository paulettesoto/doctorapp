import { Component, OnInit, OnChanges, SimpleChanges,  ChangeDetectorRef } from '@angular/core';
import { storageService } from './storage.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private storage: storageService,private changeDetectorRef: ChangeDetectorRef){}
  title = 'doctorapp';
  type: string | null = null;
  logoutTrigger: boolean = false;


  ngOnInit() {
    // Obtener el valor del Local Storage
    this.type = this.storage.getDataItem('type');

    // Suscribirse a los cambios en logoutTrigger
    this.storage.logout$.subscribe((value) => {
      // Realizar acciones necesarias cuando logoutTrigger cambie
      this.type = this.storage.getDataItem('type');
      // ... Otros procesos relacionados con la actualización de type
    });
    

  }
}
