document.addEventListener('DOMContentLoaded', function()
{
    var popup = document.getElementById('popup')
    var popupContent = document.getElementById('popup-content')
    var buttons = document.querySelectorAll('.leer-mas-btn')
    var cerrarPopupBtn = document.getElementById('cerrar-popup')

    buttons.forEach(function (button, index){
        button.addEventListener('click', function (){
            var info = obtenerInformacionPorIndice(index);
            mostrarPopup(info)
        })
    })
    
    cerrarPopupBtn.addEventListener('click', function(){
        ocultarPopup();
    })

    function mostrarPopup(info){
        popupContent.innerHTML = info
        popup.style.display = 'block'
    }

    function ocultarPopup(){
        popup.style.display = 'none'
    }

    function obtenerInformacionPorIndice(index) {
        var personajes = [luffy, zoro, nami, nico, franky];
        return personajes[index].displayMessage();
    }
}
)

function onePiece(nombre, raza, puestoTripulacion, recompensa, informacion) {
    this.nombre = nombre
    this.raza = raza
    this.puestoTripulacion = puestoTripulacion
    this.recompensa = recompensa
    this.informacion = informacion

    this.displayMessage = function () {
        return `
            <img class="logo-popup" src="./images/logo.png" alt="Logo One Piece">
            <h2>${this.nombre}</h2>
            <p>${this.informacion}</p>
            <p><strong>Raza:</strong> ${this.raza}</p>
            <p><strong>Puesto en tripulación:</strong> ${this.puestoTripulacion}</p>
            <p><strong>Se busca por una recompensa de:</strong> ${this.recompensa}</p>
        `;
    };
}

const luffy = new onePiece ('Monkey D. Luffy', 'humano', 'capitan', '3.000.000.000 B', 'Este es el líder de la banda, un joven que quiere convertirse en el Rey de los Piratas y que ha consumido la fruta del diablo Gomu Gomu')
const zoro = new onePiece ('Zoro Roronoa', 'humano', 'espadachín', '1.111.000.000 B', 'Se caracteriza porque siempre viste de color verde y tiene una gran destreza con las armas')
const nami = new onePiece ('Nami', 'humano', 'navegante', '366.000.000 B', ' Una chica que se dedica a navegar para conocer el mundo y tiene el objetivo de dibujar un mapa completo del planeta')
const nico = new onePiece ('Nico Robin', 'humano', 'arqueóloga', '930.000.000 B', 'Ella consumió la fruta Hana Hana no Mi, que le otorga la habilidad de crear copias de las partes de su cuerpo')
const franky = new onePiece ('Franky', 'cyborg', 'carpintero naval', '394.000.000 B', 'Es uno de los más carismáticos del grupo y su sueño consiste en generar y surcar el océano en el navío más grande del mundo')