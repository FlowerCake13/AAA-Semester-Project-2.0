var myIndex = 0;
carousel();

function carousel() {
	var i;
	var x = document.getElementsByClassName("slides");
	//console.log(x)
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";  
	}
	myIndex++;
	if (myIndex > x.length) {
		myIndex = 1
	}
	//console.log(x[myIndex-1])
	x[myIndex-1].style.display = "block"; 
	setTimeout(carousel, 2000);
}