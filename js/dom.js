console.log("************Elementos del Documento*************");
// console.log(window.document);

// console.log(document);
// console.log(document.head);
// console.log(document.body);
// console.log(document.documentElement);
// console.log(document.doctype);
// console.log(document.characterSet);
// console.log(document.title);
// console.log(document.links);
// console.log(document.images);
// console.log(document.forms);
// console.log(document.styleSheets);
// console.log(document.scripts);

// setTimeout(() => {
//     console.log(document.getSelection().toString());
// }, 3000);

// document.write("<h2>Hola Mundo desde el DOM</h2>");

console.log("************Clase 62*************");

/*
console.log(document.getElementsByTagName("li")); //por elemento
console.log(document.getElementsByClassName("card"));//por clase del elemento
console.log(document.getElementsByName("nombre"));//por nombre del elemento
console.log(document.getElementById("menu")); //por id del elemento
console.log(document.querySelector("#menu"));
console.log(document.querySelectorAll("a"));
console.log(document.querySelectorAll("a").length)


document.querySelectorAll("a").forEach((el) => console.log(el));

console.log(document.querySelector(".card"));
console.log(document.querySelectorAll(".card"));
console.log(document.querySelector(".card")[2]);
console.log(document.querySelector("#menu li"));
console.log(document.querySelectorAll("#menu li"));
*/
// Clase_63
console.log("************Clase 63*************");
/*console.log(document.documentElement.lang);
console.log(document.documentElement.getAttribute("lang"));
console.log(document.querySelector(".link-dom").href);
console.log(document.querySelector(".link-dom").getAttribute("href"));

document.documentElement.lang = "en";
console.log(document.documentElement.lang);
console.log(document.documentElement.setAttribute("lang", "es-Mx"));
console.log(document.documentElement.lang);

const $linkDom = document.querySelector(".link-dom");
$linkDom.setAttribute("target", "_blank");
$linkDom.setAttribute("rel", "noopener");
$linkDom.setAttribute("href", "https://github.com/OscarLarios7a/AprendeJavascript");
console.log($linkDom.hasAttribute("rel"));
$linkDom.removeAttribute("rel");
console.log($linkDom.hasAttribute("rel"));

//data attributes

console.log($linkDom.getAttribute("data-description"));
console.log($linkDom.dataset);
console.log($linkDom.dataset.description);
$linkDom.setAttribute("data-description", "Modelo de Objeto del Documento");
console.log($linkDom.dataset.description);
$linkDom.dataset.description= "Comparte mi GitHub";
console.log($linkDom.dataset.description);

console.log($linkDom.hasAttribute("data-id"));
console.log($linkDom.removeAttribute("data-id"));
console.log($linkDom.hasAttribute("data-id"));
*/
// Clase_64 DOM: Estilos y Variables CSS
console.log("************Clase 64*************");
/*
const $linkDom2 = document.querySelector(".link-dom");

console.log($linkDom2.style);
console.log($linkDom2.getAttribute("style"));
console.log($linkDom2.style.backgroundColor);
console.log($linkDom2.style.color);
console.log(window.getComputedStyle($linkDom2));

//Modificacion de los estilos del elemento "a"
$linkDom2.style.setProperty("text-decoration", "none");
$linkDom2.style.setProperty("display", "block");
$linkDom2.style.width = "50%";
$linkDom2.style.textAlign = "center";
$linkDom2.style.marginLeft = "auto";
$linkDom2.style.marginRight = "auto";
$linkDom2.style.padding = "1rem";
$linkDom2.style.borderRadius = ".5rem";

console.log($linkDom2.style);
console.log($linkDom2.getAttribute("style"));
console.log(window.getComputedStyle($linkDom2));

//Custom Proporties CSS - Variables CSS

const $html = document.documentElement,
      $body = document.body;

let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"),
    varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");

console.log(varDarkColor, varYellowColor);

$body.style.backgroundColor = varDarkColor;
$body.style.color = varYellowColor;

$html.style.setProperty("--dark-color", "#000000");
varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");
$body.style.setProperty("background-color", varDarkColor);
*/
// Clase_65 DOM: Clases CSS
console.log("************Clase 65*************");
/*const $card = document.querySelector(".card");

console.log($card);
console.log($card.className); //className sirve para mostrar el nombre de la clase Css que estamos haciendo la referencia
console.log($card.classList);//classLista sirve para mostrar las propiedades que tiene la Clase Css que estamos haciendo referencia

console.log($card.classList.contains("rotate-45")); // con la propiedad de contains que esta dentro del metodo de classList nos sirve para verificar si tiene un una clases Css nuesto elemento a traves de un boolean  
$card.classList.add("rotate-45");// el add es un metodo de la propiedad de classList el cual nos sirve para agregar una Clase Css a un elemento de nuestro Dom de HTML
console.log($card.classList.contains("rotate-45")); 
console.log($card.className);
console.log($card.classList);
$card.classList.remove("rotate-45");
console.log($card.classList.contains("rotate-45"));
$card.classList.toggle("rotate-45");
console.log($card.classList.contains("rotate-45"));
$card.classList.toggle("rotate-45");
console.log($card.classList.contains("rotate-45"));
$card.classList.toggle("rotate-45");
$card.classList.replace("rotate-45","rotate-135");
$card.classList.add("opacity-80","sepia");
$card.classList.remove("opacity-80","sepia");
$card.classList.toggle("opacity-80","sepia");*/

