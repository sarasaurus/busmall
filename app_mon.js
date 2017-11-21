'use strict';
//GLOBAL VARIABLES
var productName = ['bag', 'banana','chair', 'bathroom', 'boots','breakfast', 'bubblegum', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep','scissors', 'shark', 'sweep', 'sweepers', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];

var newProductArray = [];//storing place of all our new product objects
var maxClicks = 25;//total number of clicks allowed
var max = productName.length;//sets max range for randNum function
var min = 0;//sets min for randNum function
var clickCounter = 0;//stores number of clicks that have occured
var width = 200;//sets width of images
var div = document.getElementById('images');//so can wipe out images?

//GlOBAL functions__________________________________________
//print images
function printThreeImages () {
  var arr = [];
  while(arr.length < 3){
    var randomnumber = randNum(min,max);
    if(arr.indexOf(randomnumber) >= 0) continue;
    arr[arr.length] = randomnumber;
  }
  console.log('arr', arr);
  imageEl (productName[arr[0]], width, 'imageOne');
  imageEl (productName[arr[1]], width, 'imageTwo');
  imageEl (productName[arr[2]], width, 'imageThree');
}
//adding img tag to doc
// var myImage = new Image(100, 200);
// myImage.src = 'picture.jpg';
// document.body.appendChild(myImage);

function imageEl (imgname, width, id) {
  var getEl = document.getElementById(id);//where in doc img will be created
  var imgpath = new Image (width);
  imgpath.src = 'img/' + imgname + '.jpg';//compiling the file path
  getEl.appendChild(imgpath);//adding the new img path to doc
}

//getting the random place in the product Array
function randNum (min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}



//OBJECT CONSTRUCTOR_______________________________________
function Product (name, path) {
  this.name = name;//will take in argument "name" and store here
  this.path = 'img/' + path;
  this.shown = 0;//counts number of times this object was displayed
  this.clicked = 0;//counts number of times this object was clicked on
  newProductArray.push(this);
}
//writing anonymous function: defining and executing a function where I want this to happen on page load and run, but never again, wrapping in funciton also protects the global variable space
(function() {
  for(var i in productName){
    new Product(productName[i]);
  }
})();


//Now build a tracker object, this will keep track of big picture info--click tallies and product votes.  This will also display images to page and handle event object functionality

var tracker = {
  imagesEl: document.getElementById('images'),//this is where I want to plnt img code
  resultsEl: document.getElementById('results'),//this is where I will plant result data




  // //now make a method to display the images, he uses all methods, mine is a global function...
  // img1: new Image(width),
  // img2: new Image(width),
  // img3: new Image(width),
  // displayImages: function() {
  //   imageOne.src = productName[randNum()].path;
  //   imageTwo.src = productName[randNum()].path;
  //   imageTwo.src = productName[randNum()].path;
  //
  //   //now attach all three to imagesEl
  //
  // }
};

//OBJECT METHODS
//displays 3 random images and stores their index number in an array
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


// Product.prototype.countClicks = function() {
// for (var i = 0; i < maxClicks; i++) {
//     this.tallyClicks.push (1);
//     this.tallyClicks += this.tallyClicks;
//   }
// },

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

//LOL i am using this, but will now try to put inside my tracker object
printThreeImages();
function changeImages () {
  div.innerHTML = '';
  printThreeImages();

}

function onClick (event) {
  event.preventDefault();//no need for prevent default in this case, because click is on image, doesn't hurt to do
  console.log(event.target);//logs which image was clicked on
  clickCounter ++;//adds a tally to my global click counter
  console.log('Clicks: ', clickCounter);
  // for(var i in productName) {
  //       if(event.target === newProductArray[i].name) {
  //         newProductArray[i].clicks++;
  //       }
  //for (var i in allProducts)
  changeImages();
  //could put in if /else for clicking on images, but no need with images at sme size
};

var imgEl = document.getElementById('images');//what element is being listened to
imgEl.addEventListener ('click', onClick);//what funciton (click) is attached, onClick is the function I am defining that will be triggered upon each event

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
// var createProducts = function (){
//   for (var i = 0; i < productName.length; i++) {
//     console.log('i is:', i)
//     new Product(productName[i]);
//   }
// };
// createProducts();
