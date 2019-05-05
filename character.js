var character = {'cor':'#003366', 'x': 20, 'y':tela.height-30, 'h':10, 'w':10, 'colisor': true}
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
	if(moveCoords.x > 0)
		if(!findBlockByVector(Math.ceil(Math.floor(character.x) / 10) * 10,character.y)){
			character.x += moveCoords.x;
		}else {
			moveCoords.x = 0;
		}
	else if(moveCoords.x < 0){
		if(!findBlockByVector((Math.ceil(Math.floor(character.x) / 10) * 10)-10,character.y)){
			character.x += moveCoords.x;
		}else {
			moveCoords.x = 0;
		}
	}
	character.y += moveCoords.y;
	if(findBlockByVector(character.x, Math.ceil(Math.floor(character.y) / 10) * 10)){
		character.y-=1;
	}
}

function moveRight(){
	while(moveCoords.x < velocidade){
		moveCoords.x += velocidade;
	}
}

function moveLeft(){
	while(moveCoords.x > -velocidade){
		moveCoords.x -= velocidade;
	}
}

function keyDown(event){
	//Check move X
	if(event.key == 'd' || event.key == 'ArrowRight'){
		moveRight();
	}else if(event.key == 'a' || event.key == 'ArrowLeft'){
		moveLeft();
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

function gameOver(){
	if(character.y > tela.height){
		character.y = tela.height-40;
		character.x = 20;
	}
}

function loop(){
	move();
	gravidade();
	gameOver();
}
setInterval(loop, 10);