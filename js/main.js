var myIndex = 0;
var myImages = document.getElementsByClassName("slider");

function carousel() {
    for (i = 0; i < myImages.length; i++) {
       myImages[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > myImages.length) {
      myIndex = 1}
    myImages[myIndex-1].style.display = "block";
    setTimeout(carousel, 3400); // Change image every 2 seconds
}

carousel();



	$(document).ready(function() {
		$('.js-scrollTo').on('click', function() { // Au clic sur un élément
			var page = $(this).attr('href'); // Page cible
			var speed = 750; // Durée de l'animation (en ms)
			$('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
			return false;
		});
	});


  animate();
