'use strict';
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
function setData () {
  localStorage.clear;
  var data = JSON.stringify(newProductArray);//taking info from current storage
  localStorage.setItem('stored data', data);//putting into local storage
}
function getData () {
  var storedProductArray = JSON.parse(localStorage.getItem('stored data'));//getlocal data
  console.log('local array: ', storedProductArray);
  if(storedProductArray !== null) {//if there's info in local storage..
    newProductArray = storedProductArray;//set current storage of newProductArray to the locally stored array
  }
}



function createChart () {
  var ctx = document.getElementById('myChart').getContext('2d');
  var options = {
    type: 'bar',
    data: {
      labels: newProductArray.map(function(x) {return x.name;}),
      datasets: [{
        label: '# of Votes',
        data: newProductArray.map(function(x) {return x.clicked;}),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1

      },
      ]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  };
  var myChart = new Chart(ctx, options);
}
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

};

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
  if (clickCounter < maxClicks) {
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
    var div =  document.getElementById('images');
    div.innerHTML = '';
    alert('Game Over!');
    setData();
    createChart();
    var textEl = document.createElement('h1');
    var newText = document.createTextNode('Your Results:')
    var newPar = document.createElement('p')
    var newParText = document.createTextNode('Refresh the page to restart and add your results to the tally!');
    newPar.appendChild(newParText);
    textEl.appendChild(newPar);
    textEl.appendChild(newText);
    div.appendChild(textEl);


  }
}
var imgEl = document.getElementById('images');//what element is being listened to
imgEl.addEventListener ('click', onClick);//what funciton (click) is attached, onClick is the function I am defining that will be triggered upon each event
getData();
createChart ();
