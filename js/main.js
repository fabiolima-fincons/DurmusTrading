$(document).ready(function(){
    $('.menu-link').click(function(e){
        e.preventDefault();
        var target = $(this).attr('href').substring(1);

        // Highlight active menu
        $('.menu-link').removeClass('active');
        $(this).addClass('active');

        // Fade in the selected section
        $('.fade-in').fadeOut(20, function(){
            $('#' + target).fadeIn(300);
        });
    });
});