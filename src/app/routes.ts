import { RouterModule, Routes } from '@angular/router';

import { ListaUsuarioComponent } from './lista-usuario/lista-usuario.component';


export const routes: Routes = [
  { path: '', redirectTo: '/usuarios', pathMatch: 'full' },
  { path: 'usuarios', component: ListaUsuarioComponent}
];
