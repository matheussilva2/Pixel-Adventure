var character = {'cor':'#00FFFF', 'x': 20, 'y':tela.height-30, 'h':10, 'w':10, 'colisor': true}
const velocidade = 2;
const aceleracao = 0.1;
const pulo = -5;

const aceleracaoGravidade = 0.3;

//Controlador
var moveCoords = {'x':0,'y':0}

function gravidade(){
	if(!isGround()){
		moveCoords.y += aceleracaoGravidade;
	}else{
		moveCoords.y = 0;
	}
}

function move(){
	character.x += moveCoords.x;
	character.y += moveCoords.y;
	if(findBlockByVector(Math.round(character.x), Math.round(character.y))){
		character.y+=1;
	}
}

function keyDown(event){
	//Check move X
	if(event.key == 'd' || event.key == 'ArrowRight'){
		while(moveCoords.x < velocidade){
			moveCoords.x += velocidade;
		}
	}else if(event.key == 'a' || event.key == 'ArrowLeft'){
		while(moveCoords.x > -velocidade){
			moveCoords.x -= velocidade;
		}
	}

	//Check move Y
	if(event.key == ' '){
		if(isGround()){
			moveCoords.y = pulo;
		}
	}
}

function keyUp(event){
	if(event.key == 'd' || event.key == 'ArrowRight' || event.key == 'a' || event.key == 'ArrowLeft'){
		while(moveCoords.x != 0){
			if(moveCoords.x>0){
				moveCoords.x -= velocidade;
			}else{
				moveCoords.x += velocidade;
			}
		}
	}
}

function isGround(){
	return findBlockByVector(Math.ceil(character.x), Math.ceil(character.y+character.w));
}

document.addEventListener("keydown", keyDown, false);
document.addEventListener("keyup", keyUp, false);

setInterval(move, 10);
setInterval(gravidade,10);