import Practica from "./modelos/Practica.js";
import practicas from "./data/practicasInfo.js";

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))
const NOMBRE_MATERIAL_1 = "Reto";
const NOMBRE_MATERIAL_2 = "Trabajo practico";
const TIPO_MATERIAL_1 = "reto";
const TIPO_MATERIAL_2= "TP";

/**
 * Agrega los item a la pagina
 */
function agregarEnlacesItems(){
    let enlaceItem = "def item enlace";
    let itemInfo = "def item info";
    let nombreItem = "def item nombre";
    let numeroItem = "def item numero";
    
    let tipoMaterial = "def tipo material";
    let nombreMaterial = "def nombre material";
    practicas.reverse().forEach(practica => {
        nombreItem = practica.getModulo() + "-" + practica.getNumero() + " " + practica.getInfoExtra();
        numeroItem =  practica.getModulo() + "-" + practica.getNumero();
        if ((practica.getModulo() == TIPO_MATERIAL_1)){
            tipoMaterial = TIPO_MATERIAL_1
            nombreMaterial = NOMBRE_MATERIAL_1;
            nombreItem = nombreMaterial + " " + practica.getNumero() + " " + practica.getInfoExtra();
            numeroItem =  practica.getNumero();
        }else if ((practica.getModulo() == TIPO_MATERIAL_2)){
            tipoMaterial = TIPO_MATERIAL_2
            nombreMaterial = NOMBRE_MATERIAL_2;
            nombreItem = nombreMaterial + " " + practica.getNumero() + " " + practica.getInfoExtra();
            numeroItem =  practica.getNumero();
        }else{
            tipoMaterial = "practica";
            nombreMaterial = "Práctica";
            nombreItem = nombreMaterial+" "+ practica.getModulo() + "-" + practica.getNumero() + " " + practica.getInfoExtra();
            numeroItem =  practica.getModulo() + "-" + practica.getNumero();
        }
        enlaceItem = `
            <a class="nav-link" href="#${tipoMaterial}-${numeroItem}">${ nombreItem}</a>
        `
        itemInfo = prepararHTMLItemInfo(tipoMaterial, numeroItem, practica, nombreItem);
        document.querySelector("#enlaces-practicas").innerHTML += enlaceItem;
        document.querySelector("#enlaces-practicas-detalles").innerHTML += itemInfo;
    });
}

/**
 * Prepara el html para agregar la info de la practica
 * @param {String} numeroItem de la practica
 * @param {Practica} practica a agregar
 * @returns html para  la info de la practica
 */
function prepararHTMLItemInfo(tipoMaterial, numeroItem, practica, nombreItem){
    return `
        <div class="item" id="${tipoMaterial + "-"+numeroItem}">
            <h4>${nombreItem}</h4>
            <ul>
                <li>
                    <a href="${practica.getEnunciado()}">Enunciado</a>
                </li>
                <li>
                    <p><strong>Breve descripcion:</strong> ${practica.getDescripcion()}</p>
                </li>
                <li>
                    <p>Tipo de entrega: ${practica.getTipoEntrega()}</p>
                </li>
                <li>
                    <p>Resuelto: ${verificarResuelto(practica.getTieneResuelto())}</p>
                </li>
            </ul>
        </div>
    `;
}

/**
 * Devuelve un mensaje indicando si dispone o no resuelto la practica dependiendo de tieneResuelto
 * @param {Boolean} tieneResuelto la practica
 * @returns mensaje indicando si dispone o no de resuelto
 */
function verificarResuelto(tieneResuelto){
    return tieneResuelto ? "<strong>Disponible</strong>": "No disponible";
}

agregarEnlacesItems();