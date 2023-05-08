import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstStepComponent } from './components/first-step/first-step.component';
import { SecondStepComponent } from './components/second-step/second-step.component';
import { ConfirmStepComponent } from './components/confirm-step/confirm-step.component';
import { CompletedRegistrationComponent } from './components/completed-registration/completed-registration.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: FirstStepComponent },
  { path: 'address', component: SecondStepComponent },
  { path: 'confirm', component: ConfirmStepComponent },
  { path: 'completed', component: CompletedRegistrationComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
