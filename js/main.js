window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 450 || document.documentElement.scrollTop > 450) {
	document.getElementById("logo").style.height = "100px";
  } else {
	  var num = (550 - document.documentElement.scrollTop);
	  var n = num.toString() + "px";
	  
	document.getElementById("logo").style.height = n;
  }
}