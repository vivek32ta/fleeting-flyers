const COUNT = Math.pow(5, 3) + (Math.pow(7, 2) - 8);
$(document).ready(function () {
  $('#guess').mask('000');
})

$('#verify-button').click(function () {
  const value = $('#guess').val()
  //$('#guess').focus();
  if(value === '')
    $("#message").text('');
  else if (parseInt(value) === COUNT)
    $("#message").text('No way!!! You got it right! But did you really count?');
  else if (parseInt(value) > COUNT)
    $("#message").text("You've counted more than there are lol");
  else if (parseInt(value) < COUNT)
    $("#message").text("Too less to be enough, you've missed a few");
});
