window.onload= function() {
    let gwall= document.querySelectorAll(".boundary");
    let maze_g = document.getElementById("maze");
    let hwall = false;
    let win = false;
    for(let index =0; index< gwall.length-1; index++){
        gwall[index].addEventListener("mouseover", function(){
            for(index =0; index< gwall.length-1; index++){
                gwall[index].setAttribute('class','boundary youlose');
            }
             hwall = true;
        });

    }


    let sGame =document.getElementById('start');
    sGame.addEventListener("mouseover", function(){
        let eGame = document.getElementById("end");
        eGame.addEventListener("mouseover", function(){
            if (hwall === false){
                alert("You Win!");
                
                }
            });
        });

    sGame.addEventListener("click", function(){
        for (let index = 0; index<gwall.length-1; index ++){
            gwall[index].setAttribute("class","boundary");
        }
        if(win ===false){
            let stats = document.getElementById('status');
            let lWin = stats.innerHTML = stats.innerHTML.search("You Loose!");
            if (lWin !== -1){
                stats.innerHTML =stats.innerHTML.slice(0, lWin);
            }
        }else{
            let stats = documnent.getElementById("status");
            let lWin =stats.innerHTML.seacrh("You Win!");
            if(lWin !== -1){
                stats.innerHTML = stat.innerHTML.slice(0,lWin);
            }
        }
        hwall = false;
        win = false;
    });

}