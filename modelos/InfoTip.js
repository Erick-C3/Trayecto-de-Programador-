class InfoTip{
    #detallePrincipal;
    #detalleSecundario;

    /**
     * 
     * @param {String} detallePrincipal del info-tip
     * @param {String} detalleSecundario del info-tip
     */
    constructor(detallePrincipal, detalleSecundario){
        this.#detallePrincipal = detallePrincipal;
        this.#detalleSecundario = detalleSecundario; 
    };

    getDetallePrincipal(){
        return this.#detallePrincipal;
    }
    getDetalleSecundario(){
        return this.#detalleSecundario;
    }
    
};

export default InfoTip;