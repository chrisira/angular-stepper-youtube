import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CdkStepperModule} from '@angular/cdk/stepper';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StepperComponent } from './stepper/stepper.component';
import { InformationComponent } from './information/information.component';
import { ContactComponent } from './contact/contact.component';
import { SecurityComponent } from './security/security.component';
import { FinishComponent } from './finish/finish.component';

@NgModule({
  declarations: [
    AppComponent,
    StepperComponent,
    InformationComponent,
    ContactComponent,
    SecurityComponent,
    FinishComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CdkStepperModule
  ],
  exports:[CdkStepperModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
