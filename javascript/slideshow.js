var imageArray = ["./images/boston.jpg", "./images/computer.jpg", "./images/everglades.jpg"];
var x = document.getElementById("section1");

carousel();

function carousel() {
  var i;
  x.style.backgroundImage = "url('" + imageArray[i] + "')";
  i++;
  if (i > imageArray.length) {
    i = 0;
  } 
  setTimeout(carousel, 2000); // Change image every 2 seconds
}