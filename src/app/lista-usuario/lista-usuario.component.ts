import { Component, OnInit } from '@angular/core';
import { ListaService } from './lista.service';


import { Usuario } from './usuario';

@Component({
  selector: 'app-lista-usuario',
  templateUrl: './lista-usuario.component.html',
  styleUrls: ['./lista-usuario.component.css']
})
export class ListaUsuarioComponent implements OnInit {
  public usuarios: Usuario[];
  public usuarioSeleccionado = Usuario;
  constructor(private listaUsuarioService: ListaService) { }

  ngOnInit() {
    this.getUsuarios();
  }

  getUsuarios(){
    this.listaUsuarioService.getAllUsers().subscribe(usuarios => {
      this.usuarios = usuarios
    });
    
  }

  url_repos(id): void{
    this.usuarioSeleccionado = id
  }

}
