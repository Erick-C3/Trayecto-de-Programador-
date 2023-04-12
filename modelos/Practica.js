const TIPO_ENTREGA_DEF = "github";
const ESTADO_RESUELTO_DEF = false;


class Practica {
    #modulo;
    #numero;
    #infoExtra;
    #descripcion;
    #tipoEntrega;
    #enunciado;
    #tieneResuelto;


    /**
     * Inicializa un objeto Practica
     * @param {Number} modulo correspondiente de la practica
     * @param {Number} numero correspondiente de la practica
     * @param {String} descripcion breve de la practica
     * @param {String} enunciado link al recurso online 
     * @param {String} infoExtra para el nombre de la practica
     * @param {Boolean} tieneResuelto disponble de la practica
     * @param {String} tipoEntrega para la practica 
     */
    constructor(modulo, numero, descripcion, enunciado, infoExtra, tieneResuelto = ESTADO_RESUELTO_DEF, tipoEntrega = TIPO_ENTREGA_DEF){
        this.#modulo = modulo;
        this.#numero = numero;
        this.#descripcion = descripcion;
        this.#enunciado = enunciado;
        this.#infoExtra = infoExtra;
        this.#tieneResuelto = tieneResuelto;
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
    getEnunciado(){
        return this.#enunciado;
    }
    getTieneResuelto(){
        return this.#tieneResuelto;
    }

    getInfoExtra(){
        return this.#infoExtra;
    }
}


export default Practica;