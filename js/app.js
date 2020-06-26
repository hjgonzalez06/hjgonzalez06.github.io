$(document).ready(function(){

    /* Filtros de la sección "Sobre Mí" */
    $('.filter').each(function(){

        $('#option-section').find('.row').hide();
        $(this).find('li').first().addClass('active');
        $('#option-section').find('.row').first().show();

    });

    $('.filter').on('click','li',function(e){

        if($(this).hasClass('active')){
            return false;
        }

        $(this).parent().children().removeClass('active');
        $(this).addClass('active');

        $('#option-section').find('.row').hide();
        var showById = $($(this).find('a').attr('href'));
        $('#option-section').find(showById).fadeIn(400);

        e.preventDefault();

    });

    /* Envío de Formulario de Contacto con AJAX */
    $('form').on('click','#enviar',function(e){
        e.preventDefault();

        let name = $('form').find('#name').val();
        let email = $('form').find('#email').val();
        let subject = $('form').find('#subject').val();
        let message = $('form').find('#mensaje').val();
        let action = $('form').attr('action');
        let method = $('form').attr('method');

        let data = {
            url: action,
            type: method,
            dataType: 'json',
            data: {
                name: name,
                email: email,
                subject: subject,
                message: message
            }
        }

        function sendData(data){
            return new Promise(function(resolve,reject){
                $.ajax(data).done(resolve).fail(reject);
            });
        };

        sendData(data).then(function resolve(data){
            /* $('form input[type=text] , form textarea').each(function(){
                this.value = '';
            }); */
            alert('¡Mensaje enviado exitosamente!');
        }, function reject(reason){
            alert('No se pudo enviar el mensaje.');
        });

    });

})