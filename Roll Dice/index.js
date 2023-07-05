let x;
let y;
let z;



document.getElementById("rollButton").onclick = function () {
    x = Math.floor(Math.random() * 6) + 1;//This is a random number where it gives us result from 1 to 6
    y = Math.floor(Math.random() * 6) + 1;
    z = Math.floor(Math.random() * 6) + 1;



    document.getElementById("xlabel").innerHTML = x;

    document.getElementById("ylabel").innerHTML = y;

    document.getElementById("zlabel").innerHTML = z;
}
