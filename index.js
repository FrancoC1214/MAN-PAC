
var world = [
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
];
var world = [];
var worldDict = {
    0: 'wall',
    1: 'blank',
    2: 'sushi',
    3: 'onigiri'
}

function drawWorld(){
    output = "";
    var worldheight = 15;
    var worldwidth = 15;
    for(var row = 0; row < worldheight; row++){
        world.push([])
        output += "<div class = 'row'>"

            for (var col = 0; col < worldwidth; col++){
                //first row is all walls
                if(row == 0 || row == 14 || col==0 || col==14){
                    output += "<div class = '" + worldDict[0] +"'> </div>";
                    world[row].push(0);
                }else{
                  world[row].push(Math.floor(Math.random()*4));
                  output += "<div class = '" + worldDict[world[row][col]] +"'></div>";
                }
            }


        output += "</div>"
    }
    document.getElementById('world').innerHTML = output;
}
drawWorld();
var ninjaman = {
    x: 1,
    y: 9
}

function drawNinjaman(){
    document.getElementById('ninjaman').style.top = ninjaman.y * 40 + 'px'
    document.getElementById('ninjaman').style.left = ninjaman.x * 40 + 'px'
}
drawNinjaman()

document.onkeydown = function(e){
    if(e.keyCode == 37){
        if(world[ninjaman.y][ninjaman.x - 1] !=1){
            ninjaman.x--;
        }
    }
    if(e.keyCode == 39){
        if(world[ninjaman.y][ninjaman.x + 1] !=1){
            ninjaman.x++;
        }
    }
    if(e.keyCode == 38){
        if(world[ninjaman.y - 1][ninjaman.x] !=1){
            ninjaman.y--;
        }
    }
    if(e.keyCode == 40){
        if(world[ninjaman.y + 1][ninjaman.x] !=1){
            ninjaman.y++;
        }
    }
    world[ninjaman.y][ninjaman.x] = 0;
    drawNinjaman()
    drawWorld()
}

function drawScore(){
    var scoreText = "Score" + score
    ctx.font = "16px Arial";
    ctx.fillStyle = "0095DD";
    ctx.fillText("Score: "+score, 8, 20);
    ctx.textAling = "center"

    ctx.fillText(scoreText, textPosX, textPosY-265);
    ctx.restore();
}
