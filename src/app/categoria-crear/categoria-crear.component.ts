import { Component, OnInit } from '@angular/core';
import { CuentaService } from "../cuenta.service";
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-categoria-crear',
  templateUrl: './categoria-crear.component.html',
  styleUrls: ['./categoria-crear.component.css']
}) 
export class CategoriaCrearComponent implements OnInit {
  public categorias; 
  formCategoria;

  constructor(private apicuenta:CuentaService, private formBuilder:FormBuilder) {
    /*this.apicuenta.getCategorias(id)
    .subscribe(
      (cat_result)=>{
        this.categorias = cat_result;
        console.log(this.categorias);
      },
      (err)=>{
        console.log(err);
        this.categorias = err;
      }
    );
      this.createForm();*/
   }

  createForm(){
    this.formCategoria = this.formBuilder.group({
      nombre:['',[Validators.required,
        Validators.minLength(4)]],
      saldo:['',[Validators.required]]
    });
  }

  ngOnInit() {
  }

  crearCategoria(id,nombre,monto) {
    console.log(id,nombre,monto);
    this.apicuenta.crearCat(id,nombre,monto)
    .subscribe(
      (cat)=> {
        this.apicuenta.getCategorias(id).subscribe(
          (cat_result)=>{
            this.categorias = cat_result;
            console.log(this.categorias);
          },
          (err)=>{
            console.log(err);
            this.categorias = err;
          }
        );
        this.createForm();
      },
      (err)=>{
        console.log(err);
      }
    );
  }

}
 