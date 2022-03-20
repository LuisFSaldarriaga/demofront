import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { header } from './components/header/header.component';
import { registerCliente } from './components/register/registerCliente.component';
import { registerHacedor } from './components/register/registerHacedor.component';
import { consultHacedor } from './components/consults/consultHacedor.component';
import { serviceSolicitar } from './components/services/serviceSolicitar.component';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

@NgModule({
  declarations: [
    AppComponent,
    header,
    registerCliente,
    registerHacedor,
    consultHacedor,
    serviceSolicitar,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormGroup,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