// Clase_66 DOM: Texto y HTML
console.log("************Clase 66*************");
/*
const $whatIsDom = document.getElementById("que-es");

let text = `
<p>
El modelo de objetos del documento (<b><i>DOM - Document Object Model </i></b>) es un  API para documentos HTML y XML
</p>
<p>
este Provee una representacion estructural del documento, permitiendo modificar su contenido y presentacion visual mediante codigo.
</p>
<p>
<mark>
El DOM no es parte de la especificacion de JavaScript, es una API para los navegadores.
</mark>
</p>
`;

// $whatIsDom.innerText = text; // lo pone como un texto
$whatIsDom.textContent = text;
$whatIsDom.innerHTML = text;  //el innerHTML sirva para agregar mas elementos a un elemento padre
$whatIsDom.outerHTML = text; //el outerHTML sirva para agregar mas elementos por separado eliminando a un elemento padre
*/
// Clase_67 DOM Traversing: Recorriendo el DOM
console.log("************Clase 67*************");
/*
$cardDom = document.querySelector(".cards");
console.log($cardDom);
console.log($cardDom.children);
console.log($cardDom.children[2]);

console.log($cardDom.parentElement);
console.log($cardDom.firstElementChild);
console.log($cardDom.lastElementChild);
console.log($cardDom.previousElementSibling);
console.log($cardDom.nextElementSibling);
console.log($cardDom.closest("div"));//es un metodo que busca el anscentro mas cercano 
console.log($cardDom.closest("body"));
console.log($cardDom.children[3].closest("section"));
*/
// Clase_68 DOM: Creando Elementos y Fragmentos
console.log("************Clase 68*************");
/*
const $figure = document.createElement("figure"),
    $img = document.createElement("img"),
    $figcaption = document.createElement("figcaption");
    $figcaptionText = document.createTextNode("Tarado")
    $cards = document.querySelector(".cards"),
    $figure2=document.createElement("figure");
    
$img.setAttribute("src", "https://placeimg.com/200/200/animals");
$img.setAttribute("alt", "Animals");
$figure.classList.add("card");

$figcaption.appendChild($figcaptionText);
$figure.appendChild($img);
$figure.appendChild ($figcaption);
$cards.appendChild($figure);


$figure2.innerHTML = `
    <img src="https://placeimg.com/200/200/people" alt="People">
    <figcaption>People</figcaption>
`;

$figure2.classList.add("card");
$cards.appendChild($figure2);
////////

const estaciones = ["Primavera", "Verano", "Otoño", "Invierno"],
    $ul1 = document.createElement("ul");

document.write("<h3>Estaciones del Año</h3>");
document.body.appendChild($ul1);

estaciones.forEach((el) => {
    const $li = document.createElement("li");
    $li.textContent = el;
    $ul1.appendChild($li);
});


///// mi parte 
const continentes = ["Africa", "America", "Asia", "Europa", "Oceania"],
    $ul2 = document.createElement("ul");

document.write("<h3>Continentes del Mundo</h3>");
document.body.appendChild($ul2);
$ul.innerHTML = "";
continentes.forEach((el) => ($ul2.innerHTML += `<li>${el}</li>`));

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
    $ul3 = document.createElement("ul"),
    $fragmento = document.createDocumentFragment();
    
meses.forEach(el => {
    const $li = document.createElement("li");
    $li.textContent = el;
    $fragmento.appendChild($li);
});

document.write("<h3>Meses del Año</h3>");
$ul3.appendChild($fragmento);
document.body.appendChild($ul3);
*/

