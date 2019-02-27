import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ListaUsuarioComponent } from './lista-usuario/lista-usuario.component';
import { ListaReposComponent } from './lista-usuario/lista-repos/lista-repos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListaUsuarioComponent,
    ListaReposComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
