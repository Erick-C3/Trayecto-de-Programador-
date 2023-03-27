import Practica from "./Practica.js";
import practicas from "./practicasInfo.js";

/**
 * Agrega los item a la pagina
 */
function agregarEnlacesItems(){
    let enlaceItem = "def enlace";
    let itemInfo = "def item info";
    let nombreItem = "def nombre";
    practicas.forEach(practica => {
        nombreItem = practica.getModulo() + "-" + practica.getNumero();
        enlaceItem = `
            <a class="nav-link" href="#practica-${nombreItem}">Practica ${nombreItem}</a>
        `
        itemInfo = prepararHTMLItemInfo(nombreItem, practica);
        document.querySelector("#enlaces-practicas").innerHTML += enlaceItem;
        document.querySelector("#enlaces-practicas-detalles").innerHTML += itemInfo;
    });
}

/**
 * Prepara el html para agregar la info de la practica
 * @param {String} nombreItem de la practica
 * @param {Practica} practica a agregar
 * @returns html para  la info de la practica
 */
function prepararHTMLItemInfo(nombreItem, practica){
    return `
        <div class="item" id="practica-${nombreItem}">
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
    return tieneResuelto ? "Disponible": "No disponible";
}

agregarEnlacesItems();