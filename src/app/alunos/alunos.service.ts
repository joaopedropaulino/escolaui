import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Aluno } from '../core/model';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  constructor(private http: HttpClient) { }

  list(): Aluno[]{
    return[
      {id: 1, nomealuno: 'João'},
      {id: 2, nomealuno: 'Pedro'},
      {id: 3, nomealuno: 'Onofri'},
    ]
  }
}
