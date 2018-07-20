let x = 0;
let y = 0;
let w = 75;
let h = 75;


function setup(){
    createCanvas(1000, 1000);
    for(i = 1; i<101; i ++){
        fill("blue")
        rect(x, y, w, h);
        if(i % 10==0){
            y=y+h;
            x=0
        }
        else{
            x=x+w
        }
    }
}
let ships=[[0]]
function mouselcicked(){
}
