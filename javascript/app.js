var projectIcons = document.getElementsByClassName("project-icon"); 

function displayMobileMenu(){
  console.log("mobile menu");
  var x = document.getElementById("navigation");
  var y = document.getElementById("menu-tab");
    if (x.className === "navigation") {
        x.className = "mobileMenu";
        y.src = "./images/x.png";
    } else {
        x.className = "navigation";
        y.src = "./images/menu.png";
    }
}

$(document).ready(function () {
  $(window).on('load scroll', function () {
      var scrolled = $(this).scrollTop();
      $('#title').css({
          'transform': 'translate3d(0, ' + (scrolled * 0.5) + 'px, 0)', // parallax (20% scroll rate)
          'opacity': 1 - scrolled / 500 // fade out at 400px from top
      });
      // $('#hero-vid').css('transform', 'translate3d(0, ' + -(scrolled * 0.25) + 'px, 0)'); // parallax (25% scroll rate)

    });

});

