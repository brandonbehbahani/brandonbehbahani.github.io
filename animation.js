var animate = function() {
     var header  = document.getElementById("header"); 

    var init = function () {
        _addEventHandlers();

    }

    var _addEventHandlers = function() {
        window.addEventListener("scroll", _animateHeader);
    }

    var _animateHeader = function () {
        var scroll = header.scrollTop;
        console.log(scroll);
        header.style.transform = "translateY(" + scroll + "px);";

    }


    return {
        init: init
      }


}

animate().init();