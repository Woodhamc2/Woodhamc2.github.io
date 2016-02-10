$(document).ready(function(){
    
    var cart = [];
    function driver(){
        
    };
    
    
    function getCart(){
      var a = localStorage.getItem('cart');
        if (a){
            cart = JSON.parse(a);
        }
    };
    
    function saveCart(){
        var a = JSON.stringify(cart);
        localStorage.setItem('cart', a);	
    }
    
    function priceNum(str){
        var a = str.substr(1);
        a = parseInt(a, 10);
        return a;
    }
    
    function updateDriver(){
        var d = new driver();
        
        d.name = $('#name').text();
        d.price = priceNum($('#price').text());
        d.hand = $('#hand').val();
        d.flex = $('#flex').val();
        d.loft = $('#loft').val();
        d.shaft = $('#shaft').val();
        d.quantity = $('#quantity').val();
        return d;
    }
    
    
    $('#addToCart').click(function(){
        var a = updateDriver();
        cart.push(a);
        console.log(cart);
        saveCart();
    });
    
    
    
    getCart();
});