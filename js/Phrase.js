//Phrase class
class Phrase{
    //Phrase contructor
    constructor(phrase){
    this.phrase = phrase;

    }
//Phrase method that that adds the phrase to the display
    addPhrasetoDisplay(){
        let phrase =document.getElementById("phrase").firstElementChild;

        for (let i = 0; i < this.phrase.length; i++) {
            let y= "";
            if(this.phrase[i]==" "){
                y= '<li class="show letter_blank '+this.phrase[i]+'">'+this.phrase[i]+'</li>'
            }else
            {
                y= '<li class="letter '+this.phrase[i]+'">'+this.phrase[i]+'</li>'
            }

            phrase.insertAdjacentHTML('beforeend',y);
        }


    }
//Phrase method that checks if the sent letter is contained in the phrase, so it can be sent to showmatchedletter method
    checkLetter(letter, keyboard) {

        let letters = document.getElementsByClassName(letter);

        if (keyboard.className == 'key') {
            if (letters.length != 0) {
                for (let i = 0; i < letters.length; i++) {

                    this.showMatchLetter(letters[i], keyboard)
                    NewGame.checkForWin(NewGame.right++);
                }

            } else {
                keyboard.classList.add("wrong");
                keyboard.disabled=true;
                NewGame.removeLife();
                NewGame.missed++;
            }

        }
    }
    
//Phrase method that adds show class to the matched letter
    showMatchLetter(letter,keyboard){

        letter.classList.add("show");
        keyboard.disabled=true;
        keyboard.classList.add("chosen");
        keyboard.classList.remove("wrong");
     
    }
}