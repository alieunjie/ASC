function setup(){
    createCanvas(600, 600);
    fill("red")
    rect(0, 0, 600, 600);
}

let color=false;
function mousePressed(){
    if(color){
        fill("red") 
        rect(0, 0, 600, 600);
        color=false 
    }else{
        fill("blue") 
        rect(0, 0, 600, 600);
        color=true
    }
}
