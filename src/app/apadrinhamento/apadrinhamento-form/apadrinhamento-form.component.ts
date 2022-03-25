import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { MenuItem } from 'primeng/api';

interface pets{
  type : string; 
}

@Component({
  selector: 'app-apadrinhamento-form',
  templateUrl: './apadrinhamento-form.component.html',
  styleUrls: ['./apadrinhamento-form.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ApadrinhamentoFormComponent implements OnInit {

  formVisible : boolean;
  petypes: pets[];
  pet : any = []; 
  stepsMenu : MenuItem [] = [];
  activeIndex : number = 0;

  constructor() { 
    this.formVisible = false; 
    this.petypes = [
      {type : 'Cachorro'},
      {type : 'Gatos'}];
    this.stepsMenu = [
      {label : "Informações do Pet"}, 
      {label : "Endereço"}, 
      {label : "Fotos"}, 
      {label : "Formas de Apadrinhamento"}];  
      
    }
      

  ngOnInit(): void {
  }

  setVisible(){
    this.formVisible = true;
  }
  close(){
    this.formVisible = false;
  }
}
