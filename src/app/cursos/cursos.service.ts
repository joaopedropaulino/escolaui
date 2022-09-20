import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Curso } from '../core/model';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor(private http: HttpClient) { }

  list(): Curso[]{
    return[
      {id: 1, nomecurso: 'Desesnvolvimento de sistemas'},
      {id: 2, nomecurso: 'Adm'},
      {id: 3, nomecurso: 'Quimica'},
    ]
  }
}
