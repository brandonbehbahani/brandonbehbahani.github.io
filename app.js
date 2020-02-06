var toggle = true;


var image1 = new Image();
image1.src = 'https://upload.wikimedia.org/wikipedia/commons/9/9e/Milky_Way_IR_Spitzer.jpg';

var image2 = new Image();
image3.src = 'https://images.pexels.com/photos/86695/sky-clouds-outdoors-scenic-86695.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260';

function darkLightToggle() {
    if (toggle === true) {
      document.getElementById("content").classList.add("dark-mode");
      document.getElementById("content").classList.remove("light-mode");
      document.getElementById("wrapper").style.backgroundImage = "url('https://upload.wikimedia.org/wikipedia/commons/9/9e/Milky_Way_IR_Spitzer.jpg')"
      toggle = false;
  } else {
      document.getElementById("content").classList.remove("dark-mode");
      document.getElementById("content").classList.add("light-mode");

      document.getElementById("wrapper").style.backgroundImage = "url('https://images.pexels.com/photos/86695/sky-clouds-outdoors-scenic-86695.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260')"
      toggle = true;
  }
}
