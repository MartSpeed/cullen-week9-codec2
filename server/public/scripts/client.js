console.log('client.js sourced');
// console test boolean for simple checks
let spiderMan = true;

$(document).ready(onReady);

function onReady() {
  console.log('DOM ready');

  // click event for #addJokeButton
  $('#addJokeButton').on('click', submitJoke);
}

let jokeInputArray = [];

/**
 * NAME: insertJoke() function
 * DESCRIPTION: using the #addJokeButton button id as a click event
 * [x] when this button is clicked, do something
 * [ ] this event will push the jokes into an empty array
 * [ ] the empty array will append the information to the DOM
 */
function submitJoke() {
  console.log(`insertJoke has been clicked ${spiderMan}`);

  // set jQuery values to variables
  let whoseJokeInput = $('#whoseJokeIn').val();
  let questionInput = $('#questionIn').val();
  let punchLineInput = $('#punchlineIn').val();
  getJokes();
}
// function to get the jokes from the database and display them on the DOM
function getJokes() {
  // GET INCANTATION

  // set the append.() method to a variable
  // append the destination to the DOM
  // $('#outputDiv').append(`<li>
  // ${whoseJokeInput} ${questionInput} ${punchLineInput}
  // </li>`);

  $.ajax({
    url: '/allJokes',
    method: 'GET',
  }).then(function (response) {
    // this is the joke response
    console.log('submitJoke response', response);

    for (let joke of response) {
      $('#outputDiv').append(`
      <li>
      ${joke.whoseJoke} ${joke.jokeQuestion} ${joke.punchLine}
      </li>`);
    }
  });
}

/**
 * NAME: save joke input
 * DESCRIPTION: save
 */
