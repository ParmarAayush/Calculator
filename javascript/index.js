let str = "";
let btn = document.querySelectorAll(".btn");
Array.from(btn).forEach((buttons) => {
    inputField = document.getElementsByClassName("text").value;
    console.log(inputField);
    buttons.addEventListener("click", (e) => {
        if (e.target.innerHTML == "X") {
            str = str + e.target.innerHTML;
            str = str.replace("X", "*");
            document.querySelector(".text").value = str;
        }
        else if (e.target.innerHTML == "=") {
            console.log(str);
            str = eval(str);
            document.querySelector(".text").value = str;
        } else if (e.target.innerHTML == "C") {
            str = ""
            document.querySelector(".text").value = str;
        }
        else {
            console.log(e.target);
            str = str + e.target.innerHTML;
            document.querySelector(".text").value = str;
        }
    })
})
// document.addEventListener('keypress', calculate)
function calculate() {
    inputField = document.getElementsByClassName("text").value;
    str = eval(str);
    document.querySelector(".text").value = str;

}