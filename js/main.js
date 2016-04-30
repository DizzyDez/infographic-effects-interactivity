var $million = $('.million');
var $sevenfive = $('.sevenfive');
var $piechart = $('.piechart');
var $bubble = $('.bubble');
var $sportbysport = $('.sportbysport');
var $sixtytwo = $('.sixtytwo');
var $balls = $('.balls');

$('.prevention-bar g').on('click', function () {
  $(this).toggleClass('buttons');
});

$('.boy g').on('click', function (e) {
  $(this).toggleClass('buttons');
});

$million.waypoint(function (direction) {
  if (direction == 'down') {
    $million.addClass('js-animate');
  } else {
    $million.removeClass('js-animate');
  }
}, {offset: '50%'});

$sevenfive.waypoint(function (direction) {
  if (direction == 'down') {
    $sevenfive.addClass('js-animate');
  } else {
    $sevenfive.removeClass('js-animate');
  }
}, {offset: '50%'});

$piechart.waypoint(function (direction) {
  if (direction == 'down') {
    $piechart.addClass('js-animate');
  } else {
    $piechart.removeClass('js-animate');
  }
}, {offset: '50%'});

$sixtytwo.waypoint(function (direction) {
  if (direction == 'down') {
    $sixtytwo.addClass('js-animate');
  } else {
    $sixtytwo.removeClass('js-animate');
  }
}, {offset: '50%'});

$sportbysport.waypoint(function (direction) {
  if (direction == 'down') {
    $sportbysport.addClass('js-animate');
  } else {
    $sportbysport.removeClass('js-animate');
  }
}, {offset: '50%'});

$balls.waypoint(function (direction) {
  if (direction == 'down') {
    $balls.addClass('js-animate');
  } else {
    $balls.removeClass('js-animate');
  }
}, {offset: '50%'});
