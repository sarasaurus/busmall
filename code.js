
//these are my global variables

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
