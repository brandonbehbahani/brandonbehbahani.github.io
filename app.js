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

$(document).click(function(){
  $("#navigation").hide();
});


$("#dropdown").click(function(e){
  e.stopPropagation();
});
