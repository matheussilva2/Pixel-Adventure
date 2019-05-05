var tela = document.getElementById('tela');
var contexto = tela.getContext('2d');

function renderMap(map){
	for(var i=0;i<map.length;i++){
		contexto.beginPath();
		contexto.rect(map[i].x,map[i].y,map[i].w,map[i].h);
		contexto.fillStyle = map[i].cor;
		contexto.fill();
		contexto.closePath();
	}
}

function renderCharacter(character){
	contexto.beginPath();
	contexto.rect(character.x, character.y, character.w, character.h);
	contexto.fillStyle = character.cor;
	contexto.fill();
	contexto.closePath();
}

function limparTela(){
	contexto.clearRect(0,0,tela.width, tela.height);
}

setInterval(limparTela, 10);
setInterval(renderMap, 10, mapa);
setInterval(renderCharacter, 10, character);