// Clase_69 DOM: Templates HTML
console.log("************Clase 69*************");
/*
const $cards = document.querySelector(".cards");
const $template = document.getElementById("template-card").content; // seleccionando un elemento de mi Dom
const $fragmento = document.createDocumentFragment();
const cardContent = [
    {
        title: "Tecnologia",
        img: "https://placeimg.com/200/200/tech",
    },
    {
        title: "Animales",
        img: "https://placeimg.com/200/200/animals",
    },
    {
        title: "Arquitectura",
        img: "https://placeimg.com/200/200/arch",
    },
    {
        title: "Personas",
        img: "https://placeimg.com/200/200/people",
    },
    {
        title: "Naturaleza",
        img: "https://placeimg.com/200/200/nature",
    }
];
cardContent.forEach((el) => {
    $template.querySelector("img").setAttribute("src", el.img);
    $template.querySelector("img").setAttribute("alt", el.title);
    $template.querySelector("figcaption").textContent = el.title;

    let $clone = document.importNode($template, true);
    $fragmento.appendChild($clone);
});
$cards.appendChild($fragmento);
*/
// Clase_70 DOM: Modificando Elementos (Old Style)
console.log("************Clase 70*************");

/*
const $cards = document.querySelector(".cards");
const $newCard = document.createElement("figure");
const $cloneCards = $cards.cloneNode(true); // con la sentencia true clonara todos los elementos del padre e hijos
$newCard.innerHTML = `
<img src="https://placeimg.com/200/200/any" alt="Any">
    <figcaption>Any</figcaption>
`;
$newCard.classList.add("card");

$cards.replaceChild($newCard, $cards.children[3]); // esto sirve para reemplazar un elemento que existe por uno nuevo

$cards.insertBefore($newCard, $cards.firstElementChild); // agrega un elemento
$cards.insertBefore($newCard, $cards.lastElementChidl);
$cards.removeChild($cards.lastElementChild);

document.body.appendChild($cloneCards);
*/
// Clase_71. DOM: Modificando Elementos (Cool Style)
console.log("************Clase 71*************");

/* 
Metodos nuevos para insercion de elementos dentro del codigo de HTML
insertAdjacentElement(position, el);
insertAdjacentHTML(position,html);
insertAdjacentText(position, text);

Posisiones son de acuerdo al elemento donde queremos insertar el nuevo objeto del elemento
beforebegin(hermano anterior)
afterbegin(primer hijo)
beforeend(ultimo hijo)
afterend(hermano siguiente)
*/

/*
const $cards = document.querySelector(".cards");
const $newCard = document.createElement("figure");

let $contentCard=`
<img src="https://placeimg.com/200/200/any" alt="Any">
    <figcaption></figcaption>
`;
$newCard.classList.add("card");
//$cards.insertAdjacentElement("beforebegin", $newCard);
//$cards.insertAdjacentElement("afterBegin", $newCard);
//$cards.insertAdjacentElement("beforeEnd", $newCard);
$newCard.insertAdjacentHTML("beforeend", $contentCard);
$newCard.querySelector("figcaption").insertAdjacentText("afterbegin", "Any");
//$cards.insertAdjacentElement("afterBegin", $newCard);

//Manera Moderna par ainsertar elementos antes y despues de un elemento
/*$cards.prepend($newCard);
$cards.append($newCard);
$cards.before($newCard);
$cards.after($newCard);*/
// Clase_72. DOM: Manejadores de Eventos
console.log("************Clase 72*************");
/*
// atraves de una funcionn
function holaMundo() {
    alert("Hola Tarado");
    console.log(event);
}

// a traves de un evento semantico
const $eventoSemantico = document.getElementById("evento-semantico");

$eventoSemantico.onclick = holaMundo;

$eventoSemantico.onclick = function (e) {
    alert("Hola Tarado, esto es un manejador de Evento Semantico");
    console.log(e);
    console.log(event);
};
// atraves de un evento multiple con la propiedad addEventListener
const $eventoMultiple = document.getElementById("evento-multiple");
$eventoMultiple.addEventListener("click", holaMundo);
$eventoMultiple.addEventListener("click", (e) => {
    alert("Hola Tarado, esto es un manejador de Eventos Multiples");
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(event);
    
});
*/
// Clase_73 DOM: Eventos con Parámetros y Remover Eventos
console.log("************Clase 73*************");
/*
const $eventoRemover = document.getElementById("evento-removedor");
const removerDobleClick = () => {
    alert(`Removiendo el evento del tipo ${e.type}`);
    console.log(e);
    $eventoRemover.removeEventListener("dblclick", removerDobleClick);
    $eventoRemover.disabled = true;
}

function saludar(nombre="Desconocido") {
    alert(`Hola ${nombre}`);
}

// enviando parametros al evento a traves de una array function 
$eventoMultiple.addEventListener("click", () => {
    saludar();
    saludar("Oscar Larios");
});

$eventoRemover.addEventListener("dblclick", removerDobleClick);
*/

