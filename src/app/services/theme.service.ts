import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private darkMode: boolean = false;

  constructor() {}

  setDarkMode(enable: boolean) {
    this.darkMode = enable;
    document.body.classList.toggle('dark', enable);
  }

  isDarkMode(): boolean {
    return this.darkMode;
  }
}
