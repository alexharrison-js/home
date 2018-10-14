window.Seed = (function () {
  function generateVoteCount() {
    return Math.floor((Math.random() * 50) + 15);
  }

var infoArray = [];
var itemsArray = [];
var input = "apple";//need to assign this to what is searched in the search box by the user
const localURL = "https://en.wikipedia.org/w/api.php?format=json&origin=*&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=" + input + "&callback=?";
console.log("localURL is : " + localURL);
// HttpRequest() is what should be used in the acual app
// XDomainRequest() will be for local hosting
function apiCall(url){
  return Promise.resolve(url);
}
function getAPI(website){
    return new Promise(function(){$.getJSON(website, function(res){
      var items = res.query.pages;//works
      var reformatted = JSON.stringify(items);
//      var fixed = reformatted.substring(1, reformatted.length-1);
//      console.log("here is fixed " + fixed);
//      var rejoined = JSON.parse(fixed);
      infoArray.pop(reformatted);
      console.log("Here is the info Array: " + infoArray);
      for (var i=0; i < infoArray.length-1; i++){
          console.log("This item # " + i + " : " + infoArray[i]);
        }
      /*infoArray.forEach(function(arrayItem){
        console.log("Array Item from infoArray: " + arrayItem ) 
      })*/
      /* 
      for (let i=0; i < infoArray.length-1; i++){
          console.log("This item # " + i + " : " + infoArray[i]);
        }
      */
        /*
      for (var i = 0; i < items.length; i++){
        var arrayItem = items[i];
        console.log("another array item: " + arrayItem[i]);
        infoArray.push(arrayItem[i]);
      }*/
      var results = JSON.stringify(res);//works
     //gotta map through the object in the json
      console.log("here is the first and last items " + infoArray[0] + " and " + infoArray[1]);
      //still undefined even though I call JSON.stringify() on them both...

      /*
      var jsonData = JSON.parse(myMessage);
for (var i = 0; i < jsonData.counters.length; i++) {
    var counter = jsonData.counters[i];
    console.log(counter.counter_name);
}
*/

      //console.log("here is the results: " +results);//works
      //console.log("here are the items: " + fixed);//works
      //console.log("here is the infoArray: " + infoArray);     //  --  testing here
      //Now have to cut up the list of objects that are returned as items and add them to an array
      //every new object after should be added to the array so that they can later be split up and used to render separately

      return Promise.resolve(res);
    })})
  };

function handleResponse(res){
  //console.log("Apiresponse after .then is: " + res); -- working
  return Promise.resolve(res)
} //  gotta make sure that you handle the response and cut it up into objects and append them or concat to the new array infoArray




apiCall(localURL)
.then(getAPI(localURL))
.then((res)=>(handleResponse(res)))
.then((res)=>{
  //console.log("2 - API Response after 2nd .then is: " + res); -- working
  apiCall(res);
})
.catch((err)=>{
  console.log('The error is '+ err);
})



const products = [
    //keep this as objects in a list, but dynamically and asyncronously assign the values MAKING SURE that nothing is skipped 
    {
      id: 1,
      title: 'Banana',
      description: 'The banana is an edible fruit – botanically a berry – produced by several kinds of large herbaceous flowering plants in the genus Musa.',
      url: '#',
      votes: generateVoteCount(),
      submitterAvatarUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Bananavarieties.jpg/50px-Bananavarieties.jpg',
      productImageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Bananavarieties.jpg/50px-Bananavarieties.jpg',
    },
    {
      id: 2,
      title: 'Cooking banana',
      description: 'Cooking bananas are banana cultivars in the genus Musa whose fruits are generally used in cooking.',
      url: '#',
      votes: generateVoteCount(),
      submitterAvatarUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Plantains.jpg/37px-Plantains.jpg',
      productImageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Plantains.jpg/37px-Plantains.jpg',
    },
    {
      id: 3,
      title: 'Banana Yoshimoto',
      description: 'Banana Yoshimoto (吉本 ばなな, Yoshimoto Banana) (born 24 July 1964) is the pen name of Japanese writer Mahoko Yoshimoto (吉本 真秀子, Yoshimoto Mahoko).',
      url: '#',
      votes: generateVoteCount(),
      submitterAvatarUrl: '',
      productImageUrl: '',
    },
    {
      id: 4,
      title: 'Banana bread',
      description: 'Banana bread is a type of bread made from mashed bananas.',
      url: '#',
      votes: generateVoteCount(),
      submitterAvatarUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Banana_bread_078.jpg/33px-Banana_bread_078.jpg',
      productImageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Banana_bread_078.jpg/33px-Banana_bread_078.jpg',
    },
    {
      id: 5,
      title: 'Cavendish banana',
      description: 'High-minded or absent-minded? You decide.',
      url: '#',
      votes: generateVoteCount(),
      submitterAvatarUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Cavendish_Banana_DS.jpg/50px-Cavendish_Banana_DS.jpg',
      productImageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Cavendish_Banana_DS.jpg/50px-Cavendish_Banana_DS.jpg',
    },
    {
      id: 6,
      title: 'Banana massacre',
      description: 'The Banana massacre (Spanish: Matanza de las bananeras or Spanish: Masacre de las bananeras) was a massacre of workers for the United Fruit Company that occurred between December 5 and 6, 1928 in the town of Ciénaga near Santa Marta, Colombia.',
      url: '#',
      votes: generateVoteCount(),
      submitterAvatarUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Workerbananamassacred.png/50px-Workerbananamassacred.png',
      productImageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Workerbananamassacred.png/50px-Workerbananamassacred.png',
    },
    {
      id: 7,
      title: 'Blue Banana',
      description: 'The Blue Banana (French: banane bleue, also known as the European Megalopolis or the Manchester–Milan Axis) is a discontinuous corridor of urbanisation spreading over Western and Central Europe, with a population of around 111 million.',
      url: '#',
      votes: generateVoteCount(),
      submitterAvatarUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Blue_Banana.svg/50px-Blue_Banana.svg.png',
      productImageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Blue_Banana.svg/50px-Blue_Banana.svg.png',
    },
    {
      id: 8,
      title: 'Banana republic',
      description: 'In political science, the term banana republic describes a politically unstable country with an economy dependent upon the exportation of a limited-resource product, e.g.',
      url: '#',
      votes: generateVoteCount(),
      submitterAvatarUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/William_Sydney_Porter_by_doubleday.jpg/44px-William_Sydney_Porter_by_doubleday.jpg',
      productImageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/William_Sydney_Porter_by_doubleday.jpg/44px-William_Sydney_Porter_by_doubleday.jpg',
    },
    {
      id: 9,
      title: 'Red banana',
      description: 'Red bananas are a group of varieties of banana with reddish-purple skin.',
      url: '#',
      votes: generateVoteCount(),
      submitterAvatarUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Red_banana_in_Tanzania_0196_Nevit.jpg/37px-Red_banana_in_Tanzania_0196_Nevit.jpg',
      productImageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Red_banana_in_Tanzania_0196_Nevit.jpg/37px-Red_banana_in_Tanzania_0196_Nevit.jpg',
    },
    {
      id: 10,
      title: 'Banana Pi',
      description: 'The Banana Pi is a series of credit card-sized single-board computers based on a low-cost concept for inner software and hardware development and school software learning such as Scratch.',
      url: '#',
      votes: generateVoteCount(),
      submitterAvatarUrl: '',
      productImageUrl: '',
    },
  ];
  //console.log('products: ' + JSON.stringify(products));
  return { products: products };
 // return { data: data };
}());

window.onbeforeunload = function() {
  localStorage.clear();
  return '';
};