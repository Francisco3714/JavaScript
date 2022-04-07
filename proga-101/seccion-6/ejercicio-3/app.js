
class Carro{
    constructor( marca, tipo, puertas ){
        this.marca = marca;
        this.tipo = tipo;
        this.puertas = puertas;
        this.encendido = false;
        this.gasolina = 100;
    }

    encenderCarro(){
        if (this.encendido == true) {
            console.log("El carro ya esta encendido")
        }else{
            this.encendido = true;
            console.log("El carro esta encendido");
        }
        return this;
    }


    realizarViaje(consumo){
        if (this.encendido == true) {
            if (consumo > this.gasolina) {
                console.log("No alcanza la gasolina, la gasolina restante es: " + this.gasolina)
            }else{
                this.gasolina = this.gasolina - consumo;
                return 'Le queda ' + this.gasolina;
            }
        }else {
            console.log("No se puede realizar el viaje enciende el auto")
        }
    }

}

let carro = new Carro( 'Mazda', 'Sedan', 2 );

console.log(carro);
