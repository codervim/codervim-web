$(function() {
    a = enList;
    alert("jquery ready");
    $("#right_arrow").click(function() {
	var n = parseInt( $("#order").text() ) + 1;
	$("#article").text( $.get("/en/" + enList[n] ) );	
	$("#order").text( n );
    });

});
