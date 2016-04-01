$(document).ready(function() {
    //List Jobs
    $(".job-list").hide();
    $("#job-btn").click(function() {
        $(".job-list").toggle("slow");
    });
    //We Provide Content
    $(".readmore-content1").hide();

    $(".readmore-content2").hide();

    $(".readmore-content3").hide();

    $(".readmore-content4").hide();

    $(".readmore-content5").hide();

    $(".readmore1").click(function() {

    $(".readmore-content2").hide();

    $(".readmore2").show();

    $(".readmore-content3").hide();

    $(".readmore3").show();

    $(".readmore-content4").hide();

    $(".readmore4").show();

    $(".readmore-content5").hide();

    $(".readmore5").show();

   

        $(".readmore-content1").show("slow");

        $(".readmore1").hide();

        $(".readmore-content1").show();

        $(".readless1").click(function(){

           $(".readmore-content1").hide("slow"); 

           $(".readmore1").show();

        });

    });

    $(".readmore2").click(function() {

    $(".readmore-content1").hide();

    $(".readmore1").show();

    $(".readmore-content3").hide();

    $(".readmore3").show();

    $(".readmore-content4").hide();

    $(".readmore4").show();

    $(".readmore-content5").hide();

    $(".readmore5").show();

    

        $(".readmore-content2").show("slow");

        $(".readmore2").hide();

        $(".readmore-content2").show();

        $(".readless2").click(function(){

           $(".readmore-content2").hide("slow"); 

           $(".readmore2").show();

        });

    });

    $(".readmore3").click(function() {

    $(".readmore-content1").hide();

    $(".readmore1").show();

   $(".readmore-content2").hide();

   $(".readmore2").show();

   $(".readmore-content4").hide();

   $(".readmore4").show();

    $(".readmore-content5").hide();

    $(".readmore5").show();

   

        $(".readmore-content3").show("slow");

        $(".readmore3").hide();

        $(".readmore-content3").show();

        $(".readless3").click(function(){

           $(".readmore-content3").hide("slow"); 

           $(".readmore3").show();

        });

    });

    $(".readmore4").click(function() {

    $(".readmore-content1").hide();

$(".readmore1").show();

   $(".readmore-content2").hide();

   $(".readmore2").show();

   $(".readmore-content3").hide();

   $(".readmore3").show();

    $(".readmore-content5").hide();

    $(".readmore5").show();

    

        $(".readmore-content4").show("slow");

        $(".readmore4").hide();

        $(".readmore-content4").show();

        $(".readless4").click(function(){

           $(".readmore-content4").hide("slow"); 

           $(".readmore4").show();

        });

    });

    $(".readmore5").click(function() {

    $(".readmore-content1").hide();

    $(".readmore1").show();

   $(".readmore-content2").hide();

   $(".readmore2").show();

   $(".readmore-content3").hide();

   $(".readmore3").show();

    $(".readmore-content4").hide();

    $(".readmore4").show();

    

        $(".readmore-content5").show("slow");

        $(".readmore5").hide();

        $(".readmore-content5").show();

        $(".readless5").click(function(){

           $(".readmore-content5").hide("slow"); 

           $(".readmore5").show();

        });

    });
    
    // Slider
    $(window).load(function() {
      $('.flexslider').flexslider({
        animation: "slide"
      });
    });
    
    
    //Read More
    $('article').readmore({
      collapsedHeight: 45,
      speed: 200
    });
    
    
    //Page Scroll
    $('a[href*=#]').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
    && location.hostname == this.hostname) {
      var $target = $(this.hash);
      $target = $target.length && $target
      || $('[name=' + this.hash.slice(1) +']');
      if ($target.length) {
        var targetOffset = $target.offset().top;
        $('html,body')
        .animate({scrollTop: targetOffset}, 1000);
       return false;
      }
    }
  });
    
    //FAQs
    $('.first-p').hide();
    $('#faq p').hide();
    $("#faq .content-subtext").click(function(){
         $(this).next().slideToggle("200");
    });
    
    new WOW().init();

});