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

    

})