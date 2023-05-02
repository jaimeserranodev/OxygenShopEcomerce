// PORCENTAJE DE PÁGINA 

window.addEventListener("scroll", function() {
    progresoScroll();
});

function progresoScroll(){
    let scroll = document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    let progreso = (scroll/height)*100;
    document.getElementById("barra-progreso-horizontal").style.width = progreso+"%";
};

// PORCENTAJE DE PÁGINA CIRCULO

document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("scroll", function() {
        const scrollProgress = document.getElementById("scroll-progress");
        const scrollPosition = window.scrollY;
        const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const percentage = (scrollPosition / totalHeight) * 100;
        scrollProgress.textContent = `${Math.round(percentage)}%`;
    });

// BOTÓN RETURN TO TOP 

const returnToTopButton = document.getElementById("return-to-top");

returnToTopButton.addEventListener("click", function () {
    window.scrollTo({
    top: 0,
    behavior: 'smooth',
    });
});

window.addEventListener("scroll", function() {
        if (window.scrollY > 1000) {
        returnToTopButton.style.display = "block";
        } else {
        returnToTopButton.style.display = "none";
        }
    });
});


// ENVIO DATOS FORMULARIO CON FETCH

document.addEventListener("DOMContentLoaded", function(){
    const form = document.getElementById('formulario2');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const nameInput = document.getElementById('nameInput');
        const emailInput = document.getElementById('emailInput');

    fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                name: nameInput.value,
                email: emailInput.value,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            })
            .then((response) => response.json())
            .then((json) => console.log(json));
});
});

// MODAL

document.addEventListener("DOMContentLoaded", function(){
    const modal = document.getElementById("modal");
    const closeModal = document.getElementById("closeModal");
    const form = document.getElementById("newsletterForm");
    let modalShown = false;

    // Funcion para mostral el modal a los 5segundos
    function showModal(){
        setTimeout(() => {
            if (!modalShown) {
                modal.style.display = "block";
                modalShown = true; 
            }
        }, 5000);
    };
    showModal();
    // Funcion para mostrar modal al bajar 25% scroll
    function showModalScroll (){
        const scrollPosition = window.scrollY;
        const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const percentage = (scrollPosition / totalHeight) * 100;
            if(!modalShown && percentage > 25){
                modal.style.display = "block"
                modalShown = true;
            }
    }
    window.addEventListener("scroll", showModalScroll);

    //Funcion para cerrar el Modal
    closeModal.addEventListener("click", function() {
        modal.style.display = "none";
    });
    //Función para cerrar Div pulsando Escape
    window.addEventListener("keyup",function(e){
        if(e.key == "Escape") {
            modal.style.display="none";
        }
    });
    //Funcion para cerrar Div pulsando fuera del pop-up NO FUNCIONA
    modal.addEventListener("mousedown", function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

// Funcion para guardar email en localStorage
    const botonSubscribe = document.getElementById("btnSub");

    function guardarLocalstorage() {
        const emailInput = document.getElementById("emailNews");
        let email = emailInput.value;
        localStorage.setItem("email", JSON.stringify(email));
        modal.style.display = "none";
        modalShown = true;
    }
    
    botonSubscribe.addEventListener("click", guardarLocalstorage);

    if (localStorage.getItem("email")) {
        modal.style.display = "none";
        modalShown = true; 
    } else {
        botonSubscribe.addEventListener("click", guardarLocalstorage);
    }
});

// SELECTOR MONEDA

document.addEventListener("DOMContentLoaded", function() {
    const cambioMoneda = document.getElementById("cambioMoneda");

    cambioMoneda.addEventListener("change", function() {
    const monedaSeleccionada = cambioMoneda.value;
    obtenerTiposDeCambio(monedaSeleccionada);
    });
});
function obtenerTiposDeCambio(currency) {
    const url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        const tiposDeCambio = data.rates;
        
        const precioUSD = tiposDeCambio.USD;
        const precioEUR = tiposDeCambio.EUR;
        const precioGBP = tiposDeCambio.GBP;
        
        const precioElements = document.querySelectorAll("#precio");
        precioElements.forEach(element => {
            switch (currency) {
                case "USD":
                    element.textContent = `$${precioUSD}`;
                    break;
                case "EUR":
                    element.textContent = `€${precioEUR}`;
                    break;
                case "GBP":
                    element.textContent = `£${precioGBP}`;
                    break;
            }
        });
    })
    .catch(error => {
        console.error("Error al obtener los tipos de cambio:", error);
    });
}




// SLIDER

document.addEventListener("DOMContentLoaded", function() {
    let imagenes = [
        "/imagenes/pexels-ezra-comeau-2387418.jpg",
        "/imagenes/pexels-francesco-ungaro-2325446.jpg",
        "/imagenes/pexels-jaime-reimer-2662116.jpg"
    ];

    let sliderDerecha = document.querySelector(".next-btn");
    let sliderIzquierda = document.querySelector(".prev-btn");
    let contador = 0;

    function moverDerecha() {
        contador++;
        if (contador >= imagenes.length) {
            contador = 0;

        }
        document.getElementsByName("Imagen")[0].src = imagenes[contador];
    }

    document.getElementsByName("Imagen")[0].src = imagenes[0];
    sliderDerecha.addEventListener("click", moverDerecha);

    function moverIzquierda() {
        contador--;
        if (contador < 0) {
            contador = imagenes.length - 1;
        }
        document.getElementsByName("Imagen")[0].src = imagenes[contador];
    }
    sliderDerecha.addEventListener("click", moverDerecha);
    sliderIzquierda.addEventListener("click", moverIzquierda);
    function actualizarDots() {
        let dots = document.querySelectorAll(".dots span");
        dots.forEach((dot, index) => {
            if (index === contador) {
                dot.classList.add("active");
            } else {
                dot.classList.remove("active");
            }
        });
    }

    // Evento para mover a una imagen específica al hacer clic en un dot
    let dots = document.querySelectorAll(".dots span");
    dots.forEach((dot, index) => {
        dot.addEventListener("click", function() {
            contador = index;
            document.getElementsByName("Imagen")[0].src = imagenes[contador];
            actualizarDots();
        });
    });
    dots[0].classList.add("active");
    dots[1].classList.add("dot2");
    dots[2].classList.add("dot3");
    document.getElementsByName("Imagen")[0].src = imagenes[0];
    setInterval(moverDerecha, 7000);
});
