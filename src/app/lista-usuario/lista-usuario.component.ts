import { Component, OnInit,  AfterViewInit } from '@angular/core';
import { ListaService } from './lista.service';
import { map, startWith, catchError, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { Usuario } from './usuario';

//const CACHE_KEY = "httpUsuarioCache";
@Component({
  selector: 'app-lista-usuario',
  templateUrl: './lista-usuario.component.html',
  styleUrls: ['./lista-usuario.component.css']
})
export class ListaUsuarioComponent implements OnInit, AfterViewInit  {
  public usuarios: Usuario[];
  public usuarioSeleccionado = Usuario;

  constructor(private listaUsuarioService: ListaService) { }

  ngOnInit() {
    if (localStorage.length == 0) {
      console.log("cargar lista")
      this.getUsuarios();
    } else {
      console.log("cargar desde el cache")
      this.usuarios = this.getLocalStorageUsuarios();
    }
    
    
  }

  ngAfterViewInit() {
    setTimeout(function(){
      console.log("limpiar localstorage");
      localStorage.clear();
    },60000)
  }

  getUsuarios(){
    this.listaUsuarioService.getAllUsers().subscribe(usuarios => {
     
      if (usuarios.length == 0) {
        this.usuarios = this.getLocalStorageUsuarios();
      } else {
        this.usuarios = this.getLocalStorageUsuarios();
        
        this.usuarios = usuarios;
        this.setLocalStorageUsuarios(this.usuarios);
        var hora = new Date().getTime();
        this.setLocalStorageHour(hora);
      }
     
      //localStorage[CACHE_KEY] = JSON.stringify(usuarios);
      //startWith(JSON.parse(localStorage[CACHE_KEY]))
    });

  }

  url_repos(id): void{
    this.usuarioSeleccionado = id
  }

  setLocalStorageUsuarios(usuarios: any){
    localStorage.setItem('usuarios',JSON.stringify({usuarios: usuarios}));
  }
  setLocalStorageHour(hora: any){
    localStorage.setItem('hora',JSON.stringify({hora: hora}));
  }

  getLocalStorageUsuarios(){
    var localStorageUsuarios = JSON.parse(localStorage.getItem('usuarios'));
    return localStorageUsuarios === null? []:localStorageUsuarios.usuarios
  }

  
}
