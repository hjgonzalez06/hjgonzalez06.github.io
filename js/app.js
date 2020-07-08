$(document).ready(function(){

    /* Removiendo efectos de AOS en dispositivos móviles */
    if($(window).width() < 576){
        $('*').removeAttr('data-aos');
    }

    /* Efecto de Ocultamiento del Navbar */
    let scrollOrigin = $(window).scrollTop();

    $(window).scroll(function(){

        let scrollActual = $(window).scrollTop();

        if(scrollActual > 85){
            if(scrollOrigin < scrollActual){
                $('#menu').slideUp();
            }else{
                $('#menu').slideDown();
                $('#menu').css('box-shadow','5px 5px 10px 0px rgba(0,0,0,0.5)');
            }
        }

        scrollOrigin = scrollActual;

        if(scrollActual == 0){
            $('#menu').css('box-shadow','none');
        }

    });

    /* Desplegando enlaces del menú con el toggler */
    $('.navbar-toggler').on('click',function(e){

        if($(this).hasClass('activated')){
            $(this).find('i').removeClass('fa-times');
            $(this).find('i').addClass('fa-bars');
            $(this).removeClass('activated');
            $('#navbar-list').slideUp(400,function(){
                $('#menu').css('border-bottom','5px var(--spanish-viridian) solid');
            });
            return '';
        }

        $(this).find('i').removeClass('fa-bars');
        $(this).find('i').addClass('fa-times');
        $(this).addClass('activated');
        $('#menu').css('border-bottom','none');
        $('#menu').css('box-shadow','none');
        $('#navbar-list').slideDown();
        $('#navbar-list').css('border-bottom','5px var(--spanish-viridian) solid');

        e.preventDefault();
    })

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

        if(name == "" || email == "" || subject == "" || message == ""){
            return Swal.fire({
                                icon: 'warning',
                                title: '¡Debe rellenar todos los campos!',
                                showConfirmButton: false,
                                timer: 2500
                            });
        }

        if(action != "https://formspree.io/mjvaooza" || method != "post"){
            return Swal.fire({
                                icon: 'warning',
                                title: '¡No modifique los atributos de este formulario!',
                                showConfirmButton: false,
                                timer: 2500
                            });
        }

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
            $('form').trigger('reset');
            Swal.fire({
                icon: 'success',
                title: '¡Mensaje enviado!',
                showConfirmButton: false,
                timer: 2500
            });
        }, function reject(reason){
            Swal.fire({
                icon: 'error',
                title: '¡Algo ha ido mal!',
                showConfirmButton: false,
                timer: 2500
            });
        });

    });

})