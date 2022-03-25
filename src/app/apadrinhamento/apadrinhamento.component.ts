import { Component, OnInit } from '@angular/core';
import { Pets } from '../model/pets/pet';
import { PetsService } from '../services/pets.service';

@Component({
  selector: 'app-apadrinhamento',
  templateUrl: './apadrinhamento.component.html',
  styleUrls: ['./apadrinhamento.component.scss']
})
export class ApadrinhamentoComponent implements OnInit {
  dogs: Pets[] = [];
  form: boolean = true;
  search: boolean = false;
  constructor(private service: PetsService) { 
    service.getPets().subscribe(response => this.dogs = response, errorResponse => this.dogs = []);
  }

  ngOnInit(): void {
    
  };

  formVisible(){
    this.form = true;
  }

  searchVisible(){
    this.search = true
  }

  searchHider(){
    this.search = false
  }

}
