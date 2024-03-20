import { Sound } from "./Sound.js";
import { Shapes } from "./Shapes.js";

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
const createHiDPICanvas = function (w, h, ratio) {
    if (!ratio) { ratio = PIXEL_RATIO; }
    var can = document.createElement("canvas");
    can.width = w * ratio;
    can.height = h * ratio;
    can.style.width = w + "px";
    can.style.height = h + "px";
    can.getContext("2d").setTransform(ratio, 0, 0, ratio, 0, 0);
    return can;
}
const canvas = (createHiDPICanvas(window.innerWidth, window.innerHeight));
const ctx = canvas.getContext("2d");


const App = {
    __color: null,
    set color({ r, g, b }) {
        this.__color = { r, g, b };
        body.style.background = `rgba(${r},${g},${b},0.35)`;
        loader.style.color = `rgba(${r},${g},${b},1)`;
    },
    init: function () {
        loader.style.display = "none";
        // loader.onclick = () => {
        //     Sound.init();
        // }
        game_elem.appendChild(canvas);
        canvas.id = "gameScreen";
        this.color = { r: Math.random() * 180, g: Math.random() * 180, b: Math.random() * 180 };

        Shapes.init(this.color);
        requestAnimationFrame(this.render.bind(this));
    },
    lstRenTm: null,
    __delay: 17,
    render: function (currTm) {
        requestAnimationFrame(this.render.bind(this));

        if ()
        Shapes.render(ctx,currTm - this.lstRenTm);
        this.lstRenTm = currTm;
    }
}

window.onload = App.init.bind(App);