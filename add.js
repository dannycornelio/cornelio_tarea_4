//defino las variables y constantes

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('dimaniForm');
    const inputDinamico = document.getElementById('inputDinamico');
    const agregarInput = document.getElementById('agregarInput');
    const eliminarInput = document.getElementById('eliminarInput');

    let contadorInput = 0;

    // Función para crear un nuevo input
    function createInput() {
        const input = document.createElement('input');
        input.type = 'text';
        input.name = `input${contadorInput}`;
        input.placeholder = 'Ingrese comentario';
        input.style.border = '2px solid black';
        input.style.padding = '15px';
        input.style.marginBottom = '10px';
        input.style.width = '100%';
        input.style.borderRadius = '10px';

        inputDinamico.appendChild(input);

        contadorInput++;
    }

    // Evento para agregar un nuevo input
    agregarInput.addEventListener('click', function() {
        createInput();
    });

// Evento para eliminar el último input
    eliminarInput.addEventListener('click', function() {
        if (contadorInput > 1) {
            inputDinamico.removeChild(inputDinamico.lastChild);
            contadorInput--;
        } else {
// Si solo queda un input, también lo eliminamos
            inputDinamico.innerHTML = '';
            contadorInput = 0;
        }
    });

// Evento para validar y enviar el formulario
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        let isValid = true;

// Verificar que todos los inputs estén llenos
const inputs = Array.from(inputDinamico.getElementsByTagName('input'));
inputs.forEach(function(input) {
    if (input.value.trim() === '') {
        isValid = false;
        input.style.outline = '2px solid red';
    } else {
        input.style.outline = '';
    }
});


        if (isValid) {
            // Enviar el formulario
            alert('Su peticion fue enviada exitosamente!');
            form.reset();
        } else {
            alert('Complete el formulario, sino elimine la casilla vacia!');
        }
    });
});