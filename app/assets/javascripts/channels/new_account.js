$(function() {
  $(".btn-mail, .btn-sns-google, .btn-sns-facebook").on('click', function(e){
    e.preventDefault();
    console.log(this)
    $("#wrapper1,#wrapper3,#wrapper4,#wrapper5").css('display', 'none');
  });
});


$(function() {
  $(".btn-sms").on('click', function(e){
    e.preventDefault();
    console.log(this)
    $("#wrapper2").css('display', 'none');
    $("#wrapper3").css('display', 'block');
  });
});

$(function() {

  $(".btn-adress").on('click', function(e){
    e.preventDefault();
    console.log(this);
    $("#wrapper3").css('display', 'none');
    $('#wrapper4').css('display', 'block');
  });
});

$(function() {

  $(".btn-credit").on('click', function(e){
    e.preventDefault();
    console.log(this);
    $("#wrapper4").css('display', 'none');
    $('#wrapper5').css('display', 'block');
  });
});

// $(function() {

//   $(".btn-next").on('click', function(e){
//     e.preventDefault();
//     console.log(this);
//     $("#wrapper2").css('display', 'none');
//     $('#wrapper3').css('display', 'block');
//   });
// });
