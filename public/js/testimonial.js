// Importar e inicializar Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getDatabase, ref, push, set } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";

const firebaseConfig = {
    apiKey: "USHod5NOkUTJv5vQ85UR",
    authDomain: "makaluvye.firebaseapp.com",
    databaseURL: "https://makaluvye.firebaseio.com",
    projectId: "makaluvye",
    storageBucket: "makaluvye.appspot.com",
    messagingSenderId: "ID",
    appId: "APP_ID"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);


  // Referencia al botón de envío
    const sendButton = document.getElementById("sendButton");

  // Agregar el evento al botón
    sendButton.addEventListener("click", async () => {
    // Recopilar los datos del formulario
    const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        rating: document.getElementById("rating").value,
        serviceRating: document.getElementById("serviceRating").value,
        responseTime: document.getElementById("responseTime").value,
        communicationEase: document.getElementById("communicationEase").value,
        packageExpectation: document.getElementById("packageExpectation").value,
        accommodationQuality: document.getElementById("accommodationQuality").value,
        recommendation: document.getElementById("recommendation").value,
        priceFairness: document.getElementById("priceFairness").value,
        recontracting: document.getElementById("recontracting").value,
        improvementSuggestions: document.getElementById("improvementSuggestions").value,
        additionalServices: document.getElementById("additionalServices").value,
        recommendScale: document.getElementById("recommendScale").value,
        comments: document.getElementById("comments").value,
    };

    try {
      // Guardar los datos en Firestore
    await addDoc(collection(db, "surveys"), formData);
    alert("¡Encuesta enviada con éxito! Gracias por tu participación.");
      document.getElementById("surveyForm").reset(); // Limpiar el formulario
    } catch (error) {
    console.error("Error al guardar los datos:", error);
    alert("Hubo un error al enviar la encuesta. Inténtalo nuevamente.");
    }
});
