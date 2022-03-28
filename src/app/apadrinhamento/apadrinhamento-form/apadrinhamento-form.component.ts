import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuItem } from 'primeng/api';
import { FileUpload } from 'primeng/fileupload';
import { Pets } from 'src/app/model/pets/pet';



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

  private formVisible : boolean;
  private petypes: any[];
  private stepsMenu : MenuItem [];
  private activeIndex : number = 0;
  pet!: Pets;

    formApadrinhamento = this.fb.group({
                        nome: ['', [Validators.required]],
                        regiao: ['', [Validators.required]],
                        img: ['', [Validators.required]]
                        });

 
  constructor(private fb: FormBuilder) { 

    this.formVisible = false; 
    this.petypes = [
      {type : 'Cachorro'},
      {type : 'Gatos'},
      {type : 'Outros'}];
    this.stepsMenu = [
      {label : "Informações do Pet"}, 
      {label : "Endereço"}, 
      {label : "Fotos"}, 
      {label : "Formas de Apadrinhamento"}];  
      
    }
      

  ngOnInit(): void {

    this.formApadrinhamento.controls['nome'].statusChanges.subscribe ( status => { console.log(status)})
  }

  getFormStatus(): boolean{
    return this.formVisible;
  }

  setVisible(){
    this.formVisible = true;
  }
  close(){
    this.formVisible = false;
  }

  getActiveIndex(): number{
    return this.activeIndex;
  }

  getStepMenu(): MenuItem[]{
    return this.stepsMenu;
  }

  getPetypes():any {
    return this.petypes;
  }
  
  public nestStep(): void{
    if (this.activeIndex < 3) {
      this.activeIndex = this.activeIndex+1;
    }
    else{
      this.close();
      this.activeIndex = 0;
    }
  }

  public previousStep(): void{
    if (this.activeIndex > 0){
      this.activeIndex = this.activeIndex - 1
    }
    else{
      this.close();
    }
  }

}
