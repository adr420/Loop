import { Sound } from "./Sound.js";
import { Point, Circle, Arc, Line, Style } from "./Draw.js";

/**
 * ==== TODO =====
 * 
 * -> Make Shapes.js
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
        
    },
	render: function()
	{
		
	}
}

window.onload = App.init.bind(App);
