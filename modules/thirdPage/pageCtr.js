angular.module('thirdPage').controller('pageControllerThree',function($scope){});

$(document).ready(function(){
	$(".shown").click(function(){
		$("#putOff").css("display","block");
	});
});