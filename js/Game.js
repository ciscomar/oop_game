//Game class
class Game {
    //Game contructor to initialize missed tries, phrases that can be shown and the active phrase
    constructor() {
        this.missed = 0;
        this.right = 0;
        this.phrases=['focus on the good','be happy', 'dont give up', 'you can do it', 'you are loved'];
        this.activePhrase = '';
    }
    //Game method that initializes new game, sets the active phrase.
    startGame() {
        let btnText = document.getElementById("btn__reset").textContent;
        if (btnText == 'Start Game') {

            const phrase = this.getRandomPhrase();
            this.activePhrase = new Phrase(phrase);
            this.activePhrase.addPhrasetoDisplay();
            overlay.style.display = 'none';
        }

        else {
            window.location.reload();
        }

    }
    //Method that gets a random phrase from the constructor
    getRandomPhrase() {
        const random = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[random];

    }
    //Method that starts the interaction to checkLetter when clicked on or pressed with keyboard
    handleInteraction(e, event) {
        let show = new Phrase();
        if (e != 0) {
            let letter = e.target;
            show.checkLetter(letter.textContent, letter);
        } else {

            let buttons = document.getElementsByTagName('button')
            for (let i = 0; i < 27; i++) {
                if (buttons[i].textContent == event.key) {
                    show.checkLetter(event.key, document.getElementsByTagName('button')[i])
                }
            }

        }

    }
    //Method that removes a life when the letter is not matched, and checks if tries are over to send gameover
    removeLife() {

        if (this.missed == 4) {

            this.gameOver();
        } else {

            let remove = document.querySelectorAll("img")[this.missed + 1]
            remove.src = "images/lostHeart.png";
        }
    }
    // Method that checks if the matched letters are donde to win the game
    checkForWin() {
        let letters = document.getElementsByClassName("letter");

        if (this.right === letters.length) {
            overlay.classList.replace("start", "win")
            $("#overlay").slideDown("fast", function () { });
            document.getElementById("btn__reset").textContent = "Reset Game";
            document.getElementById("game-over-message").textContent = "YOU WIN :D"
        }
    }
    //Method that finishes the game if the lives are over
    gameOver() {

        let lose = document.querySelectorAll("img")[0]
        lose.src = "images/hunterlose.png";
        overlay.classList.replace("start", "lose")
        $("#overlay").slideDown("fast", function () { });
        document.getElementById("btn__reset").textContent = "Reset Game";
        document.getElementById("game-over-message").textContent = "YOU LOSE :("
    }
}