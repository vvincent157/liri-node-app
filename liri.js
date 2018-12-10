require("dotenv").config();

var spotify = require('node-spotify-api');
var axios = require("axios");
var moment = require("moment");

var keys = require("./keys")

var userChoice = process.argv[2];
var input = process.argv[3];

// var spotify = new Spotify(keys.spotify);

// Whenever there is a condition if/else, we're using switch/case (same idea)

switch (userChoice) {
    case "concert-this":
        console.log("concert")
        var queryUrl = "https://rest.bandsintown.com/artists/"+input+"/events?app_id=20a83a675d78cd95baa4fc947ebf6e4c";
        // Then create a request with axios to the queryUrl
// ...
axios.get(queryUrl).then(
    function(response) {
      console.log(response);
    //   console.log(response.data.offers.venue);
    }
  );
         break;
    case "spotify-this-song":
    spotify
  .request('https://api.spotify.com/v1/tracks/7yCPwWs66K8Ba5lFuU2bcx')
  .then(function(data) {
    console.log(data); 
  })
  .catch(function(err) {
    console.error('Error occurred: ' + err); 
  });
        console.log("spotify")
        break;
    case "movie-this":
    console.log("Movie");
    var queryUrl = "http://www.omdbapi.com/?t=" + input + "&y=&plot=full&tomatoes=true&apikey=b012ff90";

    axios.get(queryUrl).then(
        function(response) {
        //   console.log(response);
        console.log("Title: " + response.data.Title);
        console.log("Year Released: " + response.data.Year); 
        console.log("Imdb Rating: " + response.data.imdbRating); 
        console.log("Rotten Tomatoes Rating: " + response.data.tomatoRating);
        console.log("Country: " + response.data.Country); 
        console.log("Language: " + response.data.Language); 
        console.log("Plot: " + response.data.Plot);
        console.log("Actors: " + response.data.Actors);
        
        
        })
        break;
    case "do-what-it-says":
        console.log("DO")
        break;

    default:
        console.log("Please enter something duh")
        break;
}