class Practica {
    #modulo;
    #numero;
    #descripcion;
    #tipoEntrega;

    constructor(modulo, numero, descripcion, tipoEntrega = "github"){
        this.#modulo = modulo;
        this.#numero = numero;
        this.#descripcion = descripcion;
        this.#tipoEntrega = tipoEntrega;
    }

    getModulo(){
        return this.#modulo;
    }
    getNumero(){
        return this.#numero;
    }
    getDescripcion(){
        return this.#descripcion;
    }
    getTipoEntrega(){
        return this.#tipoEntrega;
    }
}


export default Practica;