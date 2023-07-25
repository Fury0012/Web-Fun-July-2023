console.log("hello world");

function message() {
    alert("ninja was liked!")

}
function login(element) {
    console.log("Hello")
    if(element.innerText == "Login") {
        element.innerText = "Logout";
        } else {
            element.innerText = "Login";
        }
    }

function hide(el) {
    el.remove();
}