// Clase_74 DOM: Flujo de Eventos (Burbuja y Captura) 
console.log("************Clase 74*************");
/*
const $divEventos = document.querySelectorAll(".eventos-flujo div");
const $linkEventos = document.querySelector(".eventos-flujo a"); // Codigo de la Clase 75 DOM: stopPropagation & preventDefault

function flujoEvento(e) {
    console.log(`Hola te saluda ${this.className}, el click lo Origino ${e.target.className}`);
    e.stopPropagation(); // Codigo de la Clase 75 DOM: stopPropagation & preventDefault
    
}

console.log($divEventos);

$divEventos.forEach((div) => {
    // en la fase de burbuja, que va desde el mas interno al externo con el tercer parametro de un boolean false
    div.addEventListener("click", flujoEnvento);
    //div.addEventListener("click", flujoEnvento, false);
    // Fase de Captura , que va desde el externo al interno con el tercer parametro de un boolean true
    //div.addEventListener("click", flujoEnvento, true);
    
    //div.addEventListener("click", flujoEvento, {
    //    capture: false,
    //    once:true
    //});
});

// Codigo de la Clase 75 DOM: stopPropagation & preventDefault
$linkEventos.addEventListener("click", (e) => {
    alert("Hola soy tu amigo y docente digital ... Oscar Larios");
    e.preventDefault(); //sirve para cancelar el evento que traemos de referencia 
    e.stopPropagation(); // sirve para evitar la programacion del  evento que tenemos de referencia
});
*/
// Clase 75 DOM: stopPropagation & preventDefault
console.log("************Clase 75*************");
/*
const $divEventos = document.querySelectorAll(".eventos-flujo div");
const $linkEventos = document.querySelector(".eventos-flujo a"); // Codigo de la Clase 75 DOM: stopPropagation & preventDefault

function flujoEvento(e) {
    console.log(`Hola te saluda ${this.className}, el click lo Origino ${e.target.className}`);
    e.stopPropagation(); // Codigo de la Clase 75 DOM: stopPropagation & preventDefault
    
}

console.log($divEventos);

$divEventos.forEach((div) => {
    // en la fase de burbuja, que va desde el mas interno al externo con el tercer parametro de un boolean false
    div.addEventListener("click", flujoEnvento);
    //div.addEventListener("click", flujoEnvento, false);
    // Fase de Captura , que va desde el externo al interno con el tercer parametro de un boolean true
    //div.addEventListener("click", flujoEnvento, true);
    
    //div.addEventListener("click", flujoEvento, {
    //    capture: false,
    //    once:true
    //});
});

// Codigo de la Clase 75 DOM: stopPropagation & preventDefault
$linkEventos.addEventListener("click", (e) => {
    alert("Hola soy tu amigo y docente digital ... Oscar Larios");
    e.preventDefault(); //sirve para cancelar el evento que traemos de referencia 
    e.stopPropagation(); // sirve para evitar la programacion del  evento que tenemos de referencia
});
*/
// Clase_76 DOM: Delegación de Eventos
console.log("************Clase 76*************");
/*
// function flujoEvento(e) {
    // console.log(`Hola te saluda ${this}, el click lo Origino ${e.target.className}`);
    // 
// }

document.addEventListener("click", (e) => {
    console.log("Click en ", e.target);
    if (e.target.matches(".eventos-flujo div")) {
        //flujoEvento(e); // hago la llamada a la funcion que envio como parametro el Evento
        console.log(`Hola te saluda ${this}, el click lo Origino ${e.target.className}`);
    }

    if (e.target.matches(".eventos-flujo a")) {
         alert("Hola soy tu amigo y docente digital ... Oscar Larios");
         e.preventDefault(); //sirve para cancelar el evento que traemos de referencia 
    }
});
*/
// Clase_77 BOM: Propiedades y Eventos
console.log("************Clase 77*************");
/*
window.addEventListener("resize", (e) => {
    console.clear();
    console.log("************Evento Resize**************");
    console.log(window.innerWidth);
    console.log(window.innerHeight);
    console.log(window.outerWidth);
    console.log(window.outerHeight);
    console.log(window.scrollX);
    console.log(window.scrollY);
    console.log(e);
});
window.addEventListener("scroll", (e) => {
    console.clear();
    console.log("************Evento Scroll**************");
    console.log(window.scrollX);
    console.log(window.scrollY);
    console.log(e);
});

window.addEventListener("load", (e) => {
    //console.clear();
    console.log("************Evento Load la Ventana**************");
    console.log(window.screenX);
    console.log(window.screenY);
    console.log(e);
});

document.addEventListener("DOMContentLoaded", (e) => {
    //console.clear();
    console.log("************Evento DOMContentLoaded**************");
    console.log(screenX);
    console.log(screenY);
    console.log(e);
});
*/
// Clase_78 BOM: Métodos
console.log("************Clase 78*************")
/*
//alert();
//confirm();
//prompt();

const $btnAbrirVentana = document.getElementById("abrir-ventana"),
    $btnCerrarVentana = document.getElementById("cerrar-ventana"),
    $btnImprimirVentana= document.getElementById("imprimir-ventana");
//const $btnCerrarVentana = document.getElementById("cerrar-ventana");
//const $btnImprimirVentana = document.getElementById("imprimir-ventana");

let ventana;

$btnAbrirVentana.addEventListener("click", (e) => {
    ventana = window.open("https://github.com/Dionakra/awesome-official-courses");
});

$btnCerrarVentana.addEventListener("click",(e)=>{
    ventana.close();
});
$btnImprimirVentana.addEventListener("click",(e)=>{
     window.print();
 });
*/
 // Clase_79 BOM: Objetos: URL, Historial y Navegador 
