// PORCENTAJE DE PÁGINA 


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



const sendButton = document.getElementById("send");
sendButton.addEventListener("click", function(event) {
    event.preventDefault(); // evitar que se envíe el formulario por defecto
    const nameInput = document.getElementById("nameInput");
    const emailInput = document.getElementById("emailInput");
    const checkbox = document.getElementById("checkbox");

    // Validar el campo de nombre
    if (nameInput.value.length < 2 || nameInput.value.length > 100) {
        nameInput.style.borderColor = "red";
        return;
    } else {
        nameInput.style.borderColor = "initial";
    }

    // Validar el campo de correo electrónico
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(emailInput.value)) {
        emailInput.style.borderColor = "red";
        return;
    } else {
        emailInput.style.borderColor = "initial";
    }

    // Validar la casilla de verificación
    if (!checkbox.checked) {
        checkbox.style.borderColor = "red";
        return;
    } else {
        checkbox.style.borderColor = "initial";
    }

    // Si todos los campos son válidos, enviar el formulario
    document.getElementById("formulario").submit();
});




const form = document.querySelector('#formulario');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const nameInput = document.querySelector('#nameInput');
    const emailInput = document.querySelector('#emailInput');
    const checkbox = document.querySelector('#checkbox');

    // Validación de campos
    if (nameInput.value === '' || emailInput.value === '' || !checkbox.checked) {
        alert('Por favor, rellena todos los campos y acepta la política de privacidad');
        return;
    }

    // Objeto con los datos del formulario
    const formData = {
        name: nameInput.value,
        email: emailInput.value
    };

    // Solicitud POST con fetch()
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => {
        if (response.ok) {
        alert('Los datos han sido enviados con éxito');
        nameInput.value = '';
        emailInput.value = '';
        checkbox.checked = false;
        } else {
        throw new Error('Ha habido un error en el envío de datos');
        }
    })
    .catch(error => {
        console.error(error);
    });
    });
