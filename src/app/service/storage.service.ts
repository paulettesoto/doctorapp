import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class storageService {
  private dataItemsSource = new BehaviorSubject<Array<{ key: string, value: any }>>([]);

  dataItems$ = this.dataItemsSource.asObservable();

  constructor() {
    this.initializeDataItems(); // Inicializar datos al iniciar el servicio
  }

  setDataItem(key: string, value: any) {
    const currentDataItems = this.dataItemsSource.value;
    const existingItemIndex = currentDataItems.findIndex(item => item.key === key);

    if (existingItemIndex !== -1) {
      // Si el elemento ya existe, actualiza su valor
      currentDataItems[existingItemIndex].value = value;
    } else {
      // Si no existe, añade un nuevo elemento a la lista
      currentDataItems.push({ key, value });
    }

    this.dataItemsSource.next([...currentDataItems]);
  }

  getDataItem(key: string): any | undefined {
    const currentDataItems = this.dataItemsSource.value;
    const foundItem = currentDataItems.find(item => item.key === key);
    return foundItem ? foundItem.value : undefined;
  }

  private initializeDataItems() {
    
  }
}