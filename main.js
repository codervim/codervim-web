$(function() {
    a = enList;
    alert("jquery ready");

	var n = parseInt( $("#order").text() ) + 1;
if (1 == n) {
	$("#article").append( $.get("/en/" + enList[n] ) );	
}
    $("#right_arrow").click(function() {
	var n = parseInt( $("#order").text() ) ;
	n = n + 1;	
	$("#article").append( $.get("/en/" + enList[n] ) );	
	$("#order").text( n );
    });

});
