import { Component } from "@angular/core";

@Component({
    //Debamos de indicar el nombre del component mediante selectores
    //Se utilizan guiones para separar cada palabra del nombre de component
    selector :'primer-component',
    //Como no queremos un fichero html de template,
    //se utiliza la palabra template para indicar todo el dibujo aqui 
    templateUrl: "./primer.component.html",
    styleUrls:["./primer.component.css"]
})

//Todo componente debe de ser declarado como clase
//dicho nombre de clase sera utilizado posteriormente
//en app.module.ts
export class PrimerComponent{
    //las propiedades de un component se pueden en su dibujo 
    //dichas propiedades son tipadas
    public titulo: string;
    public descripcion: string;
    public anyo: number;
    
    //El constructor de una clase es el primer método por el que entra
    //cualquier component, aqui podemos inicializar los valores de las propiedades
    constructor(){
        //para acceder a las propiedades de una clase se utiliza la palabra this
        this.titulo = "Miércoles de puente siiii";
        this.descripcion = "Por finnn";
        this.anyo = 2012;
    }
}


