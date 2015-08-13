var candList = [];

$(document).ready(function(){
    var public_spreadsheet_url = "https://docs.google.com/spreadsheets/d/1P3hmmcnoRIzoWvECDkfXpMRulJGoC5XpeHpODmdUDT0/pubhtml";
    Tabletop.init( { key: public_spreadsheet_url, callback: getInfo, simpleSheet: true } );

    //console.log("I can excute this statement");
    $("#right").hide();
    $("#wrong").hide();
    playGame();
    $("#nextButton").fadeOut(1,0);
});

function getInfo(data) {
    for (var i = 0; i < data.length; i++) {
		candList.push(data[i]);
	}
	//console.log(candList);
	nextQuote();
};

var currCand = 0;
var score=0;

//at end of game
function scoreReport(){
	$("h1").html("You scored " + score +"/12 correctly.");
	if(score < 8){
		$("#right").hide("slow");
		$("#wrong").hide("slow");
		$("#quote").html("Perhaps you should educate yourself before voting!");

	}
	else{
		$("#right").hide("slow");
		$("#wrong").hide("slow");
		$("#quote").html("You seem to know it all. Maybe you should run!");
	}

	$("#nextButton").fadeTo(1, 1);
	$("#nextButton").click(function(){
		location.reload();
	});
}

function nextQuote(){
	var quotes = [candList[0].quote1, candList[3].quote3, candList[1].quote2 , candList[3].quote2, candList[0].quote3, candList[2].quote1, candList[1].quote3, candList[3].quote1, candList[2].quote2, candList[0].quote2, candList[2].quote3, candList[1].quote1];
	currCand += 1;
	$("#quote").html(quotes[currCand]);
	if(currCand > quotes.length){
		scoreReport();
	}
}

/*function changeQuote() {
	var quotes = [candList[0].quote1, candList[1].quote2 , candList[3].quote2, candList[2].quote1, candList[3].quote1, candList[2].quote2, candList[0].quote2, candList[1].quote1];
	$("#button").click(nextQuote());
};*/

function playGame() {
	
	$("#hillaryButton").click(function() {
		if (candList[0].quote1 === $("#quote").html()||(candList[0].quote2 === $("#quote").html())||candList[0].quote3 === $("#quote").html()) {
			$("#right").show("slow");
			score+=1
			nextQuote();
			$("#right").hide("slow");
		}
		else {
			$("#wrong").show("slow");	
			nextQuote();
			$("#wrong").hide("slow");
		}
	});

	$("#trumpButton").click(function() {
		if (candList[1].quote1 === $("#quote").html()||(candList[1].quote2 === $("#quote").html())||candList[1].quote3 === $("#quote").html()) {
			$("#right").show("slow");
			score+=1;
			nextQuote();
			$("#right").hide("slow");
		}
		else {
			$("#wrong").show("slow");
			nextQuote();
			$("#wrong").hide("slow");
		}
	});

	$("#cruzButton").click(function() {
		if (candList[2].quote1 === $("#quote").html()||(candList[2].quote2 === $("#quote").html())||candList[2].quote3 === $("#quote").html()) {
			$("#right").show("slow");
			score+=1;
			nextQuote();
			$("#right").hide("slow");
		
		}
		else {
			$("#wrong").show("slow");
			nextQuote();
			$("#wrong").hide("slow");
		
		}
	});

	$("#bernieButton").click(function() {
		if (candList[3].quote1 === $("#quote").html()||(candList[3].quote2 === $("#quote").html())||candList[3].quote3 === $("#quote").html()) {
			$("#right").show("slow");
			score+=1;
			nextQuote();
			$("#right").hide("slow");
			
		}
		else {
			$("#wrong").show("slow");
			nextQuote();	
			$("#wrong").hide("slow");		
		}
	});

}

