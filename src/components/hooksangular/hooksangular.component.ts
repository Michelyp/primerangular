import { Component, OnInit } from "@angular/core";

@Component({
    selector:"hooks-angular",
    templateUrl:"./hooksangular.component.html",
    styleUrls:["./hooksangular.components.css"]
})

export class HookAngular implements OnInit{
    public mensaje:string;
    constructor(){
        console.log("Soy el constructo Hooks Angular");
        this.mensaje ="Soy hooks en Angular";
    }
    ngOnInit(): void {
        console.log("Ejecutando método OnInit");
        
    }
    ngDoCheck(): void{
        console.log("Ejecutando ngDoCheck()");
        
    }
    //creamos un método personalizado
    cambiarMensaje():void{
        this.mensaje="Cambiando el mensaje en click";
    }
}