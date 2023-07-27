console.log("page loaded...");
var bar = document.querySelector(".card-list-item")
var bar2 = document.querySelector(".card-list-item2")
var req = document.querySelector(".badge")
var req2 = document.querySelector(".badge2")
var reqs2 = 418
var reqs = 2
var edited = "Majd Belaidi";
var h1Element = document.querySelector(".user-card .card-body h1");




function accept1() {
    bar.remove();
    reqs--;
    req.innerText = reqs;
    reqs2++;
    req2.innerText = reqs2;

}
function close1() {
    bar.remove();
    reqs--;
    req.innerText = reqs;
}



function accept2() {
    bar2.remove();
    reqs--;
    req.innerText = reqs;
    reqs2++;
    req2.innerText = reqs2;

}
function close2() {
    bar.remove();
    reqs--;
    req.innerText = reqs;
}
function close2() {
    bar2.remove();
    reqs--;
    req.innerText = reqs;

}

function edit() {
    h1Element.innerText = edited;
}