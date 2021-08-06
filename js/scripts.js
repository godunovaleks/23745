"use strict";
"use strict";
"use strict";

$('.form').submit(function (e) {
  e.preventDefault();
  var email = $(this).children('.email').val();
  var name = $(this).children('.name').val();
  var nameValidate = /^[a-zA-Zа-яА-ЯёЁ0-9'][a-zA-Z-а-яА-ЯёЁ0-9' ]+[a-zA-Zа-яА-ЯёЁ0-9']?$/;
  var emailValidate = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;

  if (nameValidate.test(name) && emailValidate.test(email)) {
    $('.error').remove();
    $('.form__input').val('');
    document.location.href = "pay?name=" + name + "&email=" + email;
  } else {
    e.preventDefault();
    $('.error').text('Укажите корректный email или name');
  }
});
"use strict";
"use strict";
"use strict";

$('.js-burger').on('click', function () {
  $('.js-burger').toggleClass('active');

  if ($('.menu__list').hasClass('active')) {
    $('.menu__list').animate({
      width: 0
    }).removeClass('active');
  } else {
    $('.menu__list').addClass('active').animate({
      width: 240 + "px"
    });
  }
});
$('a[href^="#"]').click(function () {
  var elementClick = $(this).attr("href");
  var destination = $(elementClick).offset().top - 60;
  jQuery("html:not(:animated), body:not(:animated)").animate({
    scrollTop: destination
  }, 800);
  return false;
});
"use strict";
"use strict";
"use strict";
"use strict";

$(document).ready(function () {
  var time = 900;
  var intr;

  function start_timer() {
    intr = setInterval(tick, 1000);
  }

  function tick() {
    time = time - 1;
    var mins = Math.floor(time / 60);
    var secs = time - mins * 60;

    if (mins == 0 && secs == 0) {
      clearInterval(intr);
    }

    secs = secs >= 10 ? secs : "0" + secs;
    $(".minutes").html(mins >= 10 ? mins : "0" + mins);
    $(".seconds").html(secs);
  }

  start_timer();
});
"use strict";
"use strict";
"use strict";
"use strict";