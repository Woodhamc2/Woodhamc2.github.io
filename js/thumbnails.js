$(document).ready(function(){
    
    $('.thumbs img').click(function() {
        var thmb = this;
        var src = this.src;
        $('.Wrapper img').fadeOut(400,function(){
            $(this).fadeIn(400)[0].src = src;
        });
    });
    
});

