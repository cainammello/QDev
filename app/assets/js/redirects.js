$(function(){
    $(".navbar-nav li a").click(function (event) {
        event.preventDefault();
        var idElemento = $(this).attr("href");
        var deslocamento = $(idElemento).offset().top + (-40);
        $('html, body').animate({ scrollTop: deslocamento }, 'slow');
    });
});

$(function(){
    $("#inovationSpaceClick").click(function (event) {
        event.preventDefault();
        var idElemento = $(this).attr("href");
        var deslocamento = $(idElemento).offset().top + (-70);
        $('html, body').animate({ scrollTop: deslocamento }, 'slow');
    });
});

$(function(){
    $("#mainMenu").click(function (event) {
        event.preventDefault();
        var idElemento = $(this).attr("href");
        var deslocamento = $(idElemento).offset().top;
        $('html, body').animate({ scrollTop: deslocamento }, 'slow');
    });
});