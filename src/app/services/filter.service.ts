import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  private filtro = signal("all");

  constructor() {}

  getVariable(): string {
    return this.filtro();
  }

  setVariable(variable: string): void {
    this.filtro.set(variable);
  }
}
