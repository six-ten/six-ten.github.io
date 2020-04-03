
console.log("LOADED !");
box = document.getElementById("normal").getBoundingClientRect() ;

let w = box.right - box.left ;
let h = box.bottom - box.top ;



var sketch = function(p){
    p.x = 100 ;
    p.y = 100 ; 

    p.setup = function(){
        p.canvas = p.createCanvas(200,200);
        p.background(51);
       
    }

    p.draw = function(){
        p.fill(255,0,200,25);
        p.noStroke();
        p.ellipse(p.x,p.y,48,48);
            p.x = p.x + p.random(-10,10);
            p.y = p.y + p.random(-10,10);
    }

}

var sketch2 = function(p){
    p.x = 100 ;
    p.y = 100 ; 

    p.setup = function(){
        p.canvas = p.createCanvas(w,h);
        p.canvas.parent("sketch-holder");
        p.background(51);
    }

    p.draw = function(){
        p.fill(255,0,200,25);
        p.noStroke();
        p.ellipse(p.x,p.y,48,48);
            p.x = p.x + p.random(-10,10);
            p.y = p.y + p.random(-10,10);
    }

}

var myp5 = new p5(sketch);
var myp52 = new p5(sketch2);
function windowResized(){
    box = document.getElementById("mySelection").getBoundingClientRect() ;
    myp52.canvas.resizeCanvas(box.width,box.height)
}
function reset(){
    myp5.background(51);
}

setTimeout(reset,3000);