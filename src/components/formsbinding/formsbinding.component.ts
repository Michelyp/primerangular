import { Component } from "@angular/core";

@Component({
    selector:"app-forms-binding",
    templateUrl:"./formsbindinf.component.html"
})

export class FormsBindingComponent{
    //Declaramos un objeto para poder trabajar con 
    //el formulario y hacer un binding
    public user:any;
    public mensaje:string;
    constructor(){
        this.user ={
            nombre:"",
            apellidos:"",
            edad:0
        }
        this.mensaje="";
    }
    //creamos un método cuando pulsemos un botón
    recibirDatos():void{
        this.mensaje="Datos recibidos";
    }
}