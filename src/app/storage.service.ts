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
    if(key=='actualizar'){
      this.logoutSubject.next(true); // Notifica el cambio a true
    }
    localStorage.setItem(key, JSON.stringify(value));
    console.log('dato:', key, ' value:', value);
    
  }

  getDataItem(key: string): any | undefined {
    const item = localStorage.getItem(key);
    console.log('llamas al dato: ', key);
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
