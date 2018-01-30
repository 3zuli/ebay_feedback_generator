$(function() {
    console.log( "ready!" );

    $("input").click(function(){
		// console.log("click");
		var $focused = $(':focus');
		console.log($focused.attr('name'));
	});

	$("#btn1").click(function(){
		// console.log("click");
		var $focused = $(':focus');
		console.log($focused.attr('name'));
	});
});


// $(function() {
// var $focused = $(':focus');
// $focused.val($focused.val() + "¯\\_(ツ)_/¯");
// });

var focused = document.activeElement;
console.log(focused.tagName);
if(focused.tagName=="INPUT"){
	focused.value = focused.value + "¯\\_(ツ)_/¯"
}
else{
	focused.innerHTML = focused.innerHTML + "¯\\_(ツ)_/¯";
}

