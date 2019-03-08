//Instance of new game class
let NewGame= new Game();

//Listen for reset button click to start new game
document.getElementById("btn__reset").addEventListener('click',function(){
    NewGame.startGame();
});
//Listen for keyboard click to handleinteraction in game
document.getElementById("qwerty").addEventListener('click',function(e){
    NewGame.handleInteraction(e,0);
});
//Listens for pressedkey to handle interaction in game
addEventListener('keypress',function(event){
    NewGame.handleInteraction(0,event)
})

