class Practica {
    #modulo;
    #numero;
    #descripcion;
    #tipoEntrega;
    #enunciado;
    #tieneResuelto;

    constructor(modulo, numero, descripcion, enunciado, tieneResuelto = false, tipoEntrega = "github"){
        this.#modulo = modulo;
        this.#numero = numero;
        this.#descripcion = descripcion;
        this.#enunciado = enunciado;
        this.#tipoEntrega = tipoEntrega;
        this.#tieneResuelto = tieneResuelto;
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
    getEnunciado(){
        return this.#enunciado;
    }
    getTieneResuelto(){
        return this.#tieneResuelto;
    }
}


export default Practica;