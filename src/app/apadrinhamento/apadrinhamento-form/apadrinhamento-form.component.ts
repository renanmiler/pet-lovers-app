import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuItem } from 'primeng/api';
import { FileUpload } from 'primeng/fileupload';
import { Pets } from 'src/app/model/pets/pet';
import { PetsService } from 'src/app/services/pets.service';



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
  pet = {
    nome: {valid: true , message: 'O campo NOME é obrigatório.', value: ''},
    regiao: {valid: true , message: 'O campo NOME é obrigatório.', value: ''},
    img: {valid: true , message: 'O campo NOME é obrigatório.', value: ''}
  }


    formApadrinhamento = this.fb.group({
                        nome: ['', [Validators.required]],
                        regiao: ['', [Validators.required]],
                        img: ['', [Validators.required]]
                        });

 
  constructor(private fb: FormBuilder, private petservice: PetsService) { 

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
    if (this.activeIndex < 3 && this.pet.nome.valid) {
      this.activeIndex = this.activeIndex+1;
    }
    else if (this.activeIndex == 3){
      this.onSubmit();
      this.close();
      this.activeIndex = 0;
    }
    else if (!this.pet.nome.valid){
      
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

  public onSubmit(){
    this.pet.nome.value = this.formApadrinhamento.controls['nome'].value;
    this.pet.regiao.value = this.formApadrinhamento.controls['regiao'].value;
    this.pet.img.value = this.formApadrinhamento.controls['img'].value;
  
    let pets : Pets = new Pets(this.pet.nome.value, this.pet.regiao.value, this.pet.img.value);
    this.petservice.save(pets).subscribe(response => {console.log('Salvo com sucesso')}, Error => {console.log('Erro ao salvar')})
  }

  validate(){
    this.pet.nome.valid = this.formApadrinhamento.controls['nome'].valid;
  }

}
