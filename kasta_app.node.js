const http = require('http') 
const server = http.createServer((req, res) => {
  // vi kan se från webbläsaren att vi gör ett anrop
  //console.log("Request")

  //tar fram olika status codes i consolen
  //console.log(http.STATUS_CODES);

  //kan se vad vi är anropade till
  //console.log(req.url);

  // se olika metoders
  //console.log(http.METHODS);


  const statusCode = 425; // 425 är ett nummer för en statuskod, 425 heter To Early vilket betyder att vi inte rikgtigt är färdiga med våran server än
  res.writeHead(statusCode, {"content-type" : "application/plain-text"}); // sätter header på responobjektet så att vi vet det t.ex. är för tatuskod, alltså hur requesten gick. 
  res.end(`Du gjorde ett ${req.method}-anrop till ${req.url}`); // sicka iväg responset till webbläsaren genom res.end


});

 
// listen tar en port där den lyster efter inkommande requset 
//server.listen ("5000")

// tsar en calbackfunktion som kommer köras när servern har börjat lyssna. Nu säger funktionen consol.log
server.listen ("5000", () => console.log('Server running on https://localhost:5000'));














// viktigt att ha en fil som heter .gitignore när man arberat med node och nodepaket 

// git kommer då ignorera alla filer som matchar mönsteret som står i filen .gitignore
// Hela express och alla moduler för extress behöver ligger i mappen node_modules