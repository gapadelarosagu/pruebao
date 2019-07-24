import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';
import { LoginComponent } from './login/login.component';
import { PrincipalComponent } from './principal/principal.component';
import { CategoriaDetailsComponent } from './categoria-details/categoria-details.component';
import { CategoriaCrearComponent } from './categoria-crear/categoria-crear.component';
import { MovimientosTotalComponent } from './movimientos-total/movimientos-total.component';
import { MovimientosCategoriasComponent } from './movimientos-categorias/movimientos-categorias.component';
import { FormsModule,ReactiveFormsModule  }   from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    CrearUsuarioComponent,
    LoginComponent,
    PrincipalComponent,
    CategoriaDetailsComponent,
    CategoriaCrearComponent,
    MovimientosTotalComponent,
    MovimientosCategoriasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
