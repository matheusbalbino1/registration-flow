import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { FirstStepComponent } from './components/first-step/first-step.component';
import { InputComponent } from './components/input/input.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { SecondStepComponent } from './components/second-step/second-step.component';
import { ConfirmStepComponent } from './components/confirm-step/confirm-step.component';
import { CompletedRegistrationComponent } from './components/completed-registration/completed-registration.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstStepComponent,
    InputComponent,
    HeaderComponent,
    ButtonComponent,
    SecondStepComponent,
    ConfirmStepComponent,
    CompletedRegistrationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    NgbAlertModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
