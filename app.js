import Practica from "./modelos/Practica.js";
import practicas from "./data/practicasInfo.js";

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

/**
 * Agrega los item a la pagina
 */
function agregarEnlacesItems(){
    let enlaceItem = "def item enlace";
    let itemInfo = "def item info";
    let nombreItem = "def item nombre";
    let numeroItem = "def item numero";
    practicas.reverse().forEach(practica => {
        nombreItem = practica.getModulo() + "-" + practica.getNumero() + " " + practica.getInfoExtra();
        numeroItem =  practica.getModulo() + "-" + practica.getNumero();
        enlaceItem = `
            <a class="nav-link" href="#practica-${numeroItem}">Práctica ${nombreItem}</a>
        `
        itemInfo = prepararHTMLItemInfo(numeroItem, practica, nombreItem);
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
function prepararHTMLItemInfo(numeroItem, practica, nombreItem){
    return `
        <div class="item" id="practica-${numeroItem}">
            <h4>Practica ${nombreItem}</h4>
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