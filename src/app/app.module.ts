import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { ApadrinhamentoComponent } from './apadrinhamento/apadrinhamento.component'
import { ApadrinhamentoFormComponent } from './apadrinhamento/apadrinhamento-form/apadrinhamento-form.component';


import { PanelModule } from 'primeng/panel';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { ToolbarModule } from 'primeng/toolbar';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { MenubarModule } from 'primeng/menubar';
import { StepsModule } from 'primeng/steps';



import { PetsService } from './services/pets.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    ApadrinhamentoComponent,
    ApadrinhamentoFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PanelModule,
    CardModule,
    ButtonModule,
    DialogModule,
    ToolbarModule,
    InputTextareaModule,
    InputTextModule,
    DropdownModule,
    FileUploadModule,
    MenubarModule,
    StepsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [PetsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
