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