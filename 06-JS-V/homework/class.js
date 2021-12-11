
// var fiat = {
//     ruedas: 4,
//     puertas: 3,
//     color: "Naranja",
//     motor: "2.0"
// }

// function FabricaDeAutos(ruedas, puertas, color, motor) { // creamos una clase que es como una plantilla de nuestro objeto Auto
//     this.ruedas = ruedas;
//     this.puertas = puertas;
//     this.color = color;
//     this.motor = motor;
    
// }

class FabricaDeAutos2{
    constructor(ruedas, puertas, color, motor){
        this.ruedas = ruedas;
        this.puertas = puertas;
        this.color = color;
        this.motor = motor;
        this.vendido = false;

    }
    seVendio(){

        this.vendido = true;
        return "Se vendio!";
    }

}

class FabricaDeCamiones extends FabricaDeAutos2 {
    constructor(){
        super();
        this.tonelaje = 400;
    }
}

// var camion = new FabricaDeCamiones();
// console.log(camion);

// FabricaDeAutos.prototype.verificarRuedas = function() {
//     if(typeof this.ruedas === "number"){
//         return true;
//     }else{
//         return false;
//     }
// }

var nissanFuntionClass = new FabricaDeAutos(4, 5, "Amarillo", "3.0");
var nissanFuntionClass2 = new FabricaDeAutos2(18, 2, "Azu", "8.0");
var nissanFuntionClass3 = new FabricaDeAutos(4, 5, "Negro", "3.5");

console.log(nissanFuntionClass.color);
console.log("Class", nissanFuntionClass3);
console.log(nissanFuntionClass2);

