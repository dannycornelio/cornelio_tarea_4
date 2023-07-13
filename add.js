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
        input.placeholder = 'Ingrese un valor';

        inputDinamico.appendChild(input);

        contadorInput++;
    }

    // Evento para agregar un nuevo input
    agregarInput.addEventListener('click', function() {
        createInput();
    });

    // Evento para eliminar el último input
    eliminarInput.addEventListener('click', function() {
        if (contadorInput > 0) {
            inputDinamico.removeChild(inputDinamico.lastChild);
            contadorInput--;
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
                input.style.border = '1px solid red';
            } else {
                input.style.border = '';
            }
        });

        if (isValid) {
            // Enviar el formulario
            alert('Formulario enviado exitosamente!');
            form.reset();
        } else {
            alert('Por favor, complete todos los campos.');
        }
    });
});