window.onload= function() {
    let gwall= document.querySelectorAll(".boundary");
    let maze_g = document.getElementById("maze");
    let stats = document.getElementById('status');
    let hwall = false;
    let win = false;
    for(let index =0; index< gwall.length-1; index++){
        gwall[index].addEventListener("mouseover", function(){
            for(index =0; index< gwall.length-1; index++){
                gwall[index].setAttribute('class','boundary youlose');
            }
             hwall = true;
             stats.innerHTML = "You Lose!";
        });
    }
    let sGame =document.getElementById('start');
    sGame.addEventListener("mouseover", function(){
        let eGame = document.getElementById("end");
        eGame.addEventListener("mouseover", function(){
            if (hwall === false){
                stats.innerHTML = "You Win!";
                }
            });
        });
    sGame.addEventListener("click", function(){
        for (let index = 0; index<gwall.length-1; index ++){
            gwall[index].setAttribute("class","boundary");
            stats.innerHTML = "Move your mouse over the 'S' to begin";
        } hwall=false;  
    });
}
