import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent {

  settings = {
    theme: 'light',
    notifications: true
  };

  constructor(private themeService: ThemeService) {}

  toggleDarkMode(enable: boolean) {
    this.themeService.setDarkMode(enable);
  }

  saveSettings() {
    // Save settings to storage or state
  }
}
