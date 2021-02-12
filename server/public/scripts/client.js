console.log('client.js sourced');
// console test boolean for simple checks
let spiderMan = true;

$(document).ready(onReady);

function onReady() {
  console.log('DOM ready');

  // summon premade jokes from the joke array
  $(document).ready(getJokes);
  // click event for the addJokes button
  // called inside of the submitJokes button
  $('#addJokeButton').on('click', submitJoke);
}

/**
 * NAME: submitJoke() function
 * DESCRIPTION: using the #addJokeButton button id as a click event
 * [x] when this button is clicked, do something
 * [ ] this event will push the jokes into an empty array
 * [ ] the empty array will append the information to the DOM
 */
function submitJoke() {
  //console.log(`insertJoke has been clicked ${spiderMan}`);
  addJoke();
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
    // this will empty the joke list and only return the appended object
    $('#outputDiv').empty();
    for (let joke of response) {
      $('#outputDiv').append(`
      <li>
        ${joke.whoseJoke} ${joke.jokeQuestion} ${joke.punchLine}
      </li>
      `);
    }
  });
}

/**
 * NAME: addJoke() function
 * DESCRIPTION: save the inputs from the DOM
 * input them into the server
 * log the new inputs in the DOM
 * this function is called when a button is clicked
 * when the button is clicked
 * the information from HTML will be stored in the server
 * and reflected in the DOM
 */
function addJoke() {
  //create and object that has the information to send to the DOM
  const domJoke = {
    // set jQuery values to variables
    whoseJoke: $('#whoseJokeIn').val(),
    jokeQuestion: $('#questionIn').val(),
    punchLine: $('#punchlineIn').val(),
  };

  /**
   * add our new joke to the array in the server
   * POST INCANTATION
   * from the DOM to the server
   */
  $.ajax({
    type: 'POST',
    url: '/allJokes',
    data: domJoke,
  }).then(function (response) {
    console.log('POST response', response);
    clearJokeInputs();
    getJokes();
  });
}

/**
 * NAME: clearJokeInput()
 * DESCRIPTION: clears the joke information after it ha been
 * submitted to the DOM
 */
function clearJokeInputs() {
  $('#whoseJokeIn').val('');
  $('#questionIn').val('');
  $('#punchlineIn').val('');
}
