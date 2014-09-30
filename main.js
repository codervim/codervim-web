$(function() {
    a = enList;

    var n = parseInt( $("#order").text() ) ;
    if (1 == n) {
	 $.get("/en/" + enList[n] , function(data) {
		 $("#article").append( data);
		} );	
	}
    $("#right_arrow").click(function() {
	var n = parseInt( $("#order").text() ) ;
	n = n + 1;	
	$.get("/en/" + enList[n], function(data) {
		$("#article").html(data);
		});
	$("#order").text( n );
    });

});
