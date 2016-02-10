$(document).ready(function(){
    
    var cart = [],
        total = 0;
    
    function getCart(){
      var a = localStorage.getItem('cart');
        if (a){
            cart = JSON.parse(a);
            return cart;
        }
    };
    
    function saveCart(){
        var a = JSON.stringify(cart);
        localStorage.setItem('cart', a);	
    }
    
    function refreshCart(){
        var a = getCart();
        a.forEach(function(obj, index){
          $('#cart').append("<div class='cart-object' id='"+index+"' >");    
              $('#'+index).append("<h1>"+obj.name+"</h1>");  
              $('#'+index).append("<h3> $"+obj.price+"</h3>");  
              $('#'+index).append("<p>Hand: "+obj.hand+"</p>");  
              $('#'+index).append("<p>Flex: "+obj.flex+"</p>");
              $('#'+index).append("<p>Shaft: "+obj.shaft+"</p>");
              $('#'+index).append("<p>Loft: "+obj.loft+"</p>");
              $('#'+index).append("<p>Amount: "+obj.quantity+"</p>");
              $('#'+index).append("<button class='removeButton'>Remove</button>");
              
            total += obj.price * obj.quantity;
        });
        $('#total').append("<h1>$"+total+"</h1>");
    }
    
    function priceNum(str){
        var a = str.substr(1);
        a = parseInt(a, 10);
        return a;
    }
    
    
    $('#cart').on('click', '.removeButton', function(){
        var a = $( this ).parent()[0].id;
        $(this).parent().remove()
        cart.splice(a, 1);
        saveCart();
    });
    
    refreshCart();
});

//crtObj"+index+"