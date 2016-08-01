var myHeading = document.querySelector('h1');
myHeading.textContent = "Hello World!";

var myImage = document.querySelector('img');

myImage.onclick = function(){
	var mySrc = myImage.getAttribute('src');

	if(mySrc === 'images/Sezer.jpg'){
		myImage.setAttribute('src', 'images/Cat.jpg');
	}
	else{
		myImage.setAttribute('src', 'images/Sezer.jpg');
	}

}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Welcome On Board, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'This cool guy is: ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}