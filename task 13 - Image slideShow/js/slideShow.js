'use strict';
~function() {
    
	var slideArray = [
		["img/01.jpg","img 1 frog"],
		["img/02.jpg","img 2 Crock"],
		["img/03.jpg","img 3 rabit"],
		["img/04.jpg","img 4 Farm"],
		["img/05.jpg","img 5 fly"],
		["img/06.jpg","img 6 duck"],
		["img/07.jpg","img 7 hen"],
		["img/08.jpg","img 8 bear"],
		["img/09.jpg","img 9 bull"],
		["img/10.jpg","img 10 sheep"]
	],
	slideHandler = document.getElementById("slides"),
	nextBtn = document.getElementById("nextBtn"),	
	previousbtn = document.getElementById("previousbtn"),	
	resumebtn = document.getElementById("resumebtn"),	
	slideInterval = 2000,
	myInterval,
	slideSelector, 
	activeSlide = 0;


	createSlides();
	nextBtn.addEventListener("click", nextSlide);
	previousbtn.addEventListener("click", previousSlide);
	resumebtn.addEventListener("click", resumeSlideShow);

	function createSlides(){
		
		for(var i = 0; i<=slideArray.length - 1; i++){
			//console.log(slideArray[i][0]);
			var list = document.createElement("li"),
				img = document.createElement("img"),
				description = document.createElement("h1"),
				descriptionText = document.createTextNode(slideArray[i][1]);

			list.setAttribute("class","slide");
			img.setAttribute("src",slideArray[i][0]);

			description.appendChild(descriptionText);
			list.appendChild(img);
			list.appendChild(description);

			slideHandler.appendChild(list);
		}
		slideSelector = document.querySelectorAll("#slides .slide");
		myInterval = setInterval(playSlideShow, slideInterval);

	}

	function playSlideShow(){
		//console.log(activeSlide);
		slideSelector[activeSlide].className = "slide";
		//console.log("mod : "+ (activeSlide+1) % slideSelector.length);
		activeSlide = (activeSlide+1) % slideSelector.length;
		slideSelector[activeSlide].className = "slide active";
	}

	function nextSlide(){
		//console.log("next");
		clearInterval(myInterval);
		slideSelector[activeSlide].className = "slide";
		activeSlide = (activeSlide+1) % slideSelector.length;
		//console.log(activeSlide);
		slideSelector[activeSlide].className = "slide active";
		resumebtn.style.display = "inline-block";
		
	}
	function previousSlide(){
		//console.log("previous");
		clearInterval(myInterval);
		slideSelector[activeSlide].className = "slide";
		if(activeSlide==0)
		 {	activeSlide = slideSelector.length; }
		
		activeSlide = (activeSlide-1) % slideSelector.length;

		//console.log(activeSlide);
		slideSelector[activeSlide].className = "slide active";
		resumebtn.style.display = "inline-block";
		
	}
	function resumeSlideShow(){
		myInterval = setInterval(playSlideShow, slideInterval);
		resumebtn.style.display = "none";
	}
    
	
}();
