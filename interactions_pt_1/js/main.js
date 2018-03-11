$('#dropdownMenu').hide();

$('#openDropdown').on('click', function () {
  $('#dropdownMenu').slideToggle(300);
});

$('#answer2').hide();

$('#question2').on('click', function () {
  $('#answer2').slideDown(300);
  $('#answer1').slideUp(300);
  $('li').removeClass('active');
  $('#question2').addClass('active');
});

$('#question1').on('click', function () {
  $('#answer1').slideDown(300);
  $('#answer2').slideUp(300);
  $('li').removeClass('active');
  $('#question1').addClass('active');
});

$('#showYellowCircles').on('click', function () {
  $('.blue').hide();
  $('.yellow').fadeIn(300);
});

$('#showBlueCircles').on('click', function () {
  $('.yellow').hide();
  $('.blue').fadeIn(300);
});
