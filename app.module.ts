import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddbookComponent } from './addbook/addbook.component';
import { DeletebookComponent } from './deletebook/deletebook.component';
import { ViewbookComponent } from './viewbook/viewbook.component';
import { RouterModule, RouterOutlet, Routes } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ChartModule } from 'primeng/chart';
import Chart, { registerables } from 'chart.js/auto';
Chart.register(...registerables);

const routes: Routes = [
  { path: '', component: LoginComponent }, // Default route
  { path: 'add', component: AddbookComponent },
  { path: 'delete', component: DeletebookComponent },
  { path: 'view', component: ViewbookComponent } ,
  { path: 'dashboard', component: DashboardComponent } ,
  { path: '**', component: PagenotfoundComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    AddbookComponent,
    DeletebookComponent,
    ViewbookComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ChartModule,
    RouterOutlet,
    
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