console.log("*******Clase 79*************");
console.log("************Object URL*************");
console.log(location); //Muestra todos los elementos que maneja, propiedades
console.log(location.origin);// Muestra la ruta origen de la Pagina 
console.log(location.protocol);// Muestra el protocolo de la pagina sea http o https
console.log(location.host);// muestra la direccion ip del host del equipo o nombre del dominio
console.log(location.hostname);// el nombre del dominio o el nombre del host del Equipo
console.log(location.port);//Muestra el puerto el que escucha el servidor
console.log(location.href);//muestra la URL de la Pagina
console.log(location.hash);// Muestra el valor despues de un hash (#)
console.log(location.pathname);// Muestra la pagina qu estamos consultando despues de /
console.log(location.search); //muestra los datos que pasaste como parametros que se pasan por la URL
//location.reload(); // sirve para recargar la URL de la PAgina


console.log("************Object History*************");
console.log(history);
console.log(history.length); // longitud de las paginas visitadas
console.log(history.back); // te regresa a una pagina atras o te regresa a la longitud d ela pagina q tu pidas
console.log(history.forward); // te envia a la pagina o paginas q a estabas anteriormente antes del back 
console.log(history.go); //te muestra la pagina a la q quieres ir


console.log("************Object History*************");
console.log(navigator);
console.log(navigator.connection); // sirve para ver la conectividad con el internet
console.log(navigator.geolocation);//
console.log(navigator.mediaDevices);//
console.log(navigator.mimeTypes);//
console.log(navigator.onLine);//
console.log(navigator.serviceWorker);//
console.log(navigator.storage); //
console.log(navigator.usb);// para saber si hay un dispositivo movil esta conectado al Equipo
console.log(navigator.userAgent);

