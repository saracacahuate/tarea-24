class Stone{
	constructor(x,y,r)
	{
	// assign options to the rubber ball
	    var options={restitution:0.3,friction:5,density:30}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);

	}
    display()
    {
        var stonepos=this.body.position;		
        push()
        translate(stonepos.x, stonepos.y);
        rectMode(CENTER)
        strokeWeight(4);
        ellipse(0,0,this.r, this.r);
        stroke("black");
        fill("darkblue");
        //draw the ellipse here to display the rubber ball

        pop()
    }
}
