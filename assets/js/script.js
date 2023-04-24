const COUNT = Math.pow(5, 3) + (Math.pow(7, 2) - 8);
const HIGH_MESSAGES = [
  "Looks like you aimed for the sky, but the number you guessed just said goodbye!",
  "Sorry, your guess was too high, that number's not even in the sky!",
  "The number you guessed is out of sight, you might need a telescope for your next insight!",
  "Oh my, your guess was too high, that number's so low it might as well say bye-bye!",
  "You're reaching for the stars, but the true number's down here with the cars!",
  "You're guessing numbers like a cat trying to operate a computer - cute, but not very effective."
];
const LOW_MESSAGES = [
  "I'm starting to think you and the number you're guessing are in a long-distance relationship because you're nowhere close.",
  "Your guess is so low, it's making earthworms dizzy!",
  "Your guess is so low, it's making ants feel tall!",
  "Your guess is so low, it's setting off buried treasure detectors!",
  "Your guess is so low, it's got more depth than a kiddie pool!",
  "Your guess is so far off, it's closer to the center of the earth than the surface!"
]

$(document).ready(function () {
  $('#guess').mask('000');
})

$('#verify-button').click(function () {
  const value = $('#guess').val()
  //$('#guess').focus();
  if(value === '')
    $("#message").text('');
  else if (parseInt(value) === COUNT)
    $("#message").text('No way!!! You got it right! But did you really count or just guessed your way through?');
  else if (parseInt(value) > COUNT)
    $("#message").text(HIGH_MESSAGES[Math.floor(Math.random()*HIGH_MESSAGES.length)]);
  else if (parseInt(value) < COUNT)
    $("#message").text(LOW_MESSAGES[Math.floor(Math.random()*LOW_MESSAGES.length)]);
});
