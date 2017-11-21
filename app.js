'use strict';
//GLOBAL VARIABLES
var productName = ['bag', 'banana','chair', 'bathroom', 'boots','breakfast', 'bubblegum', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep','scissors', 'shark', 'sweep', 'sweepers', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];
var newProductArray = [];
var maxClicks = 25;//total number of clicks allowed
var max = productName.length;//sets max range for randNum function
var min = 0;//sets min for randNum function
var clickCounter = 0;//stores number of clicks that have occured
var width = 200;//sets width of images
var div = document.getElementById('images');

//GlOBAL functions__________________________________________
//print images
function printThreeImages () {
  var arr = [];
  while(arr.length < 3){
    var randomnumber = randNum(min,max);
    if(arr.indexOf(randomnumber) > -1) continue;
    arr[arr.length] = randomnumber;
  }
  console.log('arr', arr);
  imageEl (productName[arr[0]], width);
  imageEl (productName[arr[1]], width);
  imageEl (productName[arr[2]], width);
}
//adding img tag to doc
function imageEl (imgname, width) {
  var getEl = document.getElementById('images');//where in doc img will be created
  var myImage = new Image (width);//creating the new image tag
  myImage.src = 'img/' + imgname + '.jpg';//compiling the file path
  getEl.appendChild(myImage);//adding the new img path to doc
}

//getting the random place in the product Array
function randNum (min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}



//OBJECT CONSTRUCTOR_______________________________________
function Product (name) {
  this.name = name;//will take in argument "name" and store here
  this.shown = 0;//counts number of times this object was displayed
  this.clicked = 0;//counts number of times this object was clicked on
}

//this must be for the list at the end
//var productRank = {


//OBJECT METHODS
Product.prototype.getRandomIndex = function() {
  var arr = [];
  while(arr.length < 3){
    var randomnumber = randNum(min,max);
    if(arr.indexOf(randomnumber) > -1) continue;
    arr[arr.length] = randomnumber;
  }
  document.write(arr);
},

//displays 3 images from productName Array and adds to page, may be duplicates.  I plan use Array.splice to remove the numbers that have already been shown from the productName array.


Product.prototype.countClicks = function() {
for (var i = 0; i < maxClicks; i++) {
    this.tallyClicks.push (1);
    this.tallyClicks += this.tallyClicks;
  }
},

// //to show in the sidebar list at the end
// displayResults: function() {
//   // TODO: Hmm... what's going to happen here?
// },
// //change button once the click tally threshold is reached
// showButton: function() {
//   // TODO: Hmm... what's going to happen here?
// },
//
// onClick: function() {
//   printThreeImages();
//
//   }
// },
// };



//EVENT OBJECT
//when imgs are clicked:
//add one to the specific obj's click tally
//add one to the global click tally
//add one to all 3 obj's shown tally
//finally refresh all 3 images

printThreeImages();
function changeImages () {
  div.innerHTML = '';
  printThreeImages();
}

function onClick (event) {
  event.preventDefault();
  changeImages();
}
var imgEl = document.getElementById('images');
imgEl.addEventListener ('click', onClick);

///attaching the event listener to the document




//select firstImage at random place in Array
//store random number used?
//select secondImage at random place (minus firstImages place)
//sect thirdImage at random place (minus first, minus secondImages place)

//}

//internet code I'm trying to understand:
// var img = new Array(21);
// for(var i = 0; i < 21; i++){
//   img[i] = new Image ();
//   img[i].src = 'img/' + imageName[i] + '.jpg'; }
// var myImage = new Image(100, 200);
// myImage.src = 'picture.jpg';
// document.body.appendChild(myImage);
//
// for (var i = 0; i < array.length; i++) {
// name[i].src = folder + name[i] + ending; }


//____________________________FUNCTION CALLS________________________
//Make all the objects
var createProducts = function (){
  for (var i = 0; i < productName.length; i++) {
    console.log('i is:', i)
    new Product(productName[i]);
  }
};
createProducts();
