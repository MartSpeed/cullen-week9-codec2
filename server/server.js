const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 5000;

// use bodyParser.urlencoded throughout the app with this:
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

let _jokes = [
  {
    whoseJoke: 'Danny',
    jokeQuestion: 'Why do scuba divers fall backwards out of boats?',
    punchLine: 'If they fell forwards they’d still be in the boat!',
  },
  {
    whoseJoke: 'Luke',
    jokeQuestion: 'Two fish are in a tank. What did one fish say to the other?',
    punchLine: 'Do you know how to drive this thing?',
  },
  {
    whoseJoke: 'Millie',
    jokeQuestion: 'What do you call a pile of cats?',
    punchLine: 'A meowntain!',
  },
  {
    whoseJoke: 'dEv',
    jokeQuestion: 'Why should you not play cards in the forest?',
    punchLine: 'Too many Cheetahs!',
  },
  {
    whoseJoke: 'Scott',
    jokeQuestion: 'I went to the zoo the other day, it had one dog...',
    punchLine: 'It was a shih tzu.',
  },
];

// serve back static files
app.use(express.static('server/public'));

app.listen(PORT, () => {
  console.log('server running on: ', PORT);
}); // end spin up server

// GET INCANTATION
// the response to the server request will be the array variable set to _jokes
app.get('/allJokes', function (request, response) {
  //console.log('allJokes GET test');
  console.log('this is the server get jokes', _jokes);
  response.send(_jokes);
});

// POST INCANTATION
// from the client input and sending it to the server
app.post('/allJokes', function (request, response) {
  console.log('allJokes POST', request.body);
  _jokes.push(request.body);
  // using a sendStatus(200) this will send us back an OK response in the terminal
  response.sendStatus(200);
});
