export const Sound = {
    __audio: null,
    init: function(){
        this.__audio = new Audio();
        this.__audio.src = "./sound/inf.mp3";
        this.__audio.loop = true;
        
        this.__audio.oncanplay = () => {
            this.__audio.play();
        }
    }
}