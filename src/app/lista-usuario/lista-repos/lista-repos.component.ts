import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { ReposService } from './repos.service';
@Component({
  selector: 'app-lista-repos',
  templateUrl: './lista-repos.component.html',
  styleUrls: ['./lista-repos.component.css']
})
export class ListaReposComponent implements OnInit {
  private id_user: number;
  private usuario: any;
  private repositorios: any;
  private titulo: string = "repositorios";
  private nombre_usuario: string = "";
  constructor(private _route: ActivatedRoute, private repositorioService: ReposService) { }

  ngOnInit() {
    this._route.params.subscribe( params => {
      this.id_user = +params['id'];
      if (this.id_user) {
        this.repositorioService.getUser(this.id_user).subscribe(user =>{
          this.usuario = user;
          this.nombre_usuario = this.usuario.name;
          this.repositorioService.getRepos(this.usuario.repos_url).subscribe( params => {
            this.repositorios = params;
          })
        });
      }
    })
  }

}
