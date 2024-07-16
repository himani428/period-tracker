import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { SplashScreenPlugin } from '@capacitor/splash-screen';
import { BaseChartDirective } from 'ng2-charts';
import { IonicStorageModule } from '@ionic/storage-angular';
import { AppRoutingModule } from './app-routing.module';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { LogPeriodComponent } from './pages/log-period/log-period.component';
import { InsightsComponent } from './pages/insights/insights.component';
import { HomeComponent } from './pages/home/home.component';
import { CalenderComponent } from './pages/calender/calender.component';
import { UserInfoComponent } from './pages/user-info/user-info.component';
import { PeriodLoggingComponent } from './pages/period-logging/period-logging.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    SettingsComponent,
    LogPeriodComponent,
    InsightsComponent,
    HomeComponent,
    CalenderComponent,
    UserInfoComponent,
    PeriodLoggingComponent,
  ],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule, BaseChartDirective, IonicStorageModule.forRoot() ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    BaseChartDirective,
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule {}
