var calculateIntersection2 = function(x1, y1, w1, h1, x2, y2) {
  var dx1 = x2 - x1;
  var dy1 = y2 - y1;
  console.log("dx1: "+dx1+"| dy1: "+dy1);

  var ctanAlpha = dx1 != 0 ? dy1/dx1 : 0;
  console.log("ctan(alpha): "+ctanAlpha);

  var rectCtanAlpha = w1 != 0 ? h1/w1 : 0;
  console.log("rectCtan(alpha): "+rectCtanAlpha);

  var x3 = 1/ctanAlpha * h1/2;
  var y3 = ctanAlpha * w1/2;

//  console.log("x3: "+x3+"| y3: "+y3);

  if(rectCtanAlpha<ctanAlpha) {
    y3 = y1 + h1/2;
    x3 = x1 + x3;
  } else {
    x3 = x1 + w1/2
    y3 = y1 + y3;
  }

  console.log("x3: "+x3+"| y3: "+y3);
}

var calculateIntersection = function(x1, y1, w1, h1, x2, y2) {
	var dx = x2 - x1;
	var dy = y2 - y1;
	if( dx != 0 && dy != 0 ) {
		var dxSign = dx >= 0 ? 1 : -1; 
		var dySign = dy >= 0 ? 1 : -1; 
		var dx2 = dx/dy * dySign * h1/2;
		var dy2 = dy/dx * dxSign * w1/2;
		var x = Math.min(Math.abs(dx2), w1/2) * dxSign + x1;
		var y = Math.min(Math.abs(dy2), h1/2) * dySign + y1;
	    console.log("x: "+x+"| y: "+y);
	    return {
	    	"x":x,
	    	"y":y
	    }
    } else {
	    console.log("x: "+x+"| y: "+y);
	    return {
	    	"x":x,
	    	"y":y
	    }
    }
}


calculateIntersection(0,0,40,20, 40,30);
console.log("-----------------");
calculateIntersection(0,0,40,20, 40,10);
console.log("-----------------");
calculateIntersection(0,0,40,20, 40,-10);
console.log("-----------------");
calculateIntersection(0,0,40,20, 40,-30);
console.log("-----------------");
calculateIntersection(0,0,40,20, -40,30);
console.log("-----------------");
calculateIntersection(0,0,40,20, -40,10);
console.log("-----------------");
calculateIntersection(0,0,40,20, -40,-10);
console.log("-----------------");
calculateIntersection(0,0,40,20, -40,-30);
console.log("-----------------");
//calculateIntersection(100,100,200,300, 200,400);
//calculateIntersection(100,100,200,200, 400,-200);
//calculateIntersection(100,100,200,200, -100,-100);
//calculateIntersection(100,100,200,200, -200,200);


