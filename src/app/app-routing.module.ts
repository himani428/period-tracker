import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { HomeComponent } from './pages/home/home.component';
import { InsightsComponent } from './pages/insights/insights.component';
import { LogPeriodComponent } from './pages/log-period/log-period.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { CalenderComponent } from './pages/calender/calender.component';
import { UserInfoComponent } from './pages/user-info/user-info.component';
import { PeriodLoggingComponent } from './pages/period-logging/period-logging.component';

const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' }, // Redirect to welcome page on root
  { path: 'welcome', component: WelcomeComponent },
  {path: 'user-info', component: UserInfoComponent},
  { path: 'home', component: HomeComponent },
  { path: 'log-period', component: LogPeriodComponent},
  { path: 'calendar', component: CalenderComponent },
  { path: 'period-logging', component: PeriodLoggingComponent},
  { path: 'insights', component: InsightsComponent },
  { path: 'settings', component: SettingsComponent },
  { path: '**', redirectTo: '/welcome', pathMatch: 'full' } 

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
