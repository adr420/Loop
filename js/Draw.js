
export const Point = (x,y) =>{
	return {x,y};
}

export function Style(ctx,{strokeStyle,lineWidth})
{
	ctx.strokeStyle = strokeStyle ?? "red";
	ctx.lineWidth = lineWidth ?? 3;
}


export function Circle(p,rad)
{
	this.p = p;
	this.rad = rad;
}
Circle.prototype.render = function(ctx){
	ctx.beginPath();
	ctx.arc(this.p.x,this.p.y,this.rad,0,2*Math.PI);
	ctx.stroke();
	ctx.closePath();
}


export function Line(p1,p2)
{
	this.p1 = p1;
	this.p2 = p2;
}
Line.prototype.render = function(ctx){
	ctx.beginPath();
	ctx.moveTo(this.p1.x,this.p1.y);
	ctx.lineTo(this.p2.x,this.p2.y);
	ctx.stroke();
	ctx.closePath();
}


export function Arc(center,rad,startAngle,endAngle)
{
	this.center = center;
	this.rad = rad;
	this.startAngle = startAngle;
	this.endAngle = endAngle;
}
Arc.prototype.render = function(ctx){
	ctx.beginPath();
	ctx.arc(this.center.x,this.center.y,this.rad,this.startAngle,this.endAngle);
	ctx.stroke();
	ctx.closePath();
}
