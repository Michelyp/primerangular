import {Component} from '@angular/core';

@Component({
    selector:"app-deportes",
    templateUrl:"./deportes.component.html",
    styleUrls:["./deportes.component.css"]
})
export class  DeportesComponent{
    public sports : Array<string>;
    public numeros : Array<number>;
    constructor(){
        this.sports=["Tenis","Dados","Basket","Voley","Dados","Basket"]
        this.numeros=[8,6,64,4,14,68,7]
    }
    
}