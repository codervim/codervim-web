$(function() {
    a = enList;

    var n = parseInt( $("#order").text() ) ;
    if (1 == n) {
	$("#article").append( $.get("/en/" + enList[n] ) );	
	}
    $("#right_arrow").click(function() {
	var n = parseInt( $("#order").text() ) ;
	n = n + 1;	
	 var newTxt = $.get("/en/" + enList[n] );
alert(newTxt);
	$("#article").append( newTxt);	
	$("#order").text( n );
    });

});
