import React, {Component} from React;
import ReactDOM from ReactDOM;

var colorOptions = ["#a4e246", "#46e2c2", "#46e2df", "#f2904f", "#fcdb23", "#3ba3ed", "#9d8af2", "#b667ef", "#ed80e5", "#f97092", "#aa7c4b", "#afaca8", "#efe5d7"];
const quotes = [
              {quote:'"When I die, I want to go peacefully like my grandfather did–in his sleep. Not yelling and screaming like the passengers in his car."', author:'~Bob Monkhouse'},
              {quote:'I have six locks on my door all in a row. When I go out, I lock every other one. I figure no matter how long somebody stands there picking the locks, they are always locking three.', author:'~Elayne Boosler'},
              {quote:'Always borrow money from a pessimist. He won’t expect it back.',author:'~Oscar Wilde'},
              {quote:'The scientific theory I like best is that the rings of Saturn are composed entirely of lost airline luggage.', author:'~Mark Russell'},
              {quote:'Friendship is like peeing on yourself: everyone can see it, but only you get the warm feeling that it brings.', author:'~Robert Bloch'},
              {quote:'First the doctor told me the good news: I was going to have a disease named after me.', author:'~Steve Martin'},
              {quote:'Freedom is not given to us by anyone; we have to cultivate it ourselves. It is a daily practice... No one can prevent you from being aware of each step you take or each breath in and breath out.', author:'~Thich Nhat Hanh'},
              {quote:'People have a hard time letting go of their suffering. Out of a fear of the unknown, they prefer suffering that is familiar.', author:'~Thich Nhat Hanh'},
              {quote:'Enlightenment is always there. Small enlightenment will bring great enlightenment. If you breathe in and are aware that you are alive—that you can touch the miracle of being alive—then that is a kind of enlightenment.', author:'~Thich Nhat Hanh'},
              {quote:"Do not fear mistakes. There are none. Don't play what's there, play what's not there.", author:'~Miles Davis'},
              {quote:"Everything we do is for the purpose of altering consciousness. We form friendships so that we can feel certain emotions, like love, and avoid others, like loneliness. We eat specific foods to enjoy their fleeting presence on our tongues. We read for the pleasure of thinking another person's thoughts.", author:"~Sam Harris"},
              {quote:"When you look in the mirror, what do you see? Do you see the real you, or what you have been conditioned to believe is you? The two are so, so different. One is an infinite consciousness capable of being and creating whatever it chooses, the other is an illusion imprisoned by its own perceived and programmed limitations.", author:"~David Icke"},
              {quote:"I think the idea is now for blacks to write about the history of our music. It's time for that, because whites have been doing it all the time. It's time for us to do it ourselves and tell it like it is.",author:"~Dizzy Gillespie"},
              {quote:"One of the reasons we're here is to be a part of this process of exchange.",author:"~Dizzy Gillespie"},
              {quote:"Jazz shouldn't have any mandates. Jazz is not supposed to be something that's required to sound like jazz. For me, the word 'jazz' means, 'I dare you.'",author:"~Wayne Shorter"},
              {quote:"Go out on the stage as a human being and do not be afraid to show struggle in your music. It's a struggle in life and then struggle and then victory.",author:"~Wayne Shorter"},
              {quote:"One positive thought produces millions of positive vibrations.", author:"~John Coltrane"},
              {quote:"I want to be a force for real good. In other words, I know there are bad forces. You know, I know that there are forces out here that bring suffering to others and misery to the world, but I want to be the opposite force. I want to be the force which is truly for good.",author:"~John Coltrane"},
              {quote:"The real risk is not changing. I have to feel that I'm after something. If I make money, fine. But I'd rather be striving. It's the striving, man, it's that I want.",author:"~John Coltrane"}
              ]
var defaultStyle = {
  background-color: #fcdb23,
  z-index: 5,
  border-radius:30px,
  font-size: 18pt,
  font-family: "'Kalam', cursive",
  position: relative,
  margin:15% 20% 10% 20%,
  padding: 5% 5% 5% 5%,
  display:table,
  opacity:0.9, 
  background-color: white,
};

class QuoteBox extends Component {
  
//      --      START QuoteBox Class Definition     --      //
  state = {
    text:quotes[0].quote,
    author:quotes[0].author,
  };

randomize (feed) {
  var randNum = Math.floor(Math.random() * Math.floor(feed.length) +1);
  var selection = (Math.floor(Math.random() * (feed.length) + 1))//storing as a   var so that it won't be a new random pull, but a relatively stable one
    this.setState({
      this.state.text: feed[selection].quote,
      this.state.author: feed[selection].author,
      this
    })
    newQuote = feed[selection].quote;
    newAuthor = feed[selection].author;
  //redo this later with a more sophistocated and efficient version of this
    var colorSelection = (Math.floor(Math.random() * (colorOptions.length) + 1))
    var newColor = colorOptions[colorSelection]
    $("body").css("background-color", newColor);
    $("#quotebtn").css("color", newColor);
    $("#shared").css("color", newColor);
    $("#quote").css("color", newColor);
    $("#author").css("color", newColor);
    };//closing bracket for method: randomize(feed) - gen new stuff
  componentDidMount(){this.setState({background-color:})}
render(){
  return(
    <div style={{defaultStyle}}className="quote-box" id="text">
      <div> 
        { QuoteBox.state.text }
        { QuoteBox.state.author}
      </div> 
    </div>
  );
  };
}     //      --      END QuoteBox Class Definition     --      //



      //      --      START TweetButton Class Definition      --      //
const TweetButton extends React Component {
  state= { name: "Tweet Button", };
  methods,
    methods,
render() {
    return (
    )
  }
}
      //      --      END TweetButton Class Definition      --      //
  //check what the className should be - either use Semantic or Not
  

ReactDOM.render(
  <QuoteBox />, 
  document.getElementById('quote-box')
);

