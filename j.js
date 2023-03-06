$('span').on('mouseenter', '.uwu', function(){
    $('.uwu').html(Math.random().toString(36).substring(7));
}).on('mouseleave', function(){
    $('.uwu').html('Kaslana.');
});