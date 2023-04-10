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


// ENVIO DATOS FORMULARIO

document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('#formulario2');
    const nameInput = document.querySelector('#nameInput');
    const emailInput = document.querySelector('#emailInput');
    const checkbox = document.querySelector('#checkbox');
    
        form.addEventListener('submit', (event) => {
        event.preventDefault();
    
        if (!checkbox.checked) {
            alert('Please accept the legal disclaimer');
            return;
        }
    
        const formData = new FormData(form);
    
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
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
        });
    });


// MODAL
document.addEventListener("DOMContentLoaded", function() {

    const modal = document.getElementById("modal");
    const closeModal = document.getElementById("closeModal");
    const form = document.getElementById("newsletterForm");
    
    // Mostrar modal después de 5 segundos
    setTimeout(() => {
        if (!localStorage.getItem("modalClosed")) {
            showModal();
        }
    }, 5000);
    
    // Mostrar modal al bajar 25% de la página
    window.addEventListener("scroll", () => {
        if (!localStorage.getItem("modalClosed")) {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
            const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight || 0;
            const clientHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0;
    
            if (scrollTop / (scrollHeight - clientHeight) >= 0.25) {
                showModal();
            }
        }
    });
    
    // Función para mostrar el modal
    function showModal() {
        modal.style.display = "block";
    }
    
    // Función para cerrar el modal
    function hideModal() {
        modal.style.display = "none";
        localStorage.setItem("modalClosed", "true");
    }
    
    closeModal.addEventListener("click", hideModal);
    
    // Cerrar el modal al hacer clic fuera del contenido
    modal.addEventListener("click", (event) => {
        if (event.target === modal) {
            hideModal();
        }
    });
    
    // Cerrar el modal con la tecla "Esc"
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" || event.key === "Esc") {
            hideModal();
        }
    });
    
    });





















// formulario2.addEventListener('submit', (e) => {
    

//     if (nameInput.value.length < 2 || nameInput.value.length > 100) {
//         nameInput.style.borderColor = 'red';
//         isValid = false;
//     } else {
//         nameInput.style.borderColor = '';
//     }

//     if (!validateEmail(emailInput.value)) {
//         emailInput.style.borderColor = 'red';
//         isValid = false;
//     } else {
//         emailInput.style.borderColor = '';
//     }

//     if (!checkbox.checked) {
//         checkbox.style.borderColor = 'red';
//         isValid = false;
//     } else {
//         checkbox.style.borderColor = '';
//     }

//     if (isValid) {
//         console.log("Es valido el formulario");
//     } else {
//         console.log("No es valido");
//     }
//     e.preventDefault();
//     let isValid = true;
//     // if (isValid) {
//     //     fetch('https://jsonplaceholder.typicode.com/posts', {
//     //         method: 'POST',
//     //         body: JSON.stringify({
//     //             name: nameInput.value,
//     //             email: emailInput.value
//     //                 }),
//     //                 headers: {
//     //                     'Content-type': 'application/json; charset=UTF-8'
//     //                 }
//     //             })
//     //             .then(response => response.json())
//     //             .then(json => console.log(json));
//     //         }
// });

//         // Modal para suscripción al boletín
//         const modal = document.getElementById("newsletterModal");
//         const closeBtn = document.querySelector(".close");
//         const subscribeBtn = document.getElementById("subscribeBtn");
//         const newsletterEmail = document.getElementById("newsletterEmail");

//         function showModal() {
//             if (!sessionStorage.getItem("modalClosed")) {
//                 modal.style.display = "block";
//             }
//         }

//         setTimeout(showModal, 5000);

//         window.addEventListener("scroll", () => {
//             const scrollPercentage = window.scrollY / (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100;
//             if (scrollPercentage > 25) {
//                 showModal();
//             }
//         });

//         closeBtn.onclick = () => {
//             modal.style.display = "none";
//             sessionStorage.setItem("modalClosed", true);
//         };

//         window.onclick = (event) => {
//             if (event.target === modal) {
//                 modal.style.display = "none";
//                 sessionStorage.setItem("modalClosed", true);
//             }
//         };

//         window.addEventListener("keydown", (event) => {
//             if (event.key === "Escape" && modal.style.display === "block") {
//                 modal.style.display = "none";
//                 sessionStorage.setItem("modalClosed", true);
//             }
//         });

//         subscribeBtn.addEventListener("click", () => {
//             if (validateEmail(newsletterEmail.value)) {
//                 fetch('https://jsonplaceholder.typicode.com/posts', {
//                     method: 'POST',
//                     body: JSON.stringify({
//                         email: newsletterEmail.value
//                     }),
//                     headers: {
//                         'Content-type': 'application/json; charset=UTF-8'
//                     }
//                 })
//                 .then(response => response.json())
//                 .then(json => {
//                     console.log(json);
//                     modal.style.display = "none";
//                     sessionStorage.setItem("modalClosed", true);
//                 });
//             } else {
//                 newsletterEmail.style.borderColor = 'red';
//             }
//         });