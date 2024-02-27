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
    let precioUSD = {
        basico: 0,
        profesional: 25,
        premium: 60,
    }

    let i = 1;
    Object.values(precioUSD).forEach(element => {
        let precioHTML = document.querySelector(".box" + i + " #precio");
        precioHTML.innerHTML = "$" + element;
        i += 2;
    });

    cambioMoneda.addEventListener("change", function() {
    const monedaSeleccionada = cambioMoneda.value;
    obtenerTiposDeCambio(monedaSeleccionada, precioUSD);
    });
});
function obtenerTiposDeCambio(currency, precios) {
    const url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json`;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        const currencies = currency.toLowerCase();
        let valorCambio = parseFloat(data["usd"][currencies]);
        let i = 1 ;
        switch(currencies){
            case "eur": 
                moneda = "€";
                break;
            case "gbp":
                moneda = "£";
                break;
            default: 
                moneda = "$";
        }
        Object.values(precios).forEach(element => {
            let precioHTML = document.querySelector(".box" + i + " #precio");
            precioHTML.innerHTML = moneda + Math.round(element * valorCambio);
            i += 2;
        });
    });
}




// SLIDER

document.addEventListener("DOMContentLoaded", function() {
    const imagenes = [
        "imagenes/pexels-ezra-comeau-2387418.jpg",
        "imagenes/pexels-francesco-ungaro-2325446.jpg",
        "imagenes/pexels-jaime-reimer-2662116.jpg"
    ];

    const sliderDerecha = document.querySelector(".next-btn");
    const sliderIzquierda = document.querySelector(".prev-btn");
    let contador = 0;

    // Función para actualizar la imagen del slider
    function actualizarImagen() {
        document.querySelector("[name='Imagen']").src = imagenes[contador];
        actualizarDots();
    }

    // Función para mover hacia la derecha
    function moverDerecha() {
        contador = (contador + 1) % imagenes.length;
        actualizarImagen();
    }

    // Función para mover hacia la izquierda
    function moverIzquierda() {
        contador = (contador - 1 + imagenes.length) % imagenes.length;
        actualizarImagen();
    }

    // Función para actualizar los puntos indicadores
    function actualizarDots() {
        const dots = document.querySelectorAll(".dots span");
        dots.forEach((dot, index) => {
            dot.classList.toggle("active", index === contador);
        });
    }

    // Añadir eventos a los botones
    sliderDerecha.addEventListener("click", moverDerecha);
    sliderIzquierda.addEventListener("click", moverIzquierda);

    // Añadir evento a los dots para mover a imagen específica
    document.querySelectorAll(".dots span").forEach((dot, index) => {
        dot.addEventListener("click", function() {
            contador = index;
            actualizarImagen();
        });
    });

    // Establecer la imagen inicial y activar el primer dot
    actualizarImagen();

});






document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario2").addEventListener("submit", function(event) {
        event.preventDefault(); // Previene el envío predeterminado para validar

        var nameInput = document.getElementById("nameInput").value;
        var emailInput = document.getElementById("emailInput").value;
        var checkbox = document.getElementById("checkbox").checked;

        // Validación de campos del formulario
        if (nameInput.length >= 2 && nameInput.length <= 100 && emailInput && checkbox) {
            // Todos los campos son válidos, muestra el mensaje de éxito
            var successMessage = document.getElementById("successMessage");
            successMessage.style.display = "block";
            

            setTimeout(function() {
                successMessage.style.display = "none";
            }, 5000);
            // Opcional: Ocultar el formulario o realizar otras acciones después del envío exitoso
        } else {
            // Si algún campo no es válido, muestra un mensaje de error
            alert("Please fill in all the fields correctly.");
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var newsletterForm = document.getElementById("newsletterForm");
    newsletterForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Previene el envío tradicional del formulario.
        
        var successMessage = document.getElementById("successMessage"); // Asegúrate de tener esta línea para definir successMessage
        successMessage.style.display = "block";
        successMessage.innerHTML = "Thank you for subscribing!";
        
        // Opcional: Limpia el campo de email después de mostrar el mensaje de éxito.
        setTimeout(function() {
            successMessage.style.display = "none"; // Ahora successMessage está definido correctamente.
        }, 3000);
        
        document.getElementById("emailNews").value = "";
    });
});
