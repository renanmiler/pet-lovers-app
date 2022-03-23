import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelModule } from 'primeng/panel';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { ToolbarModule } from 'primeng/toolbar';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';

import { ApadrinhamentoRoutingModule } from './apadrinhamento-routing.module';
import { ApadrinhamentoComponent } from './apadrinhamento.component';
import { ApadrinhamentoFormComponent } from './apadrinhamento-form/apadrinhamento-form.component';


@NgModule({
  declarations: [
    ApadrinhamentoComponent,
    ApadrinhamentoFormComponent
  ],
  imports: [
    CommonModule,
    ApadrinhamentoRoutingModule,
    PanelModule,
    CardModule,
    ButtonModule,
    DialogModule,
    ToolbarModule,
    InputTextareaModule,
    InputTextModule,
    DropdownModule,
    FileUploadModule
  ],
  exports :
  [
    ApadrinhamentoComponent
  ]
})
export class ApadrinhamentoModule { }
