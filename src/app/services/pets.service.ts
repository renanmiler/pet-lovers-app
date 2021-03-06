import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pets } from '../model/pets/pet';

@Injectable({
  providedIn: 'root'
})
export class PetsService {

  constructor( private request : HttpClient) { }

  getPets() : Observable<Pets[]>{
    return this.request.get<Pets[]>('http://localhost:8080/api/pets');
  }

  save(pet: Pets) : Observable<Pets>{
    return this.request.post<Pets>('http://localhost:8080/api/pets', pet);
  }

}
