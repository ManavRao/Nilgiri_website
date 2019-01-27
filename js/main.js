window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 850 || document.documentElement.scrollTop > 850) {
	document.getElementById("logo").style.height = "150px";
  } else {
	  var num = (1000 - document.documentElement.scrollTop);
	  var n = num.toString() + "px";
	  
	document.getElementById("logo").style.height = n;
  }
}