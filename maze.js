window.onload= function() {
    let gwall= document.querySelectorAll(".boundary");
    let maze_g = document.getElementById("maze");
    let stats = document.getElementById('status');
    let hwall = false;
    let win = false;
    for(let index =0; index< gwall.length-1; index++){
        gwall[index].addEventListener("mouseover", function(){
                gwall[index].setAttribute('class','boundary youlose');
                hwall =true;
        });
    }
}