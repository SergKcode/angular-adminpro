import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';

const routes: Routes = [
  { path:'dashboard', component: DashboardComponent },
  { path:'login', component: LoginComponent },
  { path:'register', component: RegisterComponent },
  { path:'progress', component: ProgressComponent },
  { path:'grafical', component: GraficalComponent },
  { path:'', redirectTo: '/dashboard', pathMatch: 'full'},
  { path:'**', component: NopagefoundComponent},
  


]

@NgModule({
  declarations: [],
  imports: [],
  exports:[RouterModule]
})
export class AppRoutingModule { }
