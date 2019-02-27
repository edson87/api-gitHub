import { RouterModule, Routes } from '@angular/router';

import { ListaUsuarioComponent } from './lista-usuario/lista-usuario.component';
import { ListaReposComponent } from './lista-usuario/lista-repos/lista-repos.component';

export const routes: Routes = [
  { path: '', redirectTo: '/usuarios', pathMatch: 'full' },
  { path: 'usuarios', component: ListaUsuarioComponent},
  { path: 'usuarios/repositorio/:id', component: ListaReposComponent }
  //{ path: '**', component: PageNotFoundComponent }
];
