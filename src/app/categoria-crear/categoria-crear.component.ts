import { Component, OnInit } from '@angular/core';
import { CuentaService } from "../cuenta.service";
import { FormGroup, FormControl, FormBuilder, Validators,FormsModule } from '@angular/forms';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-categoria-crear',
  templateUrl: './categoria-crear.component.html'//,
  //styleUrls: ['./categoria-crear.component.css']
}) 
export class CategoriaCrearComponent implements OnInit {

  public categorias;
  public id:string;
  formCategoria;

  constructor(private apicuenta:CuentaService, private formBuilder:FormBuilder,private activatedRoute: ActivatedRoute) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
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
      //this.createForm();
   }

  createForm(){
    this.formCategoria = this.formBuilder.group({
      nomcat:['',[Validators.required,
        Validators.minLength(4)]],
      monto:['',[Validators.required]]
    });
  }

  ngOnInit() {
      this.activatedRoute.params.subscribe(paramsId => {
          this.id = paramsId.id;
      });
      //console.log(this.id);
      //this.id = this.activatedRoute.snapshot.paramMap.get('id');
      this.apicuenta.getCategorias(this.id)
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
        this.createForm();
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
 