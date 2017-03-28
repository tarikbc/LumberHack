var robot = require("robotjs");
var corMadeira = "886332";
var galhoDireita = { x: 450, y: 615 };
var galhoEsquerda = { x: 390, y: 615 };
var tempo = 10;
var espera = 50;
var qtd = 0;
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

while(true){
	if(qtd==400){
		console.log("--BOOOOST--");
		tempo = 5;
		espera = 10;
	}
	if(robot.getPixelColor(399,379) == "a17438"){
		if(robot.getPixelColor(galhoDireita.x, galhoDireita.y) == corMadeira){
			console.log("Madeira na direita.")
			robot.keyTap("left");
			qtd++;
			sleep(tempo);
			robot.keyTap("left");
			qtd++;
		}
		if(robot.getPixelColor(galhoEsquerda.x, galhoEsquerda.y) == corMadeira){
			console.log("Madeira na esquerda.")
			robot.keyTap("right");
			qtd++;
			sleep(tempo);
			robot.keyTap("right");
			qtd++;
		}
		sleep(espera);
		

	}else{
		console.log("MORREU, Pontos: "+qtd);
		qtd = 2;
		tempo = 10;
		espera = 50;
		robot.keyTap("space");
		sleep(300);
		robot.keyTap("right");
		sleep(tempo);
		robot.keyTap("right");
	}
}