import { Point, Circle, Arc, Line, Style } from "./Draw.js";

function DrawArc45deg(center)
{

}
function DrawToFourthArc(center)
{

}

export const Shapes = {
    init: function(){
        this.arc = new Arc(Point(200,200),50,0,-Math.PI/2);
    },
    render: function(ctx,delta){
        Style(ctx,{lineWidth:10});
        this.arc.render(ctx);
    }
}