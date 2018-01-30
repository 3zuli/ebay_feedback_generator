// var focused = document.activeElement;

// var el = document.querySelector("input[id='login']");

// console.log(focused.tagName);
// if(focused.tagName=="INPUT"){
// 	focused.value = focused.value + "¯\\_(ツ)_/¯"
// }
// else{
// 	focused.innerHTML = focused.innerHTML + "¯\\_(ツ)_/¯";
// }

// 122390269701-1886689622002
// 232018789163-1520966921013
// 311173670944-817161864021
// 180979551089-1762865218008
// 222430862074-2022849908012
// 201498235455-1620349483010
// 191090408377-1470634541009
// 262123918224-2152046159016

// ON_TIME_DELIVERY-INPUT-\d+-\d+-2



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
	e.key="0";    /* just enter the char you want to send */
	e.keyCode=0; /*e.key.charCodeAt(0);*/
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


$(function() {
	$("#btn2").click(function(){
		// fillComment();
		autoFeedback();
	});
});

