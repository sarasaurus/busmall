'use strict';
//GLOBAL VARIABLES
var productName = ['bag', 'banana','chair', 'bathroom', 'boots','breakfast', 'bubblegum', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep','scissors', 'shark', 'sweep', 'sweepers', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];
var newProductArray = [];//storing place of all our new product objects
var voteCounter = [];
var maxClicks = 25;//total number of clicks allowed
var max = productName.length;//sets max range for randNum function
var min = 0;//sets min for randNum function
var clickCounter = 0;//stores number of clicks that have occured
var width = 200;//sets width of images

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
  for (var i = 0;i < 3; i++ ) {
    newProductArray[arr[i]].shown++;
  }
}

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
})();//this function creates my product iterations, using this template and they are then stored in my newProductArray


//Now build a tracker object, this will keep track of big picture info--click tallies and product votes.  This will also display images to page and handle event object functionality

var tracker = {
//what if my tracker is only for storing data? does that make sense?


//OBJECT METHODS
//displays 3 random images and stores their index number in an array
// Product.prototype.getRandomIndex = function() {
//   var arr = [];
//   while(arr.length < 3){
//     var randomnumber = randNum(min,max);
//     if(arr.indexOf(randomnumber) > -1) continue;
//     arr[arr.length] = randomnumber;
//   }
//   document.write(arr);
// },

///EVENT OBJECT
//when imgs are clicked:
//add one to the specific obj's click tally
//add one to the global click tally
//add one to all 3 obj's shown tally
//finally refresh all 3 images
};
//LOL i am using this, but will now try to put inside my tracker object
printThreeImages();
function changeImages () {
  var divOne =  document.getElementById('imageOne');
  var divTwo = document.getElementById('imageTwo');
  var divThree = document.getElementById('imageThree');
  divOne.innerHTML = '';
  divTwo.innerHTML = '';
  divThree.innerHTML = '';
}


function onClick (event) {
  event.preventDefault();//no need for prevent default in this case, because click is on image, doesn't hurt to do
  console.log(event.target);//logs which image was clicked on
  //adds a tally to my global click counter
  if (clickCounter < 25) {


    changeImages();
    printThreeImages();
    clickCounter ++;
    console.log('clicks: ', clickCounter);
    var clickedImageNameArray = event.target.src.split('/');
    console.log('Clicked Name Array: ', clickedImageNameArray);

    var clickedImagePath = clickedImageNameArray.slice(10);
    console.log('clicked image path: ', clickedImagePath);

    var clickedImagePathSplit = clickedImagePath[0].split('.');
    console.log('clicked image split', clickedImagePathSplit);

    var clickedImageName = clickedImagePathSplit.slice(0)[0];
    console.log('clicked name bb!: ', clickedImageName);
    voteCounter.push(clickedImageName);

    for (var i in newProductArray) {
      if(clickedImageName === newProductArray[i].name) {
        newProductArray[i].clicked++;
      }
    }
  } else {

    console.log('YOU DONE WITH CLICKING NOW')

    alert('Game Over');
    var div =  document.getElementById('images');
    div.innerHTML = '';

    //NOT WORKING :(
    // var divResults = document.getElementById('results');
    // var ulEl = document.createElement('ul');
    // divResults.appendChild(ulEl);
    //
    // for (var j = 0; j < productName.length; j++) {
    //   var liEl = ulEl.createElement('li');
    //   liEl.textContent = newProductArray[j].name;
    //   ulEl.appendChild(liEl);
    // }
  }
}

var imgEl = document.getElementById('images');//what element is being listened to
imgEl.addEventListener ('click', onClick);//what funciton (click) is attached, onClick is the function I am defining that will be triggered upon each event
