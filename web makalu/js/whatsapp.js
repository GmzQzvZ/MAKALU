$(document).on('click', '.send_form_travel', function () {
    var input_blanter = document.getElementById('wa_email');

    /* Whatsapp Settings */
    var walink = 'https://web.whatsapp.com/send',
        phone = '573112584151',
        walink2 = 'Hola, mucho gusto.',
        text_yes = 'Enviado.',
        text_no = 'Complete todos los formularios y luego haga clic en Enviar.';

    /* Smartphone Support */
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        walink = 'whatsapp://send';
    }

    if (input_blanter.value.trim() !== "") {
        /* Call Input Form */
        var input_select1 = $("#wa_select :selected").text(),
            input_name1 = $("#wa_name").val(),
            input_email1 = $("#wa_email").val(),
            input_number1 = $("#wa_number").val(),
            input_adult1 = $("#wa_adult").val(),
            input_children1 = $("#wa_children").val(),
            input_textarea1 = $("#wa_textarea").val();

        /* Final Whatsapp URL */
        var blanter_whatsapp = walink + '?phone=' + phone + '&text=' + walink2 + '%0A%0A' +
            '*estas hablando con* : ' + input_name1 + '%0A' +
            '*Correo Electrónico* : ' + input_email1 + '%0A' +
            '*estoy interesado en* : ' + input_select1 + '%0A' +
            '*Teléfono* : ' + input_number1 + '%0A' +
            '*Adultos* : ' + input_adult1 + '%0A' +
            '*Niños* : ' + input_children1 + '%0A' +
            '*Detalles de la Cotización* : ' + input_textarea1 + '%0A';

        /* Whatsapp Window Open */
        window.open(blanter_whatsapp, '_blank');
        document.getElementById("text-info").innerHTML = '<span class="yes">' + text_yes + '</span>';
    } else {
        document.getElementById("text-info").innerHTML = '<span class="no">' + text_no + '</span>';
    }
});

$(document).on('click', '.send_form_data', function () {
        var input_name1 = $("#pname").val(),
            input_email1 = $("#pemail").val(),
            input_select1 = $("#pselect").val();

        var walink = 'https://web.whatsapp.com/send',
            phone = '573229520608',  // El número de WhatsApp al que se enviará el mensaje
            walink2 = 'Hola, mucho gusto. Te contacto desde el formulario sobre mis datos.',
            text_yes = 'Enviado.',
            text_no = 'Complete todos los formularios y luego haga clic en Enviar.';

        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            walink = 'whatsapp://send';
        }

        // Verificar si los campos no están vacíos
        if (input_name1.trim() !== "" && input_email1.trim() !== "" && input_select1 !== "") {
            // Generar el link para enviar por WhatsApp
            var blanter_whatsapp = walink + '?phone=' + phone + '&text=' + walink2 + '%0A%0A' +
                '*Nombre* : ' + input_name1 + '%0A' +
                '*Correo Electrónico* : ' + input_email1 + '%0A' +
                '*Selecciono* : ' + input_select1 + '%0A';

            // Abrir la ventana de WhatsApp con los datos
            window.open(blanter_whatsapp, '_blank');
            document.getElementById("pmsgSubmit").innerHTML = '<span class="yes">' + text_yes + '</span>';
            $("#pmsgSubmit").removeClass('hidden');
        } else {
            document.getElementById("pmsgSubmit").innerHTML = '<span class="no">' + text_no + '</span>';
            $("#pmsgSubmit").removeClass('hidden');
        }
    });

