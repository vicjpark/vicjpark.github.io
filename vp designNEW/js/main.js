$(document).ready(function() {
  $('h2').hide().delay(2000).fadeIn(4000);
  $('#home').hide().delay(5000).fadeIn(4000);
  // I really like the effect on my home page, but is there a way I can make it so that it only happens ONE time when the user opens my site and then it never does the effect again?
});

$('.carousel-wrapper').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  centerMode: true,
  variableWidth: true
});

$('.carousel-wrapper1').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  centerMode: true,
  variableWidth: true
});

$('.carousel-wrapper2').slick({
  infinite: false,
  slidesToShow: 2,
  slidesToScroll: 1
  // For this one, I only have two things to display so I don't necessarily need a carousel, but I want it to look like the other ones. I don't think this equation works because the objects are overlaying each other some times. What's the best way to do this?
});
