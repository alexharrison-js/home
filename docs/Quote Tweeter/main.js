var quotes = new Array (
  ['"When I die, I want to go peacefully like my grandfather did–in his sleep. Not yelling and screaming like the passengers in his car."', '~Bob Monkhouse'],
  ['I have six locks on my door all in a row. When I go out, I lock every other one. I figure no matter how long somebody stands there picking the locks, they are always locking three.', '~Elayne Boosler'], 
  ['Always borrow money from a pessimist. He won’t expect it back.', '~Oscar Wilde'], 
  ['The scientific theory I like best is that the rings of Saturn are composed entirely of lost airline luggage.', '~Mark Russell'], 
  ['Friendship is like peeing on yourself: everyone can see it, but only you get the warm feeling that it brings.', '~Robert Bloch'],
  ['First the doctor told me the good news: I was going to have a disease named after me.', '~Steve Martin'],
  ['Freedom is not given to us by anyone; we have to cultivate it ourselves. It is a daily practice... No one can prevent you from being aware of each step you take or each breath in and breath out.', '~Thich Nhat Hanh'],
  ['People have a hard time letting go of their suffering. Out of a fear of the unknown, they prefer suffering that is familiar.', '~Thich Nhat Hanh'],
  ['Enlightenment is always there. Small enlightenment will bring great enlightenment. If you breathe in and are aware that you are alive—that you can touch the miracle of being alive—then that is a kind of enlightenment.', '~Thich Nhat Hanh'],
  ["Do not fear mistakes. There are none. Don't play what's there, play what's not there.", '~Miles Davis'],
  ["Everything we do is for the purpose of altering consciousness. We form friendships so that we can feel certain emotions, like love, and avoid others, like loneliness. We eat specific foods to enjoy their fleeting presence on our tongues. We read for the pleasure of thinking another person's thoughts.", "~Sam Harris"],
  ["When you look in the mirror, what do you see? Do you see the real you, or what you have been conditioned to believe is you? The two are so, so different. One is an infinite consciousness capable of being and creating whatever it chooses, the other is an illusion imprisoned by its own perceived and programmed limitations.", "~David Icke"],
  ["I think the idea is now for blacks to write about the history of our music. It's time for that, because whites have been doing it all the time. It's time for us to do it ourselves and tell it like it is.", "~Dizzy Gillespie" ],
  ["One of the reasons we're here is to be a part of this process of exchange.", "~Dizzy Gillespie"],
  ["Jazz shouldn't have any mandates. Jazz is not supposed to be something that's required to sound like jazz. For me, the word 'jazz' means, 'I dare you.'", "~Wayne Shorter"],
  ["Go out on the stage as a human being and do not be afraid to show struggle in your music. It's a struggle in life and then struggle and then victory.", "~Wayne Shorter"],
  ["One positive thought produces millions of positive vibrations.", "~John Coltrane"],
  ["I want to be a force for real good. In other words, I know there are bad forces. You know, I know that there are forces out here that bring suffering to others and misery to the world, but I want to be the opposite force. I want to be the force which is truly for good.", "~John Coltrane"],
  ["The real risk is not changing. I have to feel that I'm after something. If I make money, fine. But I'd rather be striving. It's the striving, man, it's that I want.", "~John Coltrane"]
);


$('#quotebtn').on("click", function(){
  
  var selection = (Math.floor(Math.random() * (quotes.length) + 1))      
  newQuote = quotes[selection][0]
  newAuthor = quotes[selection][1]
  
  $('#quote').html(newQuote);
  $('#author').html(newAuthor);
});

var colorOptions = new Array (["#a4e246"], ["#46e2c2"], ["#46e2df"], ["#f2904f"], ["#fcdb23"], ["#3ba3ed"], ["#9d8af2"], ["#b667ef"], ["#ed80e5"], ["#f97092"], ["#aa7c4b"], ["#afaca8"], ["#efe5d7"]) 

$('#shared').on("click", function(){
  window.open('https://twitter.com/intent/tweet?text=' + "'" +newQuote+"'" + newAuthor);
});



$('#quotebtn').on("click", function(){
  
  var colorSelection = (Math.floor(Math.random() * (colorOptions.length) + 1))
  var newColor = colorOptions[colorSelection]
  $("body").css("background-color", newColor);
  $("#quotebtn").css("color", newColor);
  $("#shared").css("color", newColor);
  $("#quote").css("color", newColor);
  $("#author").css("color", newColor);
});

var next = document.getElementById("#quotebtn");
document.onkeydown = function(e) {
  if (e.keyCode == 32) {
    "#quotebtn".click();
  }
};
