$(function(){
  $('#change-color').on('click',()=>{
    $('#change-color').css('border','2px solid blue');
    $('#change-text').css('border','');
    $('#fade-out').css('border','');
    $('#fade-in').css('border','');
    $('#target').css('color','red');
  });

  $('#change-text').on('click',()=>{
    $('#change-text').css('border','2px solid blue');
    $('#change-color').css('border','');
    $('#fade-out').css('border','');
    $('#fade-in').css('border','');
    $('#target').text('Hello!');
  });

  $('#fade-out').on('click',()=>{
    $('#fade-out').css('border','2px solid blue');
    $('#change-color').css('border','');
    $('#change-text').css('border','');
    $('#fade-in').css('border','');
    $('#target').fadeOut('1000m');
  });

  $('#fade-in').on('click',()=>{
    $('#fade-in').css('border','2px solid blue');
    $('#change-color').css('border','');
    $('#change-text').css('border','');
    $('#fade-out').css('border','');
    $('#target').fadeIn('1000m');
  });

});