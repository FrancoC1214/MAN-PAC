
var world = [
    [1,1,1,1,1],
    [1,0,2,2,1],
    [1,2,1,2,1],
    [1,2,2,2,1],
    [1,2,2,2,1],
    [1,2,1,2,1],
    [1,2,2,2,1],
    [1,2,2,2,1],
    [1,2,1,2,1],
    [1,2,2,2,1],
    [1,1,1,1,1],
];
var worldDict = {
    0: "blank",
    1: "wall",
    2: "sushi"
}
function drawWorld(){
    var output = "";
            
    for(var row = 0; row < world.length; row++){
        output += "<div class = 'row'></div>"
            for(var x = 0; x < world[row].length; x++){
                output += "<div class = '" + worldDict[
                world[row][x]] +"'></div>"
            }
        output += "</div>"
    }       
    document.getElementById("world").innerHTML = output;
}
drawWorld();{
    var ninjaman = {
        x:1,
        y:1
    }
    function drawNinjaman(){
            document.getElementById('ninjaman').style.top =
            ninjaman.x * 40 + 'px'
            document.getElementById('ninjaman').style.left =
            ninjaman.x * 40 + 'px'
        }
}
            
drawNinjaman()

document.onkeydown = function(e){
    if(e.keycode == 37){
        ninjaman.x--;
    }
    if(e.keycode == 39){
        ninjaman.x++;
    }
    if(e.keycode == 40){
        ninjaman.y--;
    }
    drawNinjaman()
}