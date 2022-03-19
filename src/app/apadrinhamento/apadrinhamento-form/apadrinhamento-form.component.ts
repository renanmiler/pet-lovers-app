import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-apadrinhamento-form',
  templateUrl: './apadrinhamento-form.component.html',
  styleUrls: ['./apadrinhamento-form.component.scss']
})
export class ApadrinhamentoFormComponent implements OnInit {

  formVisible : boolean;

  constructor() { this.formVisible = false; }

  ngOnInit(): void {
  }

  setVisible(){
    this.formVisible = true;
  }
  close(){
    this.formVisible = false;
  }
}
