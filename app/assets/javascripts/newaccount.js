
// $(function() {
//   $(".pc-header-nav-ro").on('click', function(e){
//     e.preventDefault();
//     console.log(this)
//     $("#wrapper1").css('display', 'block');
//   });
// });



$(function() {
  $(".btn-mail, .btn-sns-google, .btn-sns-facebook").on('click', function(e){
    e.preventDefault();
    $("#wrapper1,#wrapper3,#wrapper4,#wrapper5,#wrapper6").css('display', 'none');
    $("#wrapper2").css('display', 'block');
  });
});


$(function() {
  $(".btn-info").on('click', function(e){
    e.preventDefault();
    $("#wrapper1,#wrapper2,#wrapper4,#wrapper5,#wrapper6").css('display', 'none');
    $("#wrapper3").css('display', 'block');
  });
});




$(function() {
  $(".btn-sms").on('click', function(e){
    e.preventDefault();
    $("#wrapper3").css('display', 'none');
    $("#wrapper4").css('display', 'block');
  });
});

$(function() {

  $(".btn-adress").on('click', function(e){
    e.preventDefault();
    $("#wrapper4").css('display', 'none');
    $('#wrapper5').css('display', 'block');
  });
});

$(function() {

  $(".btn-credit").on('click', function(e){
    e.preventDefault();
    $("#wrapper5").css('display', 'none');
    $('#wrapper6').css('display', 'block');
  });
});
