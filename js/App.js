
const body = document.body;
const loader = document.querySelector(".loader");

const App = {
    __color: null,
    set color({r,g,b}){
        this.__color = {r,g,b};
        loader.style.background = `rgba(${r},${g},${b},0.35)`;
        loader.style.color = `rgba(${r},${g},${b},1)`;
    },
    init: function () {
        this.color = {r:Math.random()*180,g:Math.random()*180,b:Math.random()*180}; 
    }
}

window.onload = App.init.bind(App);