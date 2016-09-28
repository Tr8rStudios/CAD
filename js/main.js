var whiteCards = []
var testObj = jQuery.getJSON("data/whiteCard.json", function(data){
  $.each(data,function(key,value){
    whiteCards.push(key,value);
  });
});
console.log(whiteCards)
console.log(testObj);
