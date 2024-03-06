// to know value is press by button
function pressByVirtualBtn() {
    let str = ""
    let btn = document.querySelectorAll(".btn");
    btn.forEach((button) => {
        let inputField = document.getElementById("text");
        button.addEventListener("click", (e) => {
            // console.log(e.target);
            str = str + e.target.innerHTML
            document.getElementById("text").value = str;

        })
    })
}
pressByVirtualBtn();
// to know value is press by keyboard button.

// display equation or expression in input field 
// calculate input field 
// display answer again to input field