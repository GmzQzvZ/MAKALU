document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('surveyForm');

    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Detener el envío predeterminado
        console.log("El evento submit se activó correctamente");
        
        // Recopilar datos del formulario
        const serviceRating = document.getElementById('serviceRating').value;
        const responseTime = document.getElementById('responseTime').value;
        const communicationEase = document.getElementById('communicationEase').value;

        const packageExpectation = document.getElementById('packageExpectation').value;
        const accommodationQuality = document.getElementById('accommodationQuality').value;
        const recommendation = document.getElementById('recommendation').value;

        const priceFairness = document.getElementById('priceFairness').value;
        const recontracting = document.getElementById('recontracting').value;

        const improvementSuggestions = document.getElementById('improvementSuggestions').value;
        const additionalServices = document.getElementById('additionalServices').value;

        const recommendScale = document.getElementById('recommendScale').value;

        // Crear el mensaje de WhatsApp
        let message = `
        Encuesta de Satisfacción:
        - Calificación del servicio: ${serviceRating}
        - Tiempo de respuesta adecuado: ${responseTime}
        - Facilidad de comunicación: ${communicationEase}

        - Cumplimiento de expectativas del paquete: ${packageExpectation}
        - Calidad de alojamientos: ${accommodationQuality}
        - Recomendación del paquete: ${recommendation}

        - Precio justo: ${priceFairness}
        - Volvería a contratar: ${recontracting}

        - Sugerencias de mejora: ${improvementSuggestions}
        - Servicios adicionales sugeridos: ${additionalServices}

        - Probabilidad de recomendación: ${recommendScale}/10
        `;

        // Codificar mensaje para URL
        const encodedMessage = encodeURIComponent(message);

        // Número de WhatsApp (actualizado con el número proporcionado)
        const phoneNumber = "573229520508"; // Número en formato internacional

        // Redirigir a WhatsApp
        window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    console.log("El DOM está listo");

    const form = document.getElementById('surveyForm');
    if (form) {
        console.log("Formulario encontrado");

        form.addEventListener('submit', function (e) {
            e.preventDefault();
            console.log("Evento submit activado");
        });
    } else {
        console.error("Formulario no encontrado");
    }
});
