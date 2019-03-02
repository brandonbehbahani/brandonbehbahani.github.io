


function displayMobileMenu(){
  console.log("mobile menu");
  var x = document.getElementById("navigation");
    if (x.className === "navigation") {
        x.className = "mobileMenu";
    } else {
        x.className = "navigation";
    }
}

$(document).click(function(){
  $("#navigation").hide();
});
