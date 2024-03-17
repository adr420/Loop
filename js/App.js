import { Sound } from "./Sound.js";

/**
 * ==== TODO =====
 * 
 * -> Setup canvas
 * -> Make Shapes.js
 * -> Make Draw.js
 * 
 */
const body = document.body;
const loader = document.querySelector(".loader");
const game_elem = document.querySelector(".game");
const PIXEL_RATIO = (function () {
    var ctx = document.createElement("canvas").getContext("2d"),
        dpr = window.devicePixelRatio || 1,
        bsr = ctx.webkitBackingStorePixelRatio ||
              ctx.mozBackingStorePixelRatio ||
              ctx.msBackingStorePixelRatio ||
              ctx.oBackingStorePixelRatio ||
              ctx.backingStorePixelRatio || 1;

    return dpr / bsr;
})();


const createHiDPICanvas = function(w, h, ratio) {
    if (!ratio) { ratio = PIXEL_RATIO; }
    var can = document.createElement("canvas");
    can.width = w * ratio;
    can.height = h * ratio;
    can.style.width = w + "px";
    can.style.height = h + "px";
    can.getContext("2d").setTransform(ratio, 0, 0, ratio, 0, 0);
    return can;
}


const App = {
    __color: null,
    set color({r,g,b}){
        this.__color = {r,g,b};
        body.style.background = `rgba(${r},${g},${b},0.35)`;
        loader.style.color = `rgba(${r},${g},${b},1)`;
    },
    init: function () {
        // loader.onclick = () => {
        //     Sound.init();
        // }
        loader.style.display = "none";

        this.color = {r:Math.random()*180,g:Math.random()*180,b:Math.random()*180};
        
        this.test();

        
    },
    test: function(){
        const canvas = (createHiDPICanvas(window.innerWidth,window.innerHeight));
        canvas.id = "gameScreen";
        game_elem.appendChild(canvas);
        
        const ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.lineWidth = 5;
        ctx.arc(100,100,50,0,2*Math.PI);
        ctx.stroke();
        ctx.closePath();

    }
}

window.onload = App.init.bind(App);