import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelModule } from 'primeng/panel';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { ToolbarModule } from 'primeng/toolbar';

import { ApadrinhamentoRoutingModule } from './apadrinhamento-routing.module';
import { ApadrinhamentoComponent } from './apadrinhamento.component';


@NgModule({
  declarations: [
    ApadrinhamentoComponent
  ],
  imports: [
    CommonModule,
    ApadrinhamentoRoutingModule,
    PanelModule,
    CardModule,
    ButtonModule,
    DialogModule,
    ToolbarModule
  ],
  exports :
  [
    ApadrinhamentoComponent
  ]
})
export class ApadrinhamentoModule { }
