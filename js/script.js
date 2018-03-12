$(document).ready(function(){
  // $( ".backnav" ).click(function() {
  //   $(".backnav").delay(300).queue(function(){
  //     $("body").removeClass("overhidden");
  //     $(this).dequeue();
  //   });
  //   $("ul.sidenav").removeClass("navactive");
  //   $(".backnav").removeClass("backnavctive");
  // });
  var body = $("body");
  body.click( function() {
    $(".round").css("box-shadow", "0px 0px 30px 0px rgba(0,0,0,0.1)");
    $(".elem6").addClass("element6");
    body.delay('100').queue(function() {
      $(".elem5").addClass("element5");
      $(this).dequeue();
    });
    body.delay('200').queue(function() {
      $(".elem4").addClass("element4");
      $(this).dequeue();
    });
    body.delay('300').queue(function() {
      $(".elem3").addClass("element3");
      $(this).dequeue();
    });
    body.delay('400').queue(function() {
      $(".elem2").addClass("element2");
      $(this).dequeue();
    });
    body.delay('500').queue(function() {
      $(".elem1").addClass("element1");
      $(this).dequeue();
    });
    body.delay('600').queue(function() {
      $(".text img").addClass("imgku");
      $(this).dequeue();
    });
    body.delay('800').queue(function() {
      $(".text h1").addClass("h1ku");
      $(this).dequeue();
    });
    body.delay('1000').queue(function() {
      $(".text h3").addClass("h3ku");
      $(this).dequeue();
    });
    
    // ---------------------------------------
    // body.delay('600').queue(function() {
    //   $(".elem1").removeClass("element1");
    //   $(this).dequeue();
    // });
    // body.delay('700').queue(function() {
    //   $(".elem2").removeClass("element2");
    //   $(this).dequeue();
    // });
    // body.delay('800').queue(function() {
    //   $(".elem3").removeClass("element3");
    //   $(this).dequeue();
    // });
    // body.delay('900').queue(function() {
    //   $(".elem4").removeClass("element4");
    //   $(this).dequeue();
    // });
    // body.delay('1000').queue(function() {
    //   $(".elem5").removeClass("element5");
    //   $(this).dequeue();
    // });
    // body.delay('1100').queue(function() {
    //   $(".elem6").removeClass("element6");
    //   $(this).dequeue();
    // });

  });
});
