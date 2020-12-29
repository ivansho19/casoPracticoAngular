import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {
  infoPerfil:string;
  constructor() { }

  ngOnInit() {
    this.infoPerfil = JSON.parse(localStorage.getItem('user'));
  }

}
