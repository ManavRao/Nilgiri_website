window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 850 || document.documentElement.scrollTop > 850) {
	document.getElementById("logo").style.height = "150px";
	// document.getElementById("div1").style.top = "0px";
	// document.getElementById("div1").position="fixed";
	// document.getElementById("div1").style.top = Math.max(0,600 - document.body.scrollTop).toString()+"px"
  } else {
	  var num = (1000 - document.documentElement.scrollTop);
	  var n = num.toString() + "px";
	  
	document.getElementById("logo").style.height = n;
	// document.getElementById("div1").style.top = 0;
	// document.getElementById("div1").position="relative";
	// document.getElementById("div1").style.top = Math.max(0,600 - document.body.scrollTop).toString()+"px";
  }
}