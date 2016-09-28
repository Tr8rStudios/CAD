function readFile(URL){
  var request = new XMLHttpRequest();
  request.open("GET", URL, false);
  request.send(null);
  request.onreadystatechange = function() {
    if ( request.readyState === 4 && request.status === 200 ) {
      var my_JSON_object = request.responseText();
      return my_JSON_object;
    }
  }
}

var text = readFile("data/whiteCard.json")
var whiteCard = JSON.parse(text);
