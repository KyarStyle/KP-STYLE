// Selección de elementos
const menu = document.querySelector('.hamburguesa');
const navegacion = document.querySelector('.navegacion');
const imagenes = document.querySelectorAll('img');
const btnTodos = document.querySelector('.todos');
const btnEnsaladas = document.querySelector('.ensaladas');
const btnPasta = document.querySelector('.pasta');
const btnPizza = document.querySelector('.pizza');
const btnPostres = document.querySelector('.postres');
const btnPromo = document.querySelector('.promo'); // Botón de Promos Navideñas
const btnPromoGraduacion = document.querySelector('.promo-graduacion'); // Nuevo botón de Promos para Graduación
const contenedorPlatillos = document.querySelector('.platillos'); // Contenedor de todos los platillos
let platillosArreglo = []; // Arreglo global para almacenar platillos

// Eventos principales
document.addEventListener('DOMContentLoaded', () => {
    cargarPlatillos(); // Cargar platillos en el arreglo global
    configurarEventos(); // Configurar eventos en los botones
});

// Configuración de eventos
const configurarEventos = () => {
    menu.addEventListener('click', abrirMenu);
    // Agregar eventos de clic y touch para asegurar compatibilidad en móviles
    btnPromo.addEventListener('click', mostrarPromos); // Evento para el botón de Promos Navideñas
    btnPromo.addEventListener('touchstart', mostrarPromos);

    // Agregar evento para el botón de Promos para Graduación
    btnPromoGraduacion.addEventListener('click', mostrarPromosGraduacion);
    btnPromoGraduacion.addEventListener('touchstart', mostrarPromosGraduacion);
};

// Función para abrir el menú de navegación
const abrirMenu = () => {
    navegacion.classList.remove('ocultar'); // Mostrar navegación
    agregarBotonCerrar();
};

// Agregar botón de cierre al menú
const agregarBotonCerrar = () => {
    const btnCerrar = document.createElement('p');
    const overlay = document.createElement('div');
    overlay.classList.add('pantalla-completa');

    const body = document.querySelector('body');
    if (document.querySelectorAll('.pantalla-completa').length > 0) return;

    body.appendChild(overlay);
    btnCerrar.textContent = 'x';
    btnCerrar.classList.add('btn-cerrar');
    navegacion.appendChild(btnCerrar);

    cerrarMenu(btnCerrar, overlay);
};

// Función para cerrar el menú
const cerrarMenu = (boton, overlay) => {
    boton.addEventListener('click', () => {
        navegacion.classList.add('ocultar');
        overlay.remove();
        boton.remove();
    });

    overlay.addEventListener('click', () => {
        navegacion.classList.add('ocultar');
        overlay.remove();
        boton.remove();
    });
};

// Cargar imágenes con IntersectionObserver (Lazy Loading)
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const imagen = entry.target;
            imagen.src = imagen.dataset.src; // Cargar imagen
            observer.unobserve(imagen);
        }
    });
});

imagenes.forEach((imagen) => {
    observer.observe(imagen);
});

// Cargar y organizar los platillos
const cargarPlatillos = () => {
    const platillos = document.querySelectorAll('.platillo'); // Seleccionar todos los elementos con la clase .platillo
    platillosArreglo = Array.from(platillos); // Convertir NodeList a Array y guardarlo en el arreglo global

    const ensaladas = platillosArreglo.filter((platillo) => platillo.getAttribute('data-platillo') === 'ensalada');
    const pastas = platillosArreglo.filter((platillo) => platillo.getAttribute('data-platillo') === 'pasta');
    const pizzas = platillosArreglo.filter((platillo) => platillo.getAttribute('data-platillo') === 'pizza');
    const postres = platillosArreglo.filter((platillo) => platillo.getAttribute('data-platillo') === 'postre');
    const promos = platillosArreglo.filter((platillo) => platillo.getAttribute('data-platillo') === 'promo');
    const promoGraduacion = platillosArreglo.filter((platillo) => platillo.getAttribute('data-platillo') === 'promo-graduacion'); // Nueva promo

    configurarBotones({ 
        ensaladas, 
        pastas, 
        pizzas, 
        postres, 
        promos, 
        promoGraduacion, // Nueva categoría de promoción
        todos: platillosArreglo 
    });
};

// Configurar botones de filtro
const configurarBotones = ({ ensaladas, pastas, pizzas, postres, promos, promoGraduacion, todos }) => {
    btnEnsaladas.addEventListener('click', () => mostrarPlatillos(ensaladas));
    btnPasta.addEventListener('click', () => mostrarPlatillos(pastas));
    btnPizza.addEventListener('click', () => mostrarPlatillos(pizzas));
    btnPostres.addEventListener('click', () => mostrarPlatillos(postres));
    btnPromo.addEventListener('click', () => mostrarPlatillos(promos)); // Usa directamente la función genérica
    btnPromoGraduacion.addEventListener('click', () => mostrarPlatillos(promoGraduacion)); // Evento para las promociones de graduación
    btnTodos.addEventListener('click', () => mostrarPlatillos(todos));
};

// Mostrar platillos filtrados
const mostrarPlatillos = (platillos) => {
    limpiarHtml(contenedorPlatillos); // Limpia el contenedor
    platillos.forEach((platillo) => contenedorPlatillos.appendChild(platillo)); // Muestra los nuevos platillos

    // Asegurarse de que el contenedor esté visible en dispositivos móviles
    contenedorPlatillos.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

// Mostrar promos navideñas (función separada para claridad)
const mostrarPromos = (e) => {
    e.preventDefault(); // Evitar el comportamiento por defecto del botón

    // Filtrar los platillos que tienen el atributo data-platillo="promo"
    const promos = platillosArreglo.filter((platillo) => platillo.getAttribute('data-platillo') === 'promo');

    // Limpiar el contenedor actual y mostrar solo las promociones
    limpiarHtml(contenedorPlatillos);
    promos.forEach((promo) => contenedorPlatillos.appendChild(promo));

    // Asegurar que el contenedor esté visible en móviles
    contenedorPlatillos.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

// Mostrar promociones para graduación (función separada)
const mostrarPromosGraduacion = (e) => {
    e.preventDefault(); // Evitar el comportamiento por defecto del botón

    // Filtrar los platillos que tienen el atributo data-platillo="promo-graduacion"
    const promosGraduacion = platillosArreglo.filter((platillo) => platillo.getAttribute('data-platillo') === 'promo-graduacion');

    // Limpiar el contenedor actual y mostrar solo las promociones para graduación
    limpiarHtml(contenedorPlatillos);
    promosGraduacion.forEach((promoGraduacion) => contenedorPlatillos.appendChild(promoGraduacion));

    // Asegurar que el contenedor esté visible en móviles
    contenedorPlatillos.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

// Función para limpiar el contenedor de platillos
const limpiarHtml = (contenedor) => {
    while (contenedor.firstChild) {
        contenedor.removeChild(contenedor.firstChild); // Eliminar todos los elementos hijos
    }
};



document.getElementById('enviarMensaje').addEventListener('click', function(event) {
    event.preventDefault(); // Evita el envío normal del formulario

    // Obtiene el valor del campo "Detalla tu Servicio"
    const servicio = document.getElementById('email').value;

    // Crear el mensaje de WhatsApp con el servicio detallado
    const mensajeWhatsApp = `Hola muy buenos días, mi servicio es "${servicio}"`;

    // Número de WhatsApp (sin espacios ni caracteres especiales)
    const numeroWhatsApp = '+51922358283';

    // Crea la URL de WhatsApp
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensajeWhatsApp)}`;

    // Redirige a WhatsApp usando location.href
    window.location.href = urlWhatsApp;
});


