import { Component, Input, OnInit } from '@angular/core';

interface pets{
  type : string; 
}

@Component({
  selector: 'app-apadrinhamento-form',
  templateUrl: './apadrinhamento-form.component.html',
  styleUrls: ['./apadrinhamento-form.component.scss']
})
export class ApadrinhamentoFormComponent implements OnInit {

  formVisible : boolean;
  petypes: pets[];
  pet : any = []; 

  constructor() { this.formVisible = false; this.petypes = [{type : 'Cachorro'},{type : 'Gatos'}] }

  ngOnInit(): void {
  }

  setVisible(){
    this.formVisible = true;
  }
  close(){
    this.formVisible = false;
  }
}
