import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class storageService {
  private logoutSubject = new BehaviorSubject<boolean>(false);
  logout$ = this.logoutSubject.asObservable();

  constructor() {}

  setDataItem(key: string, value: any) {
    if (key === 'actualizar' || key === 'mode') {
      this.logoutSubject.next(true); // Notifica el cambio a true
    }
    localStorage.setItem(key, JSON.stringify(value));
    console.log('dato:', key, ' valor:', value);
  }

  getDataItem(key: string): any | undefined {
    const item = localStorage.getItem(key);
    console.log('llamando al dato: ', key);
    return item ? JSON.parse(item) : null;
  }

  removeDataItem(key: string) {
    localStorage.removeItem(key);
  }

  clearAllDataItems() {
    localStorage.clear();
    this.logoutSubject.next(true); // Notifica el cambio a true
  }
}
