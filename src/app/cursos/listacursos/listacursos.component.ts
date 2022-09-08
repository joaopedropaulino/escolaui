import { Component, OnInit } from '@angular/core';
import { Curso } from '../../core/model';

@Component({
  selector: 'app-listacursos',
  templateUrl: './listacursos.component.html',
  styleUrls: ['./listacursos.component.scss']
})
export class ListacursosComponent implements OnInit {

cursos: Curso[] = [
  {id: 1, nomecurso: 'Desesnvolvimento de sistemas'},
  {id: 2, nomecurso: 'Adm'},
  {id: 3, nomecurso: 'Quimica'},
  {id: 4, nomecurso: 'Edificaçoes'},
  {id: 5, nomecurso: 'medicina'}
];
displayedColumns =['id','nomecurso'];

constructor() { }

  ngOnInit(): void {
  }

}
