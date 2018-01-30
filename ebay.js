/* Bookmarklet start */

var sellerAdjs = ['good', 'very good', 'nice', 'reliable'];
var qualityAdjs = ['very good', 'very high', 'good', 'high'];
var priceAdjs = ['good', 'very low', 'reasonable', 'affordable'];
var shippingAdjs = ['fast', 'quick'];

function randomItem(array) {
	return array[Math.floor(Math.random()*array.length)];
}

function cap(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function fillComment() {
	var commentInput = document.getElementsByName('OVERALL_EXPERIENCE_COMMENT')[0];
	comment = cap(randomItem(sellerAdjs)) + " seller, " + randomItem(priceAdjs) + " price, " + randomItem(qualityAdjs) + " quality, " + randomItem(shippingAdjs) + " shipping";
	commentInput.value = comment;
	
	/* https://elgervanboxtel.nl/site/blog/simulate-keydown-event-with-javascript */
	var e = new Event("keydown");
	e.key="0";
	e.keyCode=0;
	e.which=e.keyCode;
	e.altKey=false;
	e.ctrlKey=true;
	e.shiftKey=false;
	e.metaKey=false;
	e.bubbles=true;
	commentInput.dispatchEvent(e);
}

function autoFeedback() {
	idRe = /\d{5,}-\d{5,}/g;
	var htmlstr = document.body.innerHTML;
	var UUID = idRe.exec(htmlstr)[0];
	console.log(UUID);

	document.getElementById("ON_TIME_DELIVERY-INPUT-"+UUID+"-2").click();
	document.getElementById("OVERALL_EXPERIENCE-INPUT-"+UUID+"-POSITIVE").click();
	document.getElementById("DSR_ITEM_AS_DESCRIBED-INPUT-"+UUID+"-5").click();
	document.getElementById("DSR_SHIPPING_TIME-INPUT-"+UUID+"-5").click();
	document.getElementById("DSR_COMMUNICATION-INPUT-"+UUID+"-5").click();

	fillComment();
}

autoFeedback();
/* Bookmarklet end */

// jQuery button for convenient testing in test.html 
$(function() {
	$("#btn2").click(function(){
		// fillComment();
		autoFeedback();
	});
